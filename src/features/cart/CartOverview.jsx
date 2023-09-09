import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (totalCartQuantity > 0)
    return (
      <div className="flex items-center justify-between bg-stone-700 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>
            {totalCartQuantity} {totalCartQuantity < 2 ? "pizza" : "Pizzas"}
          </span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    );
}

export default CartOverview;
