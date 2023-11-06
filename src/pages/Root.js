import { Outlet } from "react-router-dom";
import Footer from "../components/Footer-section";
import Header from "../components/Header-section";
import Main from "../components/Main-section";

export default function Root() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
