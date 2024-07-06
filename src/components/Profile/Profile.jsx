import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.imageWrapper}>
          <img src={image} alt={name} />
        </div>
        <div className={s.text}>
          <p className={s.title}>{name}</p> <p>@{tag}</p> <p>{location}</p>
        </div>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>

        <li className={s.item}>
          <span>Views</span> <span>{stats.views}</span>
        </li>

        <li className={s.item}>
          <span>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
