import { useRouter } from "next/router";
import { BackendContext } from "../global/controller/backend_controller"
import { useContext } from "react";

export default function Home() {
  const { userInfo } = useContext(BackendContext);
  const router = useRouter()
  userInfo != null ?  router.replace('/secrets') : router.replace('/login')
  
  return (
    <></>
  )
}
