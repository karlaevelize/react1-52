import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import Map from "./components/Map"
import Students from "./components/Students"
import Counter from "./components/Counter"
import FetchingData from './components/FetchingData';

function App() {
  return (
    <div className="App">
      {/* <Title title="Fruits"/>
      <Map />
      <Title title="Students"/>
      <Students/>  */}
      {/* <Title title="use State"/>
      <Counter/> */}
      <FetchingData/>
      <Title title="Fetching Data"/>
    </div>
  );
}

export default App;
