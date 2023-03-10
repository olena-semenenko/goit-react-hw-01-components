
import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'

import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transaction from 'data/transactions.json'

const {username, tag, location, avatar, stats} = user


export const App = () => {
  return (
    <div>
      <Profile avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}></Profile>
      <Statistics title='Upload stats'
        stats={data}></Statistics>
      <Statistics 
        stats={data}></Statistics>
      <FriendList friends={friends}>
      </FriendList>
      <TransactionHistory items={transaction}></TransactionHistory>
    </div>
    
    
  );
};
