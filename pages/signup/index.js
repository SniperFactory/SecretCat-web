import { useContext, useRef } from "react"
import CuteCat from "../../components/cute_cat"
import { BackendContext } from "../../global/controller/backend_controller"

export default function SignUpPage(){
    const { signup } = useContext(BackendContext)
    const idRef = useRef()
    const pwRef = useRef()
    const nicknameRef = useRef()
    return <>
    
    <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="bg-white rounded-lg p-8 mx-8 flex flex-col gap-2 shadow-lg">
            <CuteCat message={"귀가 또 아파지겠다냥"}/>
            <input type="text" ref={idRef} className="rounded p-2 border" placeholder="이메일"></input>
            <input type="password" ref={pwRef} className="font-sans rounded p-2 border" placeholder="패스워드"></input>
            <input type="text" ref={nicknameRef} className="rounded p-2 border" placeholder="닉네임"></input>
            <button className="py-2 px-8 bg-orange-500 text-white rounded" onClick={()=>signup(idRef.current.value, pwRef.current.value, nicknameRef.current.value)}>회원가입</button>
        </div>
    </div>
    </>

}