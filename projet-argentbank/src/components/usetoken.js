import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function useToken() {
    const [hasToken, setHastoken] = useState();
    const token = useSelector((state) => state.token);


    useEffect(() => {
        if (token) setHastoken(true);
        else {
            setHastoken(false);
        }
    }, [token]);
    return { hasToken }
}