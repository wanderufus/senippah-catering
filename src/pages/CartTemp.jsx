const Cart = ({ cart, setCart }) => {

  const handleRemove = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const handleCheckout = () => {
    alert("Checkout successful!");
    setCart([]);
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6 text-(--color-primary)">
        CART
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-(--color-accent) mt-20 text-lg">
          NO ITEMS ORDERED
        </p>
      ) : (
        <div className="space-y-6">

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded"
                />
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  ₦{item.total}
                </p>

                <button
                  onClick={() => handleRemove(item.name)}
                  className=" cursor-pointer text-(--color-primary) text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="mt-10 text-right">
            <h2 className="text-2xl font-bold">
              Total: ₦{totalAmount}
            </h2>

            <button
            onClick={handleCheckout}
            className="mt-4 px-6 py-3 bg-(--color-secondary) cursor-pointer text-white rounded-lg">
              Checkout
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;