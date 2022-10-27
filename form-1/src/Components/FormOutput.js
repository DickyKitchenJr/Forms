import React from "react";
import "./FormOutput.css";

function FormOutput({ list }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {list.map((list) => {
            const { id, item, quantity, store } = list;
            return (
              <tr key={id}>
                <td>{item}</td>
                <td>{quantity}</td>
                <td>{store}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FormOutput;
