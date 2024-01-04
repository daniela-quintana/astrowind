export const getData = async () => {

    const res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }});

    const data = await res.json()
    return data;
}