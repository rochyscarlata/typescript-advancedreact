import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../assets/react.svg'
import { ShoppingPage } from './../02-component-pattern/pages/ShoppingPage';


const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React Logo' />
                        <br />
                        <ul>

                            <li >
                                <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                            </li>
                            <li >
                                <NavLink to='/shoppingPage' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                            </li>
                            <li >
                                <NavLink to='/shop' className={({ isActive }) => isActive ? 'nav-active' : ''}>Shop</NavLink>
                            </li>



                        </ul>
                    </nav>
                    <Routes>

                        <Route path='/' element={<ShoppingPage />} />
                        
                        <Route path='/*' element={<Navigate to='/' replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
export default Navigation