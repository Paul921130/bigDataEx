import { useContext } from "react";

import ContextStore from "../store";

export default function useStore() {
  const store = useContext(ContextStore);
  return { ...store };
}
