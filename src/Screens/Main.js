import Header from "../Components/Header";
import Post from "../Components/Post";
import SideMenu from "../Components/SideMenu";
import "./Main.css"

export default function Main(){
    return (
        <div className="main-container">
            <Header/>

            <div className="body-container">
                <SideMenu/>
                <Post/>
            </div>
        </div>
    )
}