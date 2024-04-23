import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { redsocial } = params;
  
  return NextResponse.json({
    titulo: "Empresa Grande importante",
    descipcion:
      "Nacimos en la decada de los 50 con el objetivo de ser los mejores",
  });
}
