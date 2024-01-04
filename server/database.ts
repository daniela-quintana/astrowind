export const getData = async () => {

    const res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }});

    const data = await res.json()
    return data;
}

export const getId = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        headers: {
            "Content-type": "application/json",
        }});
        const post = await res.json()
        return post;
    }