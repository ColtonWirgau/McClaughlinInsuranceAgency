import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Services from './Components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactFormPage from './Components/ContactFormPage';

function App() {
	return (
		<Router>
			<Header />
			<body>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" component={ContactFormPage} />
					<Route path="/services" component={Services} />
				</Switch>
			</body>
			<Footer />
		</Router>
	);
}

export default App;
