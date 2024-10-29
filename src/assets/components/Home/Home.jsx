import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Home() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
  )
}
