import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout';
import Summary from './Pages/Summary';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/layout' element={<Layout/>}/>
        <Route path='/summary/:id' element={<Summary/>}/>
      </Routes>
    </div>
  );
}

export default App;
