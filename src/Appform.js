import {useState}from"react";
import"./Appform.css"
function Appform(props){
    var[bg,setbg]=useState('')
    const[text1,settext]=useState('');
    function input(event){
    settext(event.target.value)
    }
    function form(event){
        event.preventDefault();
        if(text1.length===0){
            setbg('red')
        }
        else{
            settext('')
            var abc=[{id:Math.floor(Math.random()*1000),text:text1}]
            props.text(abc)
        }
     }
    return(
        <div className="form">
         <form>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>The Goal</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="input" value={text1} onChange={input} style={{backgroundColor:bg}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className="button" onClick={form}>Add Goal</button>
                        </td>
                    </tr>
                </tbody>
            </table>
         </form>
        </div>
    )
}
export default Appform;