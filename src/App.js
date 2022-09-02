import './app.scss';
import Footer from './Component/footer/Footer';
import Card from './Component/card/Card';
import Form from './Component/form/Form';

function App() {
	return (
		<>
		<div className="App">
			<div className="card">
				<Card />
			</div>
			<div className="form">
				<Form />
			</div>
		</div>
		<Footer />
		</>
	);
}

export default App;
