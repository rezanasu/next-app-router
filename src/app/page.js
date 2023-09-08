"use client"
import { useEffect, useState } from "react"
import { findTodos } from "@/fetching/todos"
import Link from "next/link"

export default function Home() {
  const [todos, setTodos] = useState([])
  const [isLoading, setLoading] = useState(false)

  const fetchTodos = async () => {

    const data = await findTodos();

    setTodos(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchTodos();
  }, [])

  if(isLoading) {
    return <>Loading.....</>
  }
  
  return (
    <div className="w-full">
      <table className="table-auto w-full p-10 border-solid border-2 border-slate-900 text-center">
        <thead className="border-solid border-2 border-slate-900">
          <tr className="[&>*]:border-solid [&>*]:border-2 [&>*]:border-slate-900">
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index} className={`${index % 2 === 0 ? "bg-slate-300": "bg-amber-300"}`}>
                <td>{index+1}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status === true ? <>DONE</> : <>NOT YET</>}</td>
                <td><Link href={`/todos/${todo.id}`} className="rounded-full bg-cyan-400 px-3">VIEW</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
