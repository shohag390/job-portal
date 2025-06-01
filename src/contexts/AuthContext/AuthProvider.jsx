import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/jobs.json")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            });
    }, []);

    const userInfo = {
        jobs,
        loading,
    };


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;