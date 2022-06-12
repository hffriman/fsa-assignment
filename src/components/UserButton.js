import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function UserButton(props) {

    return(
        <div className="p-2">
            <Link to={`/user/${props.id}`}>
                <Button 
                    variant="danger"
                > More Details </Button>
            </Link>
        </div>
    )
}

export default UserButton;