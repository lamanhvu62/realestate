import { db } from "@/app/libs/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const data = await req.json();
        const projectName = data.slug;

        // Create a query against the collection
        const q = query(collection(db, "projects"), where("link", "==", projectName));
        const querySnapshot = await getDocs(q);
        const idDoc = querySnapshot.docs.map((doc) => {
            return doc.id;
        })

        const detail = collection(db, "projects", idDoc[0], "detail");
        const detailSnapshot = await getDocs(detail);
        const detailData = detailSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        })

        if (querySnapshot.empty) {
            return new NextResponse(JSON.stringify({ message: "Project not found" }), { status: 404 });
        }


        return new NextResponse(JSON.stringify(detailData), { status: 200 });
    } catch (error) {
        console.error("Error fetching project details:", error);
        const errorMessage = (error as Error).message;
        return new NextResponse(JSON.stringify({ message: "Error fetching project details", error: errorMessage }), { status: 500 });
    }
};

export const GET = async () => {
    // get data from database
    try {
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        const projects = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        if (querySnapshot.empty) {
            return new NextResponse(JSON.stringify({ message: "No project found" }), { status: 404 });
        }
        return new NextResponse(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Error fetching project details", error: (error as Error).message }), { status: 500 });
    }
};