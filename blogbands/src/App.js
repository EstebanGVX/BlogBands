import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './Routes/PublicRoute';
import HomeBands from './pages/public/HomeBands';
//import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header navbar={navbarPublic}/> */}
      <BrowserRouter>
        <Routes>
          <Route path='header' element={ 
            <PublicRoute>
              <h1>Componente Publico</h1>
            </PublicRoute> }
          />
          <Route path='contact' element={ 
            <PublicRoute>
              <h1>Contacto</h1>
            </PublicRoute> }
          />
          <Route path='/' element={ 
            <PublicRoute>
              <HomeBands/>
            </PublicRoute> }
          />
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
