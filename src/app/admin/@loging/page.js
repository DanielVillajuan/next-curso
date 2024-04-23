'use client'

import { AuthContext } from "@/app/Context/AuthContext"
import { useContext } from "react"

export default function Loging(){
    const { createUser, loging } = useContext(AuthContext);
    return <h1>
        Loging...
        <div>
            <h2>Crear usuario:</h2>
            <button className="bg-white text-black px-4 py-2 rounded-xl" onClick={createUser}>Crear</button>
            <h2>Login:</h2>
            <button className="bg-green-500 text-black px-4 py-2 rounded-xl" onClick={loging}>Iniciar sesion</button>
        </div>
    </h1>
}
