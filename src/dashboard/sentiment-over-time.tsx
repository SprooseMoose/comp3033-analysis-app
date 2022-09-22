import styles from "./dashboard.module.css";
import HorizontalLineChart from "../charts/horizontal-line-chart";
import {SentimentItem, sentimentColors} from "./utils";

const data: SentimentItem[] = [
    {
        name: '1/09',
        positive: 14,
        neutral: 4,
        negative: 9,
    },
    {
        name: '2/09',
        positive: 10,
        neutral: 5,
        negative: 4,
    },
    {
        name: '3/09',
        positive: 24,
        neutral: 1,
        negative: 11,
    },
    {
        name: '4/09',
        positive: 11,
        neutral: 7,
        negative: 18,
    },
    {
        name: '5/09',
        positive: 31,
        neutral: 9,
        negative: 11,
    },
    {
        name: '6/09',
        positive: 24,
        neutral: 4,
        negative: 6,
    },
    {
        name: '7/09',
        positive: 17,
        neutral: 6,
        negative: 5,
    },
];

const SentimentOverTime = (): JSX.Element => {
    return (
        <div className={styles.sectionCard}>
            <HorizontalLineChart data={data} colors={sentimentColors}/>
        </div>
    );
}

export default SentimentOverTime;