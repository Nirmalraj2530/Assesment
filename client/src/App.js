import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
  </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
