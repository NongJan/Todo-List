import './App.css';
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textList, setTextList] = useState('');

  const AddTodoList = () => {
      setTodoList([...todoList,textList]);
  }


  return (
    <div className="container">
        <div className="App-header">
            <label htmlFor="Topiclist">Todo List</label>
        </div>
        <div >
            <input className="control-width form-control" onChange={(event) => setTextList(event.target.value)}/>
            <button type="submit" className="btn btn-success control-width" onClick={AddTodoList}>Add Todo</button>
        </div>
        <div>
            {todoList.map((item,index) => {
               return ( 
               <div className="control-width text" key={index}>{item}
                    <p style={{float: 'right'}}><FaIcons.FaRemoveFormat key={index} onClick={() => {todoList.splice(index,1);setTodoList([...todoList]);}} color={'red'} />
                    </p>
               </div>)
            })}
        </div>
    </div>
  );
}

export default App;
