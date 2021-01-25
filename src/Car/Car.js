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
export default ({ name, year }) => (
  <div>
    <h3>Car name: {name}</h3>
    <p>
      Year: <strong>{year}</strong>
    </p>
  </div>
);
