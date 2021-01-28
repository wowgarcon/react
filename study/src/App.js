import { Route } from 'react-router-dom';

import Home from './components/Home';
import Counter from './components/Counter';
import UserList from './components/user/UserList';

function App() {
  return (
    <>
      <Route path="/" component={Home} exact={true} />
      <Route path="/counter" component={Counter} />
      <Route path="/userlist" component={UserList} />
    </>
  );
}

export default App;
