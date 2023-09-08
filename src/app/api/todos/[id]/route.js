import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

export const GET = async (req, {params}) => {

    try {

        const {id} = params;

        const foundTodo = await prisma.todo.findUnique({
            where: {
                id: +id
            }
        })

        if(!foundTodo) {
            throw {name: "ErrorNotFound"}
        }

        return NextResponse.json(foundTodo, {status: 200})

    } catch(err) {
        if(err.name === "ErrorNotFound") {
            return NextResponse.json({message: "Error Not Found"}, {status: 404})
        } else {
            return NextResponse.json({message: "Internal Server Error"}, {status: 500})
        }
    }

}