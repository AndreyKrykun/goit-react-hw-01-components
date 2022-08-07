import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import friends from "../friends.json";
import data from "../data.json";
import user from "../user.json";
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

// export const App = () => {
//   return (
//     <div>
//       <GlobalStyle />
//       <Box display="flex"
//         alignItems='flex-start'
//         justifyContent='space-between'
//       p='20px'>

//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//       />
//       <Statistics
//         title="Upload stats"
//         stats={data}
        
//       />
//       <FriendList
//         friends={friends}>
//         {friends.map(friend => (<FriendListItem
//         key={friend.id}
//         isOnline={friend.isOnline}
//         name={friend.name}
//         avatar={friend.avatar}>
//       </FriendListItem>))}
//       </FriendList>
      
//       <TransactionHistory
//         items={transactions} />

//       </Box>
//     </div>
//   );
// };

export const App = () => {
  return (
    <>
     <GlobalStyle />
      <Box display="flex"
        alignItems='flex-start'
        justifyContent='space-between'
      p='20px'>
    
       <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />

    <Statistics title="Upload stats" stats={data}
    />
    
    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
    </Box>
  </>
  );

};
