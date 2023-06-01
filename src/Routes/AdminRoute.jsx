import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="btn btn-lg btn-ghost loading"></div>
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;