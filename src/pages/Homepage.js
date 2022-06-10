import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function Homepage() {

    const [userData, setUserData] = useState([]);

    useEffect(() =>{
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err))
    }

    const users = userData.map((user) => {
        return(
                <UserCard
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    website={user.website}>
                </UserCard>
        );
    });

    return(
    <main>
        {users}
    </main>
    );
}

export default Homepage;