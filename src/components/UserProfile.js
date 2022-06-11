import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";


function UserProfile(props) {

    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
}

export default UserProfile;