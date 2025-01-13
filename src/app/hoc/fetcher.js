
export async function fetcher(apiEndpoint) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${apiEndpoint}`);
        if (!response.ok) {
            console.error("Error fetching data:", error);
            return []
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; 
    }
}