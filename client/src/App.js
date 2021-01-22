import './App.css';
import View from './components/View';
import Main from './components/Main';
import {Router} from '@reach/router';

function App() {
  return (
    <div>
      <Router>
        <Main path='/products'/>
        <View path='/products/:id'/>
      </Router>
    </div>
  );
}

export default App;
