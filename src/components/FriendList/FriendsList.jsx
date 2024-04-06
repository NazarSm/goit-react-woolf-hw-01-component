import clsx from "clsx";
import css from "./FriendsList.module.css";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map((friend) => (
        <li key={friend.id} className={css['item']}>
          <span
            className={clsx(css['status'], {
              [css.online]: friend.isOnline,
            })}
          ></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
