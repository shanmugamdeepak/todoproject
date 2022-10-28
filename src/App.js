import Appgoal from './Appgoal';
import Appdisplay from './Appdisplay';
import './App.css';
import {useState} from "react";

function App() {
  const [user, setuser] = useState([
    ])
    function deepak(detail) {
      setuser((user2) => { return [...detail, ...user2] })
    }
  function btn(goalitem){
    setuser(goal=>{
      const goals=goal.filter(goal=>goal.id !==goalitem);
      return goals;
    })
  }
    return (
      <div>
        <Appgoal detail={deepak}></Appgoal>
        {user.length === 0 ? (<h2 className='deepak'>No Goals found Maybe add one?</h2>) :
          (user.map((user2) => (<Appdisplay key={user2.id}  id={user2.id}value={user2.text} on={btn}className='display'></Appdisplay>)))}
      </div>
    )
  }
  export default App;
