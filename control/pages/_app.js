import '../styles/globals.css'

import MainContainer from '../Components/MainContainer'

function MyApp({ Component, pageProps }) {
  return <MainContainer><Component {...pageProps} /></MainContainer>
}

export default MyApp
