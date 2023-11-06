import CallToAction from "../components/CallToAction";
import Chicago from "../components/Chicago";
import CustomersSay from "../components/CustomersSay";
import Specials from "../components/Specials";

export default function Homepage() {
  return (
    <div className="container">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}
