import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: 'http://localhost/apiKeisoline/',
});

export const UserContextProvider = ({children}) => {
    const [theUser, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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
            return data;
        }catch(err){
            return {success:0, message:'Error en el servidor'};
        }
        setIsLoading(false);

    }

    return(
        <UserContext.Provider value={{registerUser, user:theUser, isLoading}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;