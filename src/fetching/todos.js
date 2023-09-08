import BASE_URL from "@/app/lib/baseUrl";

export const findTodos = async () => {

    try {

        const result = await fetch(`${BASE_URL}/todos`, {
            method: "GET",
        })

        const data = await result.json();

        return data;
    } catch(err) {
        console.log(err);
        throw new Error(err.message || "Internal Server Error")
    }
}