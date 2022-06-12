import Card from 'react-bootstrap/Card';
import ExitButton from './ExitButton';

function UserProfile(props) {

    return(
        <Card
            key={props.id}
            className="box"
            border={'danger'}
            bg={'light'}
            text={'dark'}
            style={{ width: '20rem' }}
        >
            <ExitButton/>            
            <Card.Body>
                <b>- name: {props.name}</b><br/>
                <b>- username: {props.username}</b><br/>
                <b>- email: {props.email}</b><br/>
                <b>- phone: {props.phone}</b><br/>
                <b>- company: {props.name}</b><br/>
                <b>- website; {props.website}</b><br/>
                <b>- address:</b>
                <ul>
                    <li><b>street: {props.street}</b></li>
                    <li><b>suite; {props.suite}</b></li>
                    <li><b>city: {props.city}</b></li>
                    <li><b>zipcode: {props.zipcode}</b></li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default UserProfile;