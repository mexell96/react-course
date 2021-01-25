import "./index.css";

function App(props) {
  return (
    <div className="car">
      <h3>Car name {props.name}</h3>
      <p>Car age {props.age}</p>
    </div>
  );
}

export default App;
