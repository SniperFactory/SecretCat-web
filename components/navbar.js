import Link from "next/link";
import { useContext } from "react";
import { BackendContext } from "../global/controller/backend_controller";

export default function NavBar() {
    const { userInfo, logout } = useContext(BackendContext)
    return <>
        <nav className="fixed max-w-md w-full p-4 text-white bg-transparent z-10 ">
            <div className="container mx-auto flex">
                <Link href="/" className="text-lg font-bold">비밀듣는고양이</Link>
                <div className="ml-auto flex gap-4">
                    { userInfo 
                        ? <>
                            <Link href={"/my"}>나의정보</Link>
                            <button onClick={logout}> 로그아웃 </button>
                        </>
                        : <Link href={"/login"}>로그인</Link>
                    }
                </div>
            </div>

        </nav>
    </>
}