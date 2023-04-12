import { Navigate } from "react-router-dom";
import Layoute from "../shared/Layout/Layoute";


const PublicRoute = ({children, redirecTo='/'}) => {

    const auth = false;

    return (
            auth ? <Navigate to={redirecTo}/>: <Layoute>{children}</Layoute>
    );
}

export {PublicRoute};