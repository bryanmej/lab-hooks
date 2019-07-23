import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    if(name === 'name') setName(value)
    if(name === 'surname') setSurname(value)
    if(name === 'age') setAge(value)
  }


  return (
    <div className="App">
      <div className="container">
        <Counter 
          counter={count} 
          increment={increment}
          decrement={decrement}
        />
        <br/>
        <Form
          handleChange={handleChange}
          name={name}
          surname={surname}
          age={age}
        />
      </div>    
    </div>
  );
  
}

export default App;
