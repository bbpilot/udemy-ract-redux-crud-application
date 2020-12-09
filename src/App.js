import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={() => { console.log('I am clicked!') }} />
      <Cat />
    </React.Fragment>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input id="bar" type="text" onChange={() => { console.log('I am clicked!') }} />
//         <Cat />
//       </React.Fragment>
//     )
//   }
// }

const Cat = () => {
  return <div>Meow</div>
}

export default App;
