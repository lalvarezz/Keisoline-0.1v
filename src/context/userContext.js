import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: 'http://localhost/apiKeisoline/',
});

export const UserContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [theUser, setUser] = useState(null);

    const registerUser = async ({nombre, appat, apmat, correinst, cont, ccont}) => {
        setIsLoading(true);
        try{
            const {data} = await Axios.post('register.php',{
                nombre, 
                appat,
                apmat,
                correinst,
                cont,
                ccont
            });
            setIsLoading(false);
            return data;
        }catch(err){
            setIsLoading(false);
            return {success:0, message:'Error en el servidor'};
        }
    }

    const loginUser = async ({correo, password}) => {
        setIsLoading(true);

        try{
            const {data} = await Axios.post('login.php',{
                correo,
                password
            });
            if(data.success && data.userData){
                localStorage.setItem('isLoggedIn', 1);
                localStorage.setItem('userData', JSON.stringify(data.userData));
                setIsLoading(false);
                return {success:1};
            }
            setIsLoading(false);
            return {success:0, message:data.message};

        }catch(err){
            setIsLoading(false);
            return {success:0, message:'Error en el servidor'};
        }
    }

    const loggedInCheck = async () =>{
        const loginToken = localStorage.getItem('isLoggedIn');
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+loginToken;

        if(loginToken){
            setUser(JSON.parse(localStorage.getItem('userData')));
            return;
        }
        setUser(null);
    }

    useEffect(() => {
        async function asyncCall(){
            await loggedInCheck();
        }
        asyncCall();
    },[]);

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        setUser(null);
    }

    return(
        <UserContext.Provider value={{registerUser, isLoading, loginUser, logout, user:theUser, loggedInCheck}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;