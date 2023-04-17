import "/styles/globals.css";
import { WrapContext } from "../src/store/index";
export default function App({ Component, pageProps }) {
  return (
    <WrapContext>
      <Component {...pageProps} />
    </WrapContext>
  );
}
