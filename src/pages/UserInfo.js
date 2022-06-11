import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import UserProfile from '../components/UserProfile';
import Card from 'react-bootstrap/Card';

function UserInfo() {
    
    let { id } = useParams();

    const [user, setUser] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() =>{
        fetchSingleUser();
    }, []);

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
            <Card
                 key={id}
                 className="box"
                 border={'danger'}  
                 bg={'warning'}
                 text={'dark'}
                 style={{ width: '20rem '}}>
                <Card.Body>
                    <p>- name: {user.name}</p>
                    <p>- username: {user.username}</p>
                    <p>- email: {user.email}</p>
                    <p>- phone: {user.phone}</p>
                    <p>- company: {company.name}</p>
                    <p>- website: {user.website}</p>
                    <p>- address:</p>
                    <ul> 
                        <li>street: {address.street}</li>
                        <li>suite: {address.suite}</li>
                        <li>city: {address.city}</li>
                        <li>zipcode: {address.zipcode}</li>
                    </ul>
                </Card.Body>
            </Card>
        </main>
    );
}

export default UserInfo;