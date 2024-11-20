'use client';
import axios from "axios"
import { useState, useEffect } from "react"

export default function Axios() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:4000/test")
                setUsers(res.data)
            } catch (error) {
                console.error(error)
            } finally{
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    if (loading) return <h1>Loading....</h1>
    if (!users) return <h1>no users</h1>

    
    return (
        <>
            <h1>axios</h1>
            {
                users.map((user, id) => {
                    return (
                        <div key={id}>
                            <h2>{user.id}</h2>
                            <h3>{user.name}</h3>
                            <h3>{user.title}</h3>
                            <h3>{user.body}</h3>
                        </div>
                    )

                })
            }
        </>
    )
}