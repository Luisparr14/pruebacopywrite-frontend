import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Render title Results', () => {
    render(<App />);
    const linkElement = screen.getByText(/Results/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Render Button Send text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Send/i);
    expect(linkElement).toBeInTheDocument();
  })

  test('Render input text', ()=>{
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/Type text/i);
    expect(linkElement).toBeInTheDocument();
  })
})
