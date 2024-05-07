import { Link} from 'react-router-dom'; // Import useNavigate here
// import { retrieveRecipeApi } from '../api/FoodApiService';
// import { useState } from 'react';

function HeaderComponent() {
    // const navigate = useNavigate() // Define navigate using the useNavigate hook

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.zhaoxiaofeng.com">WizeFiTest</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">GameTest</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/recipes">CATEGORIES</Link>
                                </li> */}
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
