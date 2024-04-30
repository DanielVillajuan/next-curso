import { NextResponse } from "next/server";

export async function GET(request, { params }) {

    

    return NextResponse.json({message: 'hola'});
}

export async function POST(request, {params}){
    const body = await request.json()
    console.log(body);
    return NextResponse.json({message: 'Todo bien'})
}

export async function PUT(request,{params}){

}

