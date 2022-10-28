import Appform from"./Appform";
import "./Appgoal.css";
function Appgoal(props){
    function goal(format){
        props.detail(format)
    }
    return(
        <div>
            <Appform text={goal}></Appform>
        </div>
    )
}
export default Appgoal; 