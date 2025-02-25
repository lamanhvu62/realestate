import { db } from "@/app/libs/firebaseConfig";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async () => {
  const q = query(collection(db, "projects"), where("active", "==", true), orderBy("order", "asc"), limit(4));
  const banners = await getDocs(q);
  if (banners.empty) {
    return new NextResponse(JSON.stringify("empty"), { status: 200 });
  } else {
    const data = banners.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return new NextResponse(JSON.stringify(data), { status: 200 });
  }
};
