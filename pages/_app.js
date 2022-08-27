import { BackendProvider } from '../global/controller/backend_controller'
import '../styles/globals.css'
import NavBar from '../components/navbar'
import Head from "next/head"


function MyApp({ Component, pageProps }) {
  
  return <>
    <Head>
      <title>비밀듣는고양이 | SecretCat</title>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"/>
    </Head>
    <BackendProvider>
      <div className='w-full h-full bg-orange-200'>
        <div className='max-w-md mx-auto '>
          <div className='bg-orange-300 max-h-screen w-full overflow-hidden'>
            <NavBar/>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </BackendProvider>
  </>
}

export default MyApp
