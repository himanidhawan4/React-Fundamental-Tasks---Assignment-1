import './App.css';
import DateComponent from './component/Date';
import Greeting from './component/Greeting';
import List from './component/List';
import Personalinfo from './component/Personalinfo';
import Productlist from './component/Productlist';
import Usercard from './component/Usercard';
function App() {
  return (
    < >
      <h1>TASK1</h1>
      <p> Personalinfo </p>
      < Personalinfo />

      <div id='datetime'>
        <h1>TASK2</h1>
        <p>Date</p>
        <DateComponent />
      </div>

      <h1>TASK 3</h1>
      <p>Greeting</p>
      <Greeting />

      <h1>TASK 4</h1>
      <p>List</p>
      <List />

      <h1>TASK 5</h1>
      <p>Usercard</p>
      <Usercard name="HIMANI"
        age="18 "
        email=" trustedgroup.ad@gmail.com">
      </Usercard>

      <h1>TASK6</h1>
      <p>Productlist</p>
      <Productlist />
    </ >

  );
}

export default App;
