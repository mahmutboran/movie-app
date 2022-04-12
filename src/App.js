import './App.css';
import { UserProvider} from './context/AuthContext';
import Router from './router/Router';



function App() {
  return (

    <UserProvider>


      <Router />
    </UserProvider>
 
 
 
      
  );
}

export default App;
