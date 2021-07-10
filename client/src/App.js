import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Router>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </>
  );
}

export default App;
