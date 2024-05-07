import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
// import FooterComponent from '../components/FooterComponent'
import GameComponent2 from '../components/GameComponent2'

import './BlogApp.css'
// import RecipeComponent from '../components/RecipeComponent'
// import RecipeListComponent from '../components/RecipeListComponent'
// import ErrorComponent from '../components/ErrorComponent'
// import IngredientsListComponent from '../components/IngredientsListComponent'

export default function BlogApp() {
    return (
        <div className="BlogApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='*' element={<GameComponent2 /> } />


                </Routes>
                {/* <FooterComponent /> */}
            </BrowserRouter>
        </div>
    )
}