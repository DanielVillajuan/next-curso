'use client'
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export default function Admin (){
    const { auth, logout } = useContext(AuthContext)
    return <h1>
        Page view admin general, bienvenido: {auth.name}....
        <button className="bg-red-500 text-black px-4 py-2 rounded-xl" onClick={logout}>Salir</button>
    </h1>
}
