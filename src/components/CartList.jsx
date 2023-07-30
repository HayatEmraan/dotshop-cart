import React from "react";

const CartList = ({ cart, handleRemove }) => {
  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {cart.map((product, index) => (
              <div className="card card-side bg-white shadow-xl" key={index}>
                <figure>
                  <img
                    className="w-40"
                    src={product?.product?.image}
                    alt={product?.product?.title}
                  />
                </figure>
                <div className="card-body">
                  <h6 className="text-black">{product?.product?.title}</h6>
                  <h3 className="text-xl font-bold text-gray-700">
                    Price: ${product?.product?.price}
                  </h3>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-sm btn-primary btn-outline"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: {cart.length}</h2>
            <h6>Total Price: $1,000 (Not implemented)</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
