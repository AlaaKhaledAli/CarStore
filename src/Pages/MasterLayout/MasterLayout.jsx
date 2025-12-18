import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import ScrollToHashElement from '../../Components/ScrollToHashElement'

export default function MasterLayout() {
    return (
        <>
            <ScrollToHashElement/>
                <Header />
                <Outlet />
                <Footer />
        </>
    )
}
