import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/layout' element={<Layout/>}/>
      </Routes>
    </div>
  );
}

export default App;
