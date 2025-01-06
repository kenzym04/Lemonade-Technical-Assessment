import React from "react";

/**
 * A functional component that renders a list of items.
 *
 * Props:
 * - items (Array<string>): An array of strings representing the items to display.
 *
 * Example usage:
 * <ItemList items={['Apple', 'Banana', 'Cherry']} />
 *
 * The component iterates over the `items` array and creates a list item (`<li>`)
 * for each element. Each `<li>` is assigned a unique key based on its index
 * in the array.
 */
const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
