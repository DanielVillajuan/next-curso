import Link from "next/link";

export default function Header(){
    return (
        <nav className="w-full px-6 py-4 bg-gray-300 text-white flex justify-end gap-x-4">
            <Link href="/Nosotros" className="font-bold text-gray-900">Nosotros</Link>
            <Link href="/Contactos" className="font-bold text-gray-900">Contacto</Link>
        </nav>
    )
}
