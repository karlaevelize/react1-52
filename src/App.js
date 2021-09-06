import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import Map from "./components/Map"
import Students from "./components/Students"

function App() {
  return (
    <div className="App">
      <Title title="Fruits"/>
      <Map />
      <Title title="Students"/>
      <Students/>
    </div>
  );
}

export default App;
