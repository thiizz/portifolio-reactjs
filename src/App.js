import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layout/Header'
import Rotas from './components/Rotas';
export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Rotas/>
      </Router>
    </>
  );
}

