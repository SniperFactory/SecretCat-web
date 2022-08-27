import { useContext, useState, useRef } from "react"
import { BackendContext } from "../global/controller/backend_controller"

export default function BottomAddButton ({onCompleted}) {
    const [ isOpen, setIsOpen ] = useState(false)
    const { uploadSecret } = useContext(BackendContext)
    const [ isAnonymous, setIsAnonymous] = useState(false)
    const ref = useRef();

    const _uploadSecret = async () => {
        let res = await uploadSecret(isAnonymous, ref.current.value)
        if(!res){
            alert('잘못들었따냥')
            return ;
        }
        alert('말해줘서 고맙다냥!')
        onCompleted();
        setIsOpen(false);
        return ;
    } 
    
    return <>
    <div className="absolute flex justify-center items-center">
        <button className="rounded-full w-16 h-16 text-3xl text-white bg-green-500 shadow-2xl fixed bottom-8" onClick={()=>setIsOpen(!isOpen)}>+</button>
    </div>
    {
        isOpen && 
            <div className="max-w-md w-full h-full bg-black bg-opacity-50 fixed top-0 flex justify-center items-center">
                <div className="modal-white gap-4 text-center items-center relative">
                    <button className="absolute right-4 top-4" onClick={()=>setIsOpen(!isOpen)}>x</button>

                    <span className="text-orange-500 font-bold"> 나한테만 몰래 말해봐 ㅎㅎ</span>
                    <img className="w-16 " src="https://cdn-icons-png.flaticon.com/512/1864/1864640.png"/>
                    <hr/>
                    <div className="flex gap-2 justify-left w-full text-xs tracking-tighter">
                        <input type="checkbox" onChange={(v)=>{setIsAnonymous(v.target.checked)}}/> <label>이건 진짜 비밀인데..(익명)</label>
                    </div>
                    <input type="text" ref={ref} className="p-2 bg-gray-50 border rounded" placeholder="사실은.."/>
                    <button className="py-2 px-8 bg-orange-400 text-white rounded" onClick={_uploadSecret}>고양이한테 말하기</button>
                </div>
            </div>
    }
    </>
}