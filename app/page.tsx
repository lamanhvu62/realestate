import Banner from "./components/Banner";
import { collection, getDocs } from "firebase/firestore";
import db from "./libs/firebaseConfig";


export default async function Home() {
  const banners = '123'

  
  return (
    <div className="">
      <Banner />
    </div>
  );
}