import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function Navbar(){
    return(
        <div>
            <nav>
                <Link href={'/'}><HomeIcon /></Link>
            </nav>
        </div>
    )
}