import "/styles/globals.css";
import { WrapContext } from "../src/store/index";
export default function App({ Component, pageProps }:any) {
  return (
    <WrapContext>
      <Component {...pageProps} />
    </WrapContext>
  );
}
