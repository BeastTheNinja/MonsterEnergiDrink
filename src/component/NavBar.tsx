import { NavLink } from "react-router"
import monsterlogo from "../assets/MonsterLogo.svg"

export const NavBar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-[#94C83D]" : "text-white"

    return (
        <div className="navbar relative">
            <div className="flex items-center justify-between pt-10">
                <div className="logo max-w-65 -mb-10 z-10">
                    <img src={monsterlogo} alt="Monster Logo" />
                </div>

                <div className="flex gap-6 font-bold text-lg">
                    <NavLink to="/" className={linkClass}>
                        Forside
                    </NavLink>
                    <NavLink to="/products" className={linkClass}>
                        Produkter
                    </NavLink>

                    {/* tjek om brugeren er logget ind, hvis ja så vis profil ellers login */}

                    {localStorage.getItem("token") ? (
                        <>
                            <NavLink to="/userProfile" className={linkClass}>
                                Profil
                            </NavLink>
                            <NavLink to="/logout" className={linkClass}>
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className={linkClass}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={linkClass}>
                                Opret bruger
                            </NavLink>
                        </>
                    )}
                </div>
            </div>

            <div className="ml-25 border-b border-[#94C83D] mb-5"></div>
        </div>
    )
}