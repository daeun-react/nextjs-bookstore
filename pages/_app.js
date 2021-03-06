import App from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
