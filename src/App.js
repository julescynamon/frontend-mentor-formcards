import './app.scss';
import { useState, useContext } from 'react';
import valuesContext from './context/valuesContext';
import Footer from './Component/footer/Footer';
import Card from './Component/card/Card';
import Form from './Component/form/Form';

function App() {

	const context = useContext(valuesContext);
	const [values, setValues] = useState(context); 

	return (
		<>
		<div className="App">
			<div className="card">
				<Card values={values} />
			</div>
			<div className="form">
				<Form setValues={setValues} />
			</div>
		</div>
		<Footer />
		</>
	);
}

export default App;
