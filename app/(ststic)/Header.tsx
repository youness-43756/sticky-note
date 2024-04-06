"use client"
import { usePathname } from "next/navigation";
import LogoSection from "./header-sections/logo";
import RegisterSection from "./header-sections/register";
import SearchSection from "./header-sections/search";


export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-green-400 border-b-[3px] border-green-500 h-14 pt-2">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center lg:px-8 md:px-4 px-2">
                <LogoSection />
                <SearchSection classes={"hidden md:flex"} pathname={pathname} />
                <RegisterSection pathname={pathname} />
            </div>
        </header>
    )
}
