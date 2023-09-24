import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Index from './pages/Index';
import Calculator from './components/Calculator'

function App() {
  return (
    <>
     <Routes>
          <Route path='/' element = {<Layout/>}>
          <Route path="/Calculator" element={<Calculator />} />
          <Route index element = {<Index/>}></Route>
      </Route>
   </Routes>
    </>
  );
}

export default App;
