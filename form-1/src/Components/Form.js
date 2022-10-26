import React, { useState } from 'react'
import './Form.css';

function Form() {
    const [flip, setFlip] = useState(0);

    const handleClick = () => {
        console.log("I've been clicked");
        setFlip(1);
    }

  return (
    <>
      <form id="form1">
        <label htmlFor="item">Item:</label>
        <br />
        <input
          type="text"
          name="item"
          flip={flip}
          onAnimationEnd={() => {setFlip(0); document.getElementById("form1").reset();}}
        />
        <br />
        <label htmlFor="quantity">Amount:</label>
        <br />
        <input
          type="text"
          name="quantity"
          flip={flip}
          onAnimationEnd={() => setFlip(0)}
        />
        <br />
        <label htmlFor="store">Store:</label>
        <br />
        <input
          type="text"
          name="store"
          flip={flip}
          onAnimationEnd={() => setFlip(0)}
        />
        <br />
        <button type="button" form="form1" onClick={() => handleClick()}>
          Add To List
        </button>
      </form>
    </>
  );
}

export default Form
