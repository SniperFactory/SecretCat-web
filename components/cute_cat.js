import Image from "next/image"

export default function CuteCat({message}) {
    return <>
    <div className="flex flex-col gap-2 justify-center items-center">
        <span className="text-orange-500 text-xs font-bold">{message}</span>
        <Image width="100" height="100" src="https://cdn-icons-png.flaticon.com/512/1864/1864640.png" alt="Cat"/>
    </div>
    </>
}