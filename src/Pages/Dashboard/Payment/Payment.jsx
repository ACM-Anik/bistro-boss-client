import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTltle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/UseCart";

// ToDo: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [ cart ] = useCart();
    const total = cart.reduce( (sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle
                heading="Payment"
                subHeading="Please process the payment"
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;