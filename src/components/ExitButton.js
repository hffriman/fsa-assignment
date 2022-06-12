import { Link } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';

function ExitButton() {

    return(
        <Link to={"/"}>
            <CloseButton
                aria-label="hide">
            </CloseButton>
        </Link>
    )
}

export default ExitButton;
