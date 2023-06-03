import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <progress className="progress w-56"></progress>
        //     <div className="flex flex-col justify-center items-center min-h-screen">
        //         <div className="btn btn-lg btn-ghost loading"></div>
        //         <progress className="progress w-56"></progress>
        //     </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;