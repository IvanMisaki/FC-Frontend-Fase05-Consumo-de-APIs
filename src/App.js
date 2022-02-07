//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import {Login} from './components/login';

import 'bootstrap/dist/css/bootstrap.css';
import {Alumnos} from './components/alumno/alumnos';
import {Ficha} from './components/alumno/ficha'
import {Etiquetas} from "./components/alumno/Etiquetas";

export function App() {
  return (
    <Router>
    <Routes>
        <Route 
            path="/" 
            element={<Login />} 
            />
        <Route 
            exact
            path="/alumnos" 
            element={<Alumnos />} 
            />
        <Route 
            exact
            path="/ficha/:idAlumno" 
            element={<Ficha />} 
            />
        <Route 
            exact
            path="/etiquetas" 
            element={<Etiquetas />} 
            />
    </Routes>
</Router>
  );
}