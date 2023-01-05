// import logo from './logo.svg';
import './App.css';
// import Pronutrition from './components/pro-nutrition';
import FoodData from './resources/FoodData';
import Hooks from './components/hooks';


function App() {
  return (
    <div className="App">
      <Hooks test={FoodData}/>
    </div>
  );
}

export default App;
