import styles from "./my-books-list.module.scss";

const MyBooksList = ({ items, onDeleteMovie }) => {
    const elements = items.map(({ _id, title, director }) => (
        <li className={styles.listItem} key={_id}>
            Title: {title}. Director: {director}. <button onClick={() => onDeleteMovie(_id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )
}

export default MyBooksList;