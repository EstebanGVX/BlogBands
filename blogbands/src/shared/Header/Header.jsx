import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './Header.scss';

const Header = ({ navbar }) => {
    return (
        <>
            <div className="Header container-all">
                <div className="margin-spacing">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid justify-content-between">
                            <a className="navbar-brand" href="#">BlogBands</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse flex-grow-0" role='navegation' id="navbarNav">
                                <ul className="navbar-nav">
                                    {
                                        navbar && navbar.map(
                                            (item, index) => <li className='nav-item'>
                                                <Link className={classnames('nav-link')} to={item.path}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        )
                                    }
                                    {/* <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export { Header };