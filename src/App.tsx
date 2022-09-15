import React from 'react';
import styles from './App.module.css';
import Sidemenu from "./navbar/sidemenu";
import Dashboard from "./dashboard/dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Sidemenu/>
                <Routes>
                    <Route index element={<Dashboard/>}></Route>
                    <Route path="keywords" element={<div>This is the keywords page.</div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
