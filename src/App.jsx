import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import SinglePage from './pages/Single';


function App(){
  return(<>
  <BrowserRouter>
<Routes>
<Route path='/' element={<Home></Home>} />
<Route path='/create-page' element={<Create></Create>} />
<Route path='/edit-page/:id' element={<Update></Update>} />
<Route path='/single-page/:id' element={<SinglePage></SinglePage>} />
</Routes>
  </BrowserRouter>
  </>)
}

export default App;