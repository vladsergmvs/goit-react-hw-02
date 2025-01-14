import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import {
  username,
  tag,
  location,
  avatar,
  stats,
} from "../src/assets/userData.json";
import friends from "../src/assets/friends.json";
import transactions from "../src/assets/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
