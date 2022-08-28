import { useContext, useEffect, useState } from "react"
import client from "../global/backend"
import SecretCard from "../components/secret_card";
import { BackendContext } from "../global/controller/backend_controller";
import BottomAddButton from "../components/bottom_add_btn";

export default function Secrets(){
    const { userInfo } = useContext(BackendContext)
    const [ secretObjects, setSecretObjects] = useState([]);
    const [ index, setIndex ] = useState(0);

    const fetchSecrets = async () => {
        try {
            let res = await client.records.getList('secrets',0,30)
            setSecretObjects(res['items'])
        } catch (error) {
            alertg(error)
        }
    }
    useEffect(()=>{
        fetchSecrets();
    },[])
    return <>
            
        <div className="h-screen z-0 flex justify-center items-center" 
            style={{"background": "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(https://cataas.com/cat)", 
                "backgroundRepeat": "no-repeat", 
                "backgroundSize": "cover"}}>
            {
                !userInfo 
                    ? <h6 className="text-xl text-white">로그인이 필요합니다</h6> 
                    : <>
                        <div className={"absolute top-16 text-2xl text-white grid grid-cols-5 max-w-md mx-auto w-full px-8 gap-1"}>
                            {
                                [...Array(secretObjects.length).keys()].map((e)=>
                                    <div className={"h-1 bg-white rounded-full " + (index == e ? "bg-opacity-60" : "bg-opacity-10")} onClick={()=>setIndex(e)} key={e}/>
                                )
                            }
                        </div>
                        {secretObjects.length > 0 && <SecretCard secretObject={secretObjects[index]} /> }
                        <BottomAddButton onCompleted={fetchSecrets}/>
                    </>
            }
        </div>
    </>
}