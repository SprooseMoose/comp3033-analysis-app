/**
 * A simple data structure for pie chart cell rendering
 */
export interface PieChartCellItem {
    name: string,
    value: number,
}

export interface SentimentItem {
    name: string,
    positive: number,
    neutral: number,
    negative: number,
}

export const sentimentColors = ['#72d99a', '#aaaaaa', '#dd5555'];
