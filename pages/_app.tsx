import type { AppProps /*, AppContext */ } from "next/app";
import "../src/Components/Styles.scss";
import "rc-select/assets/index.less";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
