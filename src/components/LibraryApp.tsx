import HeaderComponent from "./HeaderComponent";
import {Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import HomePage from "./HomePage";

export default function LibraryApp() {
    return (
        <div>
            <HeaderComponent/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<LoginComponent/>} />
                <Route path={"*"} element={<ErrorComponent/>}/>
            </Routes>

        </div>
    );
}