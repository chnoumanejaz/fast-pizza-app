import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-40 flex flex-col-reverse items-center justify-center gap-4 px-4 text-center">
      <LinkButton to="/menu"> Back to menu</LinkButton>

      <p className="text-xl font-medium">
        Your cart is empty. Start adding some pizzas 😊
      </p>
    </div>
  );
}

export default EmptyCart;
