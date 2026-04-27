import { useParams } from "react-router-dom";
import serviceData from "../data/service.json";
import { useState } from "react";

const Service = ([setCart]) => {
  const { serviceName } = useParams();
  const service = serviceData[serviceName];
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

   
  
  console.log(serviceData);
  console.log("PARAM:", serviceName);
  console.log("SERVICE:", service);

  const totalPrice = 
    selectedItem && selectedItem.price
    ? selectedItem.price * quantity
    : 0;

  
  const handleAddToCart = () => {
    if (!selectedItem) return;

    const newItem = {
      id: selectedItem.name,
      name: selectedItem.name,
      price: selectedItem.price,
      quantity,
      total: selectedItem.price * quantity,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, newItem];
    });
     setSelectedItem(null);
     setQuantity(1);
  };

  if (!service) {
    return <h1 className="p-10">Service not found</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-[(--color-primary)]">
        {service.title}
      </h1>

      <img
        src={service.image}
        alt={service.title}
        className="mt-6 w-full max-w-2xl rounded-lg"
      />

      <p className="mt-4 text-gray-600 text-lg">
        {service.description}
      </p>

     {/* <p className="mt-1 font-bold text-gray-700">
                    {new Intl.NumberFormat("en-NG", {
                      style:"currency",
                      currency:"NGN",
                    }).format(service.price)}
                  </p> */}

           {/* <p className="font-bold text-gray-700">₦{service.price}</p> */}
           
      {service.varieties && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[(--color-primary)]">
            Available Options
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {service.varieties.map((item, index) => (
    <div
          key={index}
          onClick={() => {
            setSelectedItem(item);
            setQuantity(1);
          }}
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition p-4 cursor-pointer flex flex-col"
>
      {/* IMAGE */}
      <div className="h-40 flex items-center justify-center">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="h-full object-contain"
          />
        )}
      </div>

      {/* NAME */}
      <h3 className="mt-3 text-sm font-medium text-gray-800 line-clamp-2">
        {item.name}
      </h3>

      {/* PRICE */}
      <p className="mt-2 text-lg font-bold text-gray-900">
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(item.price)}
      </p>
      
      {/* BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedItem(item);
        }}
        className="mt-auto bg-(--color-primary) hover:bg-(--color-accent) text-sm py-2 rounded-md font-semibold text-white cursor-pointer"
      >
        View Details
      </button>
    </div>
  ))}
</div>
          {/* Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative">
                {/* Close button */}
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setQuantity(1);
                  }}
                  className="absolute top-3 right-3 text-3xl font-bold text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>

                {/* Selected item name */}
                <h3 className="text-2xl font-bold text-[(--color-primary)] text-center mt-2">
                  {selectedItem.name}
                </h3>

                {/* Selected item image (larger in modal) */}
                {selectedItem.image && (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="mt-6 mx-auto h-64 w-full max-w-xs object-cover rounded-lg"
                  />
                )}

                {/* You can add more details here later if your JSON has them */}
                {selectedItem.description &&(
                  <p className="text-gray-600 text-center mb-8">
                    {selectedItem.description}
                  </p>
                )}

                {/* selected item price */}
                {selectedItem.price &&(
                  <div className="text-center mb-8">
                    <p className= "text-3xl font-bold text-[(--color-primary)]">{new Intl.NumberFormat("en-NG", {
                      style:"currency",
                      currency:"NGN",
                    }).format(selectedItem.price)}</p>
                  </div>
                )}
                  <div className="mt-4 text-center">
                    <p className="font-semibold">Total</p>
                      <p className="text-2xl font-bold text-(--color-primary)">₦{totalPrice}</p>
                  </div>
                <div className="flex items-center justify-center gap-4 mt-3">
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                <span>{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
  onClick={handleAddToCart}
  className="w-full mt-4 py-3 rounded-lg text-white font-semibold cursor-pointer"
  style={{ backgroundColor: "var(--color-secondary)" }}
>
  Add to Cart
</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Order Now button (kept at the bottom) */}
      <button className="mt-10 px-6 py-3 bg-(--color-secondary) text-white rounded-lg font-semibold">
        Order Now
      </button>
    </div>
  );
};

export default Service;