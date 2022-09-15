import DataSnippet from "../snippets/data-snippet";
import styles from './snippets-section.module.css'

const SnippetsSection = (): JSX.Element => {
    return (
        <div className={styles.snippetSection}>
            <DataSnippet title={"Search Terms"}/>
            <DataSnippet title={"Exclusion Terms"}/>
            <DataSnippet title={"Total Tweets"}/>
            <DataSnippet title={"NPS Score"}/>
            <DataSnippet title={""}/>
        </div>
    )
}

export default SnippetsSection;