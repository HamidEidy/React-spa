import { useEffect, useState } from "react";
import List from "../../components/users/List";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    })
    return (
        <div className="container mt-5">
            <div className="row g-3">
                <h2>Users:</h2>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {users && <List users={users} />}
            </div>
        </div>
    )
}
export default Users;