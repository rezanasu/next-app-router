import BASE_URL from "@/app/lib/baseUrl"

export const login = async (params) => {

    try {
        
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            body: JSON.stringify(params)
        })

        const data = await response.json();

        return data;
    } catch(err) {
        throw new Error(err.message || "Internal Server Error")
    }
}