'use client'
export default function ContactoLayout({children}){

    return (
        <button onClick={() => deleteProducto(id)}>
            <h2>layout de contacto</h2>
            {children}
        </button>
    )
}
