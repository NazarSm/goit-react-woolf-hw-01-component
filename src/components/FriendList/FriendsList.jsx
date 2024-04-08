import css from "./FriendsList.module.css";

export const FriendsList = ({ children }) => {
  return (
    <ul className={css['friend-list']}>
      {children}
    </ul>
  );
};
