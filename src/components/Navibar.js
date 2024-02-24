import {Link }from 'react-router-dom';

export default function Navibar() {
    return <nav>
        <h1> SideGeStock</h1>
        <div className="link">
            <Link to="/">Home</Link>
            <Link to="/create">Novo Produto</Link>
        </div>
    </nav>

}
