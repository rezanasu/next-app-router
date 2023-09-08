// Server Component
// Server Side Rendering
import prisma from "@/app/lib/prisma";
import Link from "next/link"

async function getData(id) {

    try {

        const foundData = await prisma.todo.findUnique({
            where: {
                id
            }
        })

        if(!foundData) {
            throw {name: "ErrorNotFound", message: "Error Not Found"}
        }

        return foundData
    } catch(err) {
        throw new Error(err.message || "Internal Server Error")
    }
}

export default async function TodoDetail({params}) {
    const {id} = params;
    const data = await getData(+id);


    return(
        <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
            <div className="shadow-xl max-w-xs w-full bg-teal-200 p-5">
                <p>{data.id}</p>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.status === true ? <>DONE</> : <>NOT YET</>}</p>
                <Link href={"/"} className="text-center block rounded-full text-black">BACK TO HOME</Link>
            </div>
        </div>
    )
}