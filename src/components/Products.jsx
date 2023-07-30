import React from "react";

const Products = ({ products, handleCart }) => {
  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div className="card w-100 bg-white shadow-xl" key={index}>
            <figure>
              <img src={product.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h6 className="text-black">{product.title}</h6>
              <p className="text-sm text-gray-400">{product.short_des}</p>
              <h6 className="font-bold">Price: ${product.price}</h6>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-sm btn-outline btn-primary"
                  onClick={() => handleCart(product.id)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
