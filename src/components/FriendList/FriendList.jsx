import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.cardList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
