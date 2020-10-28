import './App.css';
import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import Statistic from './Components/Statistics/Statistics';
import statisticalData from './Components/Statistics/statistical-data.json';
import FriendsList from './Components/FriendsList/FriendList';
import friends from './Components/FriendsList/friends.json'
import TransactionHistory from './Components/Transaction/TransactionHistory';
import transaction from './Components/Transaction/transaction.json'

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistic statistic={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory transaction={transaction}/>
    </>
  );
}

export default App;
