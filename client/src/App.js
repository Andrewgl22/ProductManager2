import './App.css';
import View from './views/View';
import Main from './views/Main';
import Update from './views/Update';
import {Router} from '@reach/router';

function App() {
  return (
    <div>
      <Router>
        <Main path='/products'/>
        <View path='/products/:id'/>
        <Update path='/products/:id/edit'/>
      </Router>
    </div>
  );
}

export default App;
