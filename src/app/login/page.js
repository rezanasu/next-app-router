// Next JS App Router
// Default dari setiap komponen adalah Server Component

// Client Component
"use client"
import { useState } from "react"
import { login } from "@/fetching/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

// Client Side Rendering
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
       
        try {
            const data = await login({email, password});
    
            Swal.fire({
                icon: "success",
                title: "Login success",
                showConfirmButton: false,
                timer: 1500
            })

            // Redirect ke homepage
            router.push("/")

        } catch(err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Login failed",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-teal-100">
            <div className="shadow-xl max-w-xs w-full p-5 rounded-lg bg-gray-400">
                <h1 className="text-center font-bold text-5xl mb-5">LOGIN</h1>
                <div className="space-y-5">
                    <label className="block">EMAIL</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="block rounded-lg w-full py-2 px-3 border"/>
                    <label className="block">PASSWORD</label>
                    <input onChange={(e) => setPassword(e.target.value)} className="block rounded-lg w-full py-2 px-3 border" type="password" name="password"/>
                    <button onClick={handleSubmit} className="w-full rounded-full bg-cyan-400">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}