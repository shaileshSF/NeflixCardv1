import react from "react";

function Card(props){
    return(
        <>
        <div className="row">
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypic" className="images"/>
                    <span className="title">{props.title}</span>
                    <div className="card--info">
                        <h3 className="sname">{props.sname}</h3>
                        <a href={props.link}>
                            <button> Watch Now</button>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
        </>
    );
}
export default Card;