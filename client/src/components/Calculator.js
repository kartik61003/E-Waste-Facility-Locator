import React, { useState } from 'react';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [item, setItem] = useState('laptop');
  const [cost, setCost] = useState(0);
  const ratePerUnitWeight = {
    laptop: 5,
    mobile: 3,
    camera: 8,
    TV: 10,
    others: 2,
  };

  const handleWeightChange = (event) => {
    const inputWeight = parseFloat(event.target.value);
    setWeight(inputWeight);
    setCost(inputWeight * ratePerUnitWeight[item]);
  };

  const handleItemChange = (event) => {
    const selectedItem = event.target.value;
    setItem(selectedItem);
    setCost(weight * ratePerUnitWeight[selectedItem]);
  };

  return (
    <div className='calc'>
      <label htmlFor="itemSelect">Select an item:</label>
      <select id="itemSelect" value={item} onChange={handleItemChange}>
        <option value="laptop">Laptop</option>
        <option value="mobile">Mobile</option>
        <option value="camera">Camera</option>
        <option value="TV">TV</option>
        <option value="others">Others</option>
      </select>

      <label htmlFor="weightInput">Enter the weight of the thing (in kg):</label>
      <input
        type="number"
        id="weightInput"
        value={weight}
        onChange={handleWeightChange}
      />

      <div>
        <strong>Cost: Rs{cost}</strong>
      </div>
    </div>
  );
};

export default Calculator;
