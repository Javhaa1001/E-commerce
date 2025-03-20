import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header/Header'; 
import '../src/index.css';


function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
