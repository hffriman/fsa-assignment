import Card from 'react-bootstrap/Card';
import 'holderjs';
import { useEffect } from 'react';
import { run as runHolder } from 'holderjs';
import UserButton from './UserButton';
import Row from 'react-bootstrap/Row';


function UserCard(props) {

    useEffect(() => {
        runHolder('card-img-top rounded-circle');
    });

    return(
        <Card
            key={props.id}
            className="text-center"
            border={'danger'}  
            bg={'warning'}
            text={'dark'}
            style={{ width: '12rem '}}>
            <Card.Img
                className="card-img-top rounded-circle"
                variant="top"
                src={`holder.js/100px180?text=${props.name.charAt(0)}`}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.username}</Card.Subtitle>
                <Card.Link href={props.website}>{props.website}</Card.Link>
            </Card.Body>
            <UserButton/>
        </Card>
    )
}


export default UserCard;