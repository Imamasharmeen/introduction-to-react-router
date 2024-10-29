import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
        </nav>
    </div>
  )
}
