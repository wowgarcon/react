import { Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <>
      <Route path="/" component={Home} exact={true}/>
    </>
  );
}

export default App;
