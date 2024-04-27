import { useRef } from "react";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import "../style/Pages/InternshipsPage.css"

export default function InternshipsPage() {
    const activeMenuIndex = 3;
    const body = useRef()
    return (
        <div className="internship-page mode light app" ref={body}>
            <Menubar bodyRef={body} activeIndex={activeMenuIndex} />
            <div className="empty-heading">
                <div className="heading">
                    🥲Have not get any internship yet.<br></br>
                    If any one want to offer an internship.<br></br>
                    You can contact me.
                </div>
            </div>
            <Footer />
        </div>
    )
}