import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './styles/rootStyles.module.scss';
import Login from './pages/Login/Login.js'


function App() {
	return (
		
		
				<Router>
					<div className={styles.app}>
						<Routes>
							<Route path="/" element={<Login />} />
						</Routes>
					</div>
				</Router>

		
	);
}

export default App;
