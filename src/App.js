import React from 'react';
import Profile from './components/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import transactions from './data/bank-story.json';

const App = () => (
  <div>
    {user.map(user => (
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
    ))}
    <Statistics title="" stats={statisticalData} />;
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
