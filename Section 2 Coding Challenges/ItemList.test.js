import React from "react";
import { render, screen } from "@testing-library/react";
import ItemList from "./ItemList";

/**
 * Unit tests for the `ItemList` component.
 *
 * These tests verify the following:
 * 1. The component renders the correct number of list items (`<li>`).
 * 2. Each list item displays the correct content as passed via props.
 *
 * The tests are written using Jest and React Testing Library.
 */
describe("ItemList Component", () => {
  /**
   * Test: Verifies the correct number of items are rendered.
   *
   * This test ensures that the `items` array is correctly mapped
   * to `<li>` elements in the DOM.
   */
  it("renders the correct number of items", () => {
    const items = ["Apple", "Banana", "Cherry"]; // Sample data
    render(<ItemList items={items} />); // Render the component

    // Get all list items and verify their count matches the input array
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(items.length);
  });

  /**
   * Test: Verifies the content of each rendered list item.
   *
   * This test ensures that the text content of each `<li>` matches
   * the corresponding element in the `items` array.
   */
  it("renders the correct content for each item", () => {
    const items = ["Dog", "Cat", "Rabbit"]; // Sample data
    render(<ItemList items={items} />); // Render the component

    // Check that each item's text content is in the DOM
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
