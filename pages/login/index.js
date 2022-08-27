import { useRouter } from "next/router";
import { useContext, useRef } from "react"
import { BackendContext } from "../../global/controller/backend_controller"
import CuteCat from "../../components/cute_cat"

export default function Login(){
    const router = useRouter();
    const { login } = useContext(BackendContext);
    const idRef = useRef();
    const pwRef = useRef();

    return <>
    <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="bg-white rounded-lg p-8 mx-8 flex flex-col gap-2 shadow-lg">
            <CuteCat message="로그인 먼저 해라냥"/>
            <input type="text" ref={idRef} placeholder="ID(Email)" className="py-2 px-4 text-lg border rounded-lg bg-gray-50"/>
            <input type="password" ref={pwRef} placeholder="PW" className="font-sans py-2 px-4 text-lg border rounded-lg bg-gray-50"/>
            <button className="py-2 px-8 bg-rose-500 text-white rounded" onClick={()=>login(idRef.current.value, pwRef.current.value)}>로그인</button>
            <button className="py-2 px-8 bg-blue-500 text-white rounded" onClick={()=>router.push('/signup')}>회원가입</button>
        </div>
    </div>
    </>
}