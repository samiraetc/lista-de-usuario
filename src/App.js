import React from 'react';
import Usuario from './componentes/Usuario';
import Quantidade from './componentes/Quantidade';
import './App.css';

function App() {
  return (
    <table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Albums</th>
            <th>Posts</th>
            <th>Photos</th>
        </tr>
    </thead>
    <Usuario />
    
</table>
  );
}

export default App;
