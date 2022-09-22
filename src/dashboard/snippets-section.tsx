import DataSnippet from "../snippets/data-snippet";
import styles from './snippets-section.module.css'
import {Row} from "react-bootstrap";

const SnippetsSection = (): JSX.Element => {
    return (
        <Row xl={12} className={styles.snippetSection}>
            <DataSnippet title={"Search Terms"} data={<div className={styles.searchTermUsage}><sup>6</sup>/<sub>10</sub></div>} subtext={"in use"}/>
            <DataSnippet title={"Exclusion Terms"} data={'3'} subtext={"active"}/>
            <DataSnippet title={"Total Tweets"} data={'1234'} subtext={"Collected"}/>
            <DataSnippet title={"NPS Score"} data={'7'} subtext={"Mostly Positive"}/>
            <DataSnippet title={"General Sentiment"} data={'0.91'} subtext={"Very Positive"}/>
        </Row>
    )
}

export default SnippetsSection;