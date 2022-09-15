import styles from './data-snippet.module.css';


const DataSnippet = ({title}: {
    title: string
}): JSX.Element => {
    return (
        <div className={styles.snippetCard}>
            <h3>{title}</h3>
        </div>
    )
}

export default DataSnippet;