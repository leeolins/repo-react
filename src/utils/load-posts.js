export const loadPosts = async () =>{
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const imageResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    
    const [posts, image] = await Promise.all([postsResponse, imageResponse])

    const postsJson = await posts.json()
    const imgJson = await image.json()

    const postsAndPhotos = postsJson.map((post, index) => {
        return {...post, cover: imgJson[index].url}
    })

    return postsAndPhotos
}