import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainContainer({children}) {
    return(
        <>
            <Navbar />
            <div> {children} </div>
            <Footer />
        </>
    )
}