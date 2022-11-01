import React, { useState, useRef } from "react";
import FormOutput from "./FormOutput";
import "./Form.css";

function Form() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [store, setStore] = useState("");
  const [list, setList] = useState([]);
  const [flip, setFlip] = useState(0);

  const blankItem = useRef(null);
  const blankQuantity = useRef(null);
  const blankStore = useRef(null);

  const handleItemRef = () => {
    if(item === ""){
      return blankItem.current.focus();
    } else {
      return
    }
  }

  const handleQuantityRef = () => {
    if (quantity === "") {
      return blankQuantity.current.focus();
    } else {
      return;
    }
  };

  const handleStoreRef = () => {
    if (store === "") {
      return blankStore.current.focus();
    } else {
      return;
    }
  };

  const handleClick = () => {
    setFlip(1);
    if (item && quantity && store) {
      const listRow = {
        id: new Date().getTime().toString(),
        item,
        quantity,
        store,
      };
      setList((list) => {
        return [...list, listRow];
      });
      setItem("");
      setQuantity("");
      setStore("");
    } else {
      alert("All entries required.");
      handleStoreRef();
      handleQuantityRef();
      handleItemRef();
    }
  };

  // GOAL: to create a form that takes in data, does a flip animation, clears the data, and places data in a list

  return (
    <>
      <form id="form1">
        <label htmlFor="item">Item:</label>
        <br />
        <input
          ref={blankItem}
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          flip={flip}
          onAnimationEnd={() => {
            setFlip(0);
            document.getElementById("form1").reset();
          }}
        />
        <br />
        <label htmlFor="quantity">Amount:</label>
        <br />
        <input
          ref={blankQuantity}
          type="text"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          flip={flip}
          onAnimationEnd={() => setFlip(0)}
        />
        <br />
        <label htmlFor="store">Store:</label>
        <br />
        <input
          ref={blankStore}
          type="text"
          name="store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          flip={flip}
          onAnimationEnd={() => setFlip(0)}
        />
        <br />
        <button type="button" form="form1" onClick={() => handleClick()}>
          Add To List
        </button>
      </form>
      <FormOutput list={list} />
    </>
  );
}

export default Form;
