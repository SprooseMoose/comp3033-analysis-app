import styles from './dashboard.module.css';
import LabelledPieChart from "../charts/labelled-pie-chart";
import {PieChartCellItem} from "./utils";
import {Container, Col} from "react-bootstrap";
import SnippetsSection from "./snippets-section";
import KeywordSentimentAnalysis from "./keyword-sentiment-analysis";
import SentimentOverTime from "./sentiment-over-time";

const Dashboard = (): JSX.Element => {
    const COLORS = ['#3efc20', '#96ff8e', '#ffc387', '#FF8042', '#FF3333'];
    const data: PieChartCellItem[] = [
        {name: 'Very Positive', value: 12},
        {name: 'Positive', value: 32},
        {name: 'Neutral', value: 29},
        {name: 'Negative', value: 16},
        {name: 'Very Negative', value: 11},
    ];

    return (
        <Container className={styles.dashboardContainer}>
            <Col>
                <SnippetsSection/>
                <SentimentOverTime/>
                <KeywordSentimentAnalysis/>
                <div className={styles.sectionCard}>
                    <LabelledPieChart data={data} colors={COLORS}/>
                </div>
            </Col>
        </Container>
    );
};

export default Dashboard;