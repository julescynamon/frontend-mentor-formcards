import './app.scss';
import { useState } from 'react';
import Footer from './Component/footer/Footer';
import Card from './Component/card/Card';
import Form from './Component/form/Form';

function App() {

	const [values, setValues] = useState({
		name: "Jane Appleseed",
        number: "0000 0000 0000 0000",
        month: "00",
        year: "00",
        cvc: "000"
	}); 

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
