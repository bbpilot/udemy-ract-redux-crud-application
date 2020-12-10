import React from 'react';
import propTypes from 'prop-types';

const profiles = [
  { name: "Taro", age: 10 },
  { name: "Koharu", age: 5 },
  { name: "NoName" }
]
const App = () => {
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}
User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
