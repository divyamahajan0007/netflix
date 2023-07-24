import react from "react";
// import {BiAdjust} from "react-icons/bi"
import {BiAddToQueue} from "react-icons/bi";

function Card( props ) {
    return (
      <>
        <div className="cards">
          <div className="card">
                <img src={props.imgsrc} alt="Series" className="card_img" />
                <div className="card_info">
                  <span className="card_category"> {props.title} </span>
                  <h3 className="card_title"> {props.sname} </h3>
                  <a href={props.link} target="_blank">
                    <button> Watch now <BiAddToQueue/></button>
                  </a>
                </div>
          </div>
        </div>
        </>
    );
  }

export default Card;