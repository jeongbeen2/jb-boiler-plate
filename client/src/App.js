import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signin from './Pages/Signin';

function App() {
  return (
    <>
      <Router>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </Router>
    </>
  );
}

export default App;
