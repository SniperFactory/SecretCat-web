import { useContext, useEffect, useState } from "react"
import client from "../../global/backend"
import { BackendContext } from "../../global/controller/backend_controller"
import SecretCard from "../../components/secret_tile"


export default function MyPage(){
    const {token,userInfo} = useContext(BackendContext)
    const [ mySecrets, setMySecrets] = useState([])

    const _fetchMySecrets = async () => {
        try {
            let res = await client.records.getFullList('secrets',200,{
                filter: `author = "${userInfo?.id}"`
            })
            setMySecrets(res)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(()=>{
        _fetchMySecrets();
    },[])

    return <>
    <div className="h-screen flex flex-col justify-center items-center p-4">
        <div className="modal-white w-full">
            <div src="" className="h-16 w-16 rounded-full bg-neutral-300" />
            <span>이메일 : {userInfo?.email}</span>
            <span>계정번호 : {userInfo?.id}</span>
            <span>내 비밀 : {mySecrets.length}</span>
        </div>
        <h1 className="text-xl font-bold text-left w-full mt-8 ">나의 비밀</h1>
        <div className="modal-white mt-4 w-full max-h-96 overflow-y-auto">
            { mySecrets.map((e, idx)=> <SecretCard secretObject={e} key={idx} />)}

        </div>
    </div>
    
    </>
}