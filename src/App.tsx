import { AppBar, Button, Toolbar } from '@mui/material'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {   

  return (
    <>
      <AppBar position='static' color='info'>
        <Toolbar>
          <h1 className='app-title' color='inherit'>My App</h1>
          <NavLink style={{ color: 'inherit' }} to='/register'>
            <Button color='inherit'>Register</Button>
          </NavLink>
          <NavLink style={{ color: 'inherit' }} to='/login'>
            <Button color='inherit'>Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
