import React, {useState} from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo';



function App() {
  
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out','do a livestream today']);
  const [input, setInput] = useState('');
  
  const addTodo =(event) => {
    //this will fire off when we click the button
    //isso vai disparar qundo clicarmos no botao
    event.preventDefault(); //I will stop the refresh // eu vou parar o refresh da pagina!
    console.log('Im working!!')
    setTodos([...todos, input]);
    setInput(''); //clear up the input after clicking add todo button // limpa o input dps de clicar no botão
  }

  
  return (
    <div className="App">
      <h1>Hello World </h1>
      <form action="">
      

      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add TODO
      </Button>
      
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
