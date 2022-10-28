import "./Appdisplay.css";
function Appdisplay(props){
    function button(){
        props.on(props.id);
    }
    return(
        <div>
            <div className="display">
            <p>{props.value}</p>
            <button className="delete" onClick={button}>delete</button>
           </div>
    </div>
    )
}
export default Appdisplay;