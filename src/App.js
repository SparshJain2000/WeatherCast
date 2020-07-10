import React from 'react';
import Main from './components/main';
import Navbar from './components/navbar';
function App () {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
