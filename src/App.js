import "./index.css";
import ColorCar from "./ColorCar";

function App(props) {
  return (
    <div className="car">
      <h3>Car name {props.name}</h3>
      <p>Car age {props.age}</p>
      <ColorCar color={props.color} />
    </div>
  );
}

export default App;
