import css from "./Profile.module.css";

export const Profile = ({ userData }) => {
  return (
    <div className={css["profile"]}>
      <div className="description">
        <img
          src={userData.avatar}
          alt="User avatar"
          className={css["avatar"]}
        />
        <p className={css["name"]}>{userData.username}</p>
        <p className="tag">@{userData.tag}</p>
        <p className="location">{userData.location}</p>
      </div>

      <ul className={css['stats']}>
        <li className={css['stats-item']}>
          <span className="label">Followers</span>
          <span className={css['quantity']}>{formatNumber(userData.stats.followers)}</span>
        </li>
        <li className={css['stats-item']}>
          <span className="label">Views</span>
          <span className={css['quantity']}>{formatNumber(userData.stats.views)}</span>
        </li>
        <li className={css['stats-item']}>
          <span className="label">Likes</span>
          <span className={css['quantity']}>{formatNumber(userData.stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};

function formatNumber(number) {
  if (number >= 1000 && number <= 9999) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return number.toString();
  }
}
