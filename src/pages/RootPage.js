import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
const RootPage = () => {
    return (
        <>
            <Header />
            <div className="flex justify-between">
                <SideBar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default RootPage;