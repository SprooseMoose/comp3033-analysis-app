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
            <div className={styles.mainStat}>{data}</div>
            <div>{subtext}</div>
        </Col>
    )
}

export default DataSnippet;