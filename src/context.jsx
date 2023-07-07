import { createContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';


const initialState = {
  theme: 'light', 
  themeButton: 'lightButton',
  user: {},
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'switchTheme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    // ajouter le changement d'état du bouton logout à Context -------
    case 'switchThemeButton':
      return { ...state, themeButton: state.themeButton === 'lightButton' ? 'darkButton' : 'lightButton' }
    case 'setUser':
      return { ...state, user: action.payload }
      //nouvelle action logout
      case 'logout':
        return { ...state, user: {} } // Remet l'utilisateur a l'état initial = null
    default:
      throw Error('Unknown action in context reducer.')
  }
}



const Context = createContext({ context: initialState, dispatch: () => null })

const ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(reducer, initialState);
  const navigateLogout = useNavigate();
  const logout = () => {
    dispatch({ type: 'logout' });
    // Redirige vers la page de connexion après la déconnexion
    navigateLogout('/login'); 
  };
  return (
    <Context.Provider value={{ context, dispatch, logout}}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
