import React from 'react';
import Profile from "./components/Profile";
import user from './data/user.json';
import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import transactions from './data/bank-story.json';

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
    
    <TransactionHistory items={transactions} />
        
     </ul>)



export default App;

// const Statistics = ({ stats }) => (
//   <ul>
//     {stats.map(stat => (
//       <li key={stat.id}>{stat.label}{stat.percentage}%</li>
//     ))}
//   </ul>
// );