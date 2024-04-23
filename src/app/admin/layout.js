'use client'
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export default function AdminLayout({ children, loging}){
    const { auth } = useContext(AuthContext)
    return <>
        {auth.isLogg ? children : loging}
    </>
}
