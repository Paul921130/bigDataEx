import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

const initStore: { dispatch?: any; testing?: boolean } = {
  testing: false,
};
const ContextStore = createContext(initStore);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCEPT_TESTING":
      return Object.assign({}, state, { testing: action.payload.testing });
    default:
      return state;
  }
};

const WrapContext = (props) => {
  const [stores, dispatch] = useReducer(reducer, initStore);
  return (
    <ContextStore.Provider
      value={{
        dispatch,
        ...stores,
      }}
    >
      {props.children}
    </ContextStore.Provider>
  );
};

export default ContextStore;
export { WrapContext };
