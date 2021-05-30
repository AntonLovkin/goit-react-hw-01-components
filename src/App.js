import React from 'react';
import Profile from "./components/Profile";
import user from './user.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import FriendList from './components/FriendList';

const App = () => 
(<ul>
    {user.map((user) => (
        <li key={user.id}>
        <Profile
           name={user.name}
           tag={user.tag}
           location={user.location}
           avatar={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
                id={user.tag}
            />
           
        </li>
    ))}
        <Statistics
        title="Upload stats"
        stats={statisticalData} />;
    
    <FriendList
        friends={friends} />
        
     </ul>)



export default App;

// const Statistics = ({ stats }) => (
//   <ul>
//     {stats.map(stat => (
//       <li key={stat.id}>{stat.label}{stat.percentage}%</li>
//     ))}
//   </ul>
// );