import Card from 'react-bootstrap/Card';
import 'holderjs';
import { useEffect } from 'react';
import { run as runHolder } from 'holderjs';
import UserButton from './UserButton';


function UserCard(props) {

    useEffect(() => {
        runHolder('card-img-top rounded-circle');
    });

    return(
        <div className="pb-5">
            <Card
                key={props.id}
                className="text-center"
                border={'danger'}  
                bg={'warning'}
                text={'dark'}
                style={{ width: '18rem', height: '20rem'}}
            >
                <Card.Img
                    className="card-img-top rounded-circle align-self-center p-2"
                    variant="top"
                    src={`holder.js/50px150?text=${props.name.charAt(0)}&size=40`}
                />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.username}</Card.Subtitle>
                    <Card.Link href={props.website}>{props.website}</Card.Link>
                </Card.Body>
                <UserButton id={props.id}/>
            </Card>
        </div>
    )
}


export default UserCard;