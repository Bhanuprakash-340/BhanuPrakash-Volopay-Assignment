import { BiVideo,BiPlus } from "react-icons/bi";
import './index.css'

const Header = () =>{
    return(
        <>
        <div className="header-container">
            <div className="header-title-container">
                <h3 className="header-title">Virtual cards</h3>
                <button type="button" className="learn-more-video-button">
                    <BiVideo className="media-icon"/>
                    Learn more
                </button>
            </div>
            <div>
                <button type="button" className="create-card">
                    <BiPlus className="plus-icon"/>
                    Virtual card</button>
            </div>
        </div>
        </>
    )

}

export default Header