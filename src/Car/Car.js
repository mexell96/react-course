import React from "react";

// function car() {
//   return <h2>This is car component</h2>;
// }

// const car = () => {
//   return <div>This is car component</div>;
// };

// const car = () => <div>This is car component</div>;

// export default car;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>
      Year: <strong>{props.year}</strong>
    </p>
    {props.children}
  </div>
);
