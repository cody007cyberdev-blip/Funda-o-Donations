import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import error404Image from "../assets/img/404.png";
import "../style/Error404.css"; // Arquivo CSS externo criado

const Error404Page = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-container">
            <img 
                src={error404Image} 
                alt="Error 404" 
                className="error-image"
            />
            {isRouteErrorResponse(error) && (
                <div className="error-details">
                    <h1>{error.status}</h1>
                    <p>{error.statusText}</p>
                    {error.data?.message && <p>{error.data.message}</p>}
                </div>
            )}
        </div>
    );
};

export default Error404Page;