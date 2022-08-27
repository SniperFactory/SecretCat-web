import { useContext } from "react"
import { BackendContext } from "../../global/controller/backend_controller"


export default function MyPage(){
    const {token,userInfo} = useContext(BackendContext)

    return <>
    <div className="h-screen flex justify-center items-center">
        <div className="modal-white w-full">
            <div src="" className="h-16 w-16 rounded-full bg-neutral-300" />
            <span>EMAIL : {userInfo?.email}</span>
            <span>ID : {userInfo?.id}</span>
        </div>
    </div>
    
    </>
}