import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import { navbarPublic } from "../Header/navbarpublic";


const Layoute = ({ children }) => {

    return (
        <>
            <div className="content-layout position-relative">
                <Header navbar={navbarPublic} />
                <div className="main-content position-relative">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layoute;