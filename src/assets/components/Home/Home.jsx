import { Outlet } from "react-router-dom";


export default function Home() {
  return (
    <div>
        <h1> This is the home component</h1>
        <Outlet></Outlet>
    </div>
  )
}
