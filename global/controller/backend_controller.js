import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import client from "../../global/backend"

export const BackendContext = createContext();

export const BackendProvider = ({children}) => {
    const [token, setToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const router = useRouter();

    const login = async (id, pw)=>{
        try {
            await client.users.authViaEmail(id, pw)
        } catch (error) {
            alert(error)
        }
    }

    const signup = async (id, pw, nickname)=>{
        try {
            let res = await client.users.create({
                email: id,
                password: pw,
                passwordConfirm: pw,
                name: nickname
            })
            if(res){
                login(id, pw)
            }
        } catch (error) {
            alert(error.data?.message)
        }
    }

    const logout = () => {
        client.authStore.clear();
        setUserInfo()
        setToken()
        window.localStorage.setItem('secret_cat_pbData', '')
        router.push('/login')
    }

    const uploadSecret = async (isAnonymous, secret,) =>{
        try {
            await client.records.create("secrets", {
                isAnonymous,
                secret,
                author: userInfo?.id,
            })
            return true;
        } catch (error){
            alert(error)
            return false;
        }
    }
    useEffect(()=>{
        client.authStore.onChange((token, model) => {
            if(!client.authStore.isValid) return;
            setToken(token)
            setUserInfo(model)
            router.push('/my')
        })
        client.authStore.loadFromCookie(window.localStorage.getItem('secret_cat_pbData'))
    },[])


    return <BackendContext.Provider value={{userInfo, setUserInfo, token, logout, login, signup, uploadSecret}}>
        {children}
    </BackendContext.Provider>
}