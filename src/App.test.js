import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const firstLink = screen.getByTestId("firstlink");
  // console.log(firstLink);
  expect(firstLink).toBeInTheDocument();
});

test('renders three li items in ul',()=>{
  render(<App />);
  const listitems = screen.getAllByRole("listitem");
  expect(listitems.length).toBe(3);
});
