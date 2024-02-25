import React from 'react';
import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <div>
            <h2>DESCULPA!</h2>
            <p>ESSA PAGINA NÂO EXISTE</p>
            <Link to="/">Voltar para home</Link>
        </div>
    );
}