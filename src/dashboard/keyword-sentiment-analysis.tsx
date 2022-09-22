import styles from "./dashboard.module.css";
import StackedBarChart from "../charts/stacked-bar-chart";
import {SentimentItem, sentimentColors} from "./utils";

const keywordSentimentData: SentimentItem[] = [
    {
        name: 'Product 1',
        positive: 13,
        neutral: 6,
        negative: 5,
    },
    {
        name: 'Customer Service',
        positive: 37,
        neutral: 32,
        negative: 17,
    },
    {
        name: 'Product 2',
        positive: 9,
        neutral: 10,
        negative: 22,
    },
    {
        name: 'Company Name',
        positive: 63,
        neutral: 26,
        negative: 14,
    },
    {
        name: 'Service 1',
        positive: 64,
        neutral: 10,
        negative: 30,
    },
    {
        name: 'Product 3',
        positive: 11,
        neutral: 26,
        negative: 23,
    },
    {
        name: 'Service 2',
        positive: 97,
        neutral: 14,
        negative: 7,
    },
    {
        name: 'Scam',
        positive: 2,
        neutral: 5,
        negative: 32,
    },
    {
        name: 'Service 3',
        positive: 74,
        neutral: 42,
        negative: 14,
    },
    {
        name: 'Outage',
        positive: 6,
        neutral: 25,
        negative: 77,
    },
];

const KeywordSentimentAnalysis = (): JSX.Element => {
    return (
        <div className={styles.keywordSentimentChart}>
            <StackedBarChart data={keywordSentimentData} colors={sentimentColors}/>
        </div>
    );
}

export default KeywordSentimentAnalysis;