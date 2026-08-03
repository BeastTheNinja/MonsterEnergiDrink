import { Link } from "react-router"


export const NavBar = () => {

    return (
        <>

            <div className="navbar  flex items-center justify-between px-4 py-2">
                <div className="logo w-auto py-5">
                    <img src="Monster Logo.svg" alt="Monster Logo" className='' />
                </div>
                <div className="nav-links flex gap-4 border-b-[#94C83D] border-b w-screen justify-end font-bold text-lg p-2">
                    <Link to="/" className="text-white hover:text-[#94C83D]">Home</Link>
                    <Link to="/products" className="text-white hover:text-[#94C83D]">Products</Link>
                    <Link to="/login" className="text-white hover:text-[#94C83D]">Login</Link>
                </div>
            </div>
        </>
    )
}