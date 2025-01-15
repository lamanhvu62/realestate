import { db } from '@/app/libs/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const query = await getDocs(collection(db, "projects"));
  if(query.empty) {
    return new NextResponse(JSON.stringify('empty'), {status: 200});
  } else {
    const banners = query.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return new NextResponse(JSON.stringify(banners), {status: 200});
  }
}