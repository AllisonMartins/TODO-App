import React, {useState,useEffect} from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // quando o aplicativo carregar, precisamos ouvir o banco de dados e preencher com novos todos enquanto são adicionados/removidos
  useEffect(() => {
    //esse codigo dispara quando app.js carrega
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  },[]);
  
  const addTodo =(event) => {
    //this will fire off when we click the button
    //isso vai disparar qundo clicarmos no botao
    event.preventDefault(); //I will stop the refresh // eu vou parar o refresh da pagina!
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput(''); //clear up the input after clicking add todo button // limpa o input dps de clicar no botão
  }

  
  return (
    <div className="App">
      <h1>Todo App </h1>

      <form action="">
      

      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          ADD TODO
      </Button>
      
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
