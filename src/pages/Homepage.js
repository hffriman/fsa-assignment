import { useDeferredValue, useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserButton from "../components/UserButton";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

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

    const users = userData.map((user, index) => {
        return(
                <Col key={index}>
                    <UserCard
                        key={user.id}
                        name={user.name}
                        username={user.username}
                        website={user.website}>
                    </UserCard>
                    <UserButton id={user.id}/>
                </Col>
        );
    });


    return(
        <main>
            <Container>
                <Row xs={1} md={3}>
                    {users}
                </Row>
            </Container>
        </main>
    );
}

export default Homepage;