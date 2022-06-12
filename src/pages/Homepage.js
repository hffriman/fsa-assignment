import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        username={user.username}
                        website={user.website}>
                    </UserCard>
                </Col>
        );
    });


    return(
        <Container className='p-5'>
            <Row xs={1} md={2} lg={3}>
                {users}
            </Row>
        </Container>
    );
}

export default Homepage;