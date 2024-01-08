import React from "react";
import { render, screen } from "@testing-library/react";
import DecodedMessage from "./DecodedMessage";

test("renders decoded message", () => {
  render(<DecodedMessage />);
  const linkElement = screen.getByText(/decoded message/i);
  expect(linkElement).toBeInTheDocument();
});
