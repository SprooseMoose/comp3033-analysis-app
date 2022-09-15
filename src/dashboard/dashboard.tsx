import styles from './dashboard.module.css';
import LabelledPieChart from "../charts/labelled-pie-chart";
import {PieChartCellItem} from "./utils";
import {Row, Col, Container} from "react-bootstrap";
import SnippetsSection from "./snippets-section";

const Dashboard = (): JSX.Element => {
    const COLORS = ['#0088FE', '#00C49F', '#ffbb3a', '#FF8042'];
    const data: PieChartCellItem[] = [
        {name: 'sadness', value: 20},
        {name: 'joy', value: 30},
        {name: 'sadness', value: 20},
        {name: 'sadness', value: 20},
    ];

    return (
        <Container className={styles.dashboardContainer}>
            <Row>
                <SnippetsSection />
                <Col xl={6}>
                    <div className={styles.sectionCard}>
                        <LabelledPieChart data={data} colors={COLORS}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;