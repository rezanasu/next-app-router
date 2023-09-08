import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma";

export const GET = async (req, {params}) => {

    try {

        const result = await prisma.todo.findMany();

        return NextResponse.json(result, {status: 200})
    } catch(err) {
        console.log(err);
    }
}