import styles from './data-snippet.module.css';
import {Col} from "react-bootstrap";


const DataSnippet = ({title, data, subtext}: {
    title: string,
    data: string | JSX.Element,
    subtext?: string
}): JSX.Element => {
    return (
        <Col className={styles.snippetCard}>
            <h3>{title}</h3>
            <p className={styles.mainStat}>{data}</p>
            <p>{subtext}</p>
        </Col>
    )
}

export default DataSnippet;