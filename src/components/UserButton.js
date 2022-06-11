import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function UserButton(props) {

    return(
        <Link to={`/user/${props.id}`}>
            <Button 
                variant="danger"
            >More Details</Button>
        </Link>
    )
}

export default UserButton;