import React from "react";
import './Popup.css'


const Popup = (props)=>{

    

    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <div className="modalContex">
                    <p>Your message is send successfully</p>
                    <button className="btn-Primary" onClick={props.onClose}>close</button>
                </div>
            </div>
        
        </div>
    ) : "";
}


export default Popup;