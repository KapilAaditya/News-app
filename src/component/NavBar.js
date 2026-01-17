import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark   ">
                <div className="container-fluid  border border-3 border rounded-4 dark ">
                    <a className="navbar-brand" href="/"><strong>News Hub</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Aboutus">About us</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Business</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Health</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Sports</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Genral</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Entertainment</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Technology</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Aboutus">Science</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
