import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home.js';
import CreateStudent from './Components/CreateStudent.js';
import EditStudent from './Components/EditStudent.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create-student' element={<CreateStudent/>}></Route>
      <Route path='/edit-student/:id' element={<EditStudent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
