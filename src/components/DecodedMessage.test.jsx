import { render, screen } from "@testing-library/react";
import { expect } from "@testing-library/jest-dom/extend-expect";
import { test } from "@jest/globals"; // Import the 'test' function from the 'jest' package
import DecodedMessage from "./DecodedMessage";

test("renders decoded message", () => {
  render(<DecodedMessage />);
  const linkElement = screen.getByText(/decoded message/i);
  expect(linkElement).toBeInTheDocument();
});
