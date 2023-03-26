import React, { useState } from "react";

const initial = {
  brand: "",
  category: "",
  imageurl: "",
};

const ProductsForm = ({ onData }) => {
  const [input, setInput] = useState(initial);

  const handleChange = (event) => {
    const { name, value } = event.target; //destructring
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onData(input);
  };

  const { brand, category, imageurl } = input; // to make them controlled

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={brand}
          onChange={handleChange}
          type="text"
          placeholder="brand name"
          name="brand"
        />
        <br />
        <br />
        <input
          value={category}
          onChange={handleChange}
          type="text"
          placeholder="put category"
          name="category"
        />
        <br />
        <br />
        <input
          value={imageurl}
          onChange={handleChange}
          type="text"
          placeholder=" put image url "
          name="imageurl"
        />
        <br />
        <br />
        <button>Create product </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default ProductsForm;
