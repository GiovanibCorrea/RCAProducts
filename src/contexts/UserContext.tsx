import { createContext } from "react";

interface UserContextProps {
  login: Function,
  logout: Function,
  isUserLogged: Function,
  addProductToCart: Function,
  removeProductCart: Function,
  addAmmountProductToCart: Function,
  subAmmountProductToCart: Function,
  userLogged : any
}

const UserValue = {
  userLogged: [],
  login: () => {},
  logout: () => {},
  isUserLogged: () => {},
  removeProductCart: () => {},
  addAmmountProductToCart: () => {},
  subAmmountProductToCart: () => {},
  addProductToCart: () => {},
}

export const UserContext = createContext<UserContextProps>(UserValue)