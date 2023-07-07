import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { Context } from '../context'
import classnames from 'classnames'

function Header () {
  const { context, dispatch, logout } = useContext(Context)

  const switchTheme = useCallback(() => {
    dispatch({ type: 'switchTheme' })
  }, [dispatch])

  const switchThemeButton = useCallback(() => {
    dispatch({ type: 'switchThemeButton' })
  }, [dispatch])

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={classnames('navbar navbar-expand-md',
      context.theme === 'light' ? 'navbar-dark bg-dark' : 'navbar-light bg-secondary' 
    )}>
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top mt-1"/>
          MOOC
        </div>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counter">Counter</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/roles">Rôles</Link>
          </li>
        </ul>
        <div className="navbar-text me-2">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={switchTheme || switchThemeButton}
            />
            {context.theme}
          </div>
        </div>
        <div className="navbar-text">
          {context.user.name
            ? <div>Bienvenue {context.user.name}
              <Link to="/login" className={classnames('btn ms-4',
                  context.themeButton === 'lightButton' ? 'btn-outline-light' : 'btn-outline-secondary')} 
                  onClick={handleLogout}>Déconnexion</Link>
                  
              {/* <button type="button" className={classnames('btn ms-4',
                  context.themeButton === 'lightButton' ? 'btn-outline-light' : 'btn-outline-secondary')} >Déconnexion</button> */}
            </div>
            : <div>
                <Link to="/login">Connectez-vous</Link>
                <br/>ou&nbsp;
                <Link to="/register">Inscrivez-vous !</Link>
              </div>
          } 
        </div>
      </div>
    </nav>
  )
}

export default Header
