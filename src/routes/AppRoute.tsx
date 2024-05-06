import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { Data } from "../pages/Data"
import { Home } from "../pages/Home"

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/Pandas/" element={<Home />} />
                    <Route path="/Pandas/Data" element={<Data />} />
                    <Route path="/Pandas/Data/*" element={<Data />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}