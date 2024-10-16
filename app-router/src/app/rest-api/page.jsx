

export default async function Foo() {
    const res = await fetch("https://api.vercel.app/blog");
    const posts = await res.json(); 

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.id}. {post.title} - {post.date}</li> // JSX 반환 시 소괄호 필요
            ))}
        </ul>
    );
}
