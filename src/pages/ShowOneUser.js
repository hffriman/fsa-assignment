import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import UserProfile from '../components/UserProfile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function ShowOneUser() {
    
    let { id } = useParams();

    const [user, setUser] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        fetchSingleUser();
    });

    const fetchSingleUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setCompany(data.company);
                setAddress(data.address);
            })
            .catch(err => console.error(err))
    }

    return(
        <main>
            <Container className="d-flex vh-100">
                <Row className="m-auto align-self-center">
                    <Col>
                        <UserProfile
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            phone={user.phone}
                            company={company.name}
                            website={user.website}
                            street={address.street}
                            suite={address.suite}
                            city={address.city}
                            zipcode={address.zipcode}
                        >
                        </UserProfile>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default ShowOneUser;