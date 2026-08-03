import { Link } from "react-router"


export const NavBar = () => {

    return (
        <>

            <div className="navbar h-15  flex items-center justify-between px-4 py-2 border-b-[#94C83D] border-b mb-15">
                <div className="logo max-w-45 h-10">
                    <img src="Monster Logo.svg" alt="Monster Logo" />
                </div>
                <div className="nav-links flex gap-4 justify-end font-bold text-lg">
                    <Link to="/" className="text-white hover:text-[#94C83D]">Home</Link>
                    <Link to="/products" className="text-white hover:text-[#94C83D]">Products</Link>
                    <Link to="/login" className="text-white hover:text-[#94C83D]">Login</Link>
                </div>
            </div>
        </>
    )
}