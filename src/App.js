import React from 'react';
import Profile from "./components/Profile";
import user from './user.json';
console.log(user);

const App = () => 
(<ul>
    {user.map((user) => (
        <li key={user.id}>
        <Profile
           name={user.name}
           tag={user.tag}
           location={user.location}
           avatar={user.avatar}
                stats={user.stats}
                id={user.tag}
        />
        </li>
    ))}
</ul>)


// console.log(profile);
// console.log(user);

export default App;

