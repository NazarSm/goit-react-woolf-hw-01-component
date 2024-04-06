import css from "./Statistics.module.css";
import clsx from 'clsx';

export const Statistics = ({title, stats}) => {
  return (
    <section className={css["statistics"]}>
      {title && (
        <h2
          className={clsx(
            css['title'],
            css['uppercase'],
          )}
        >{title}</h2>
      )}

      <ul className={css["stats-list"]}>
        {stats.map((book) => (
          <li key={book.id}
              className={clsx(
                css['item'],
                css[getColorClass(book.id)]
              )}
          >
            <span className="label">{book.label}</span>
            <span className={css["percentage"]}>{book.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getColorClass(id) {
  switch (id) {
    case 'id-1': return 'blue';
    case 'id-2': return 'purple';
    case 'id-3': return 'red';
    case 'id-4': return 'green';
    case 'id-5': return 'rose';
    default: return '';
  }
}
