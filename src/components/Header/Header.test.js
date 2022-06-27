import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders Header', () => {
  render(<Header />);
});

it('renders title from props', () => {
  // Arrange
  render(<Header title='testing123' />);
  // const headerEl = screen.getByText(/testing123/i);
  // Act
  const headerEl = screen.getByText('testing123');
  // Assert
  expect(headerEl).toBeInTheDocument();
});

it('should render a heading', () => {
  // Arrange
  render(<Header title='Monday todos' />);
  // Search
  const headingEl = screen.getByRole('heading', { name: /monday todos/i });
  // Assert
  expect(headingEl).toBeInTheDocument();
});

// it('should render 2 headings', () => {
//   // Arrange
//   render(<Header title='todos' />);
//   // Search
//   const headingElArr = screen.getAllByRole('heading');
//   // Assert
//   expect(headingElArr).toHaveLength(2);
// });

it('should render custom div with id', () => {
  render(<Header />);
  const divEl = screen.getByTestId('our-div');
  expect(divEl).toBeInTheDocument();
});

it('not render props differently', () => {
  // Arrange
  render(<Header title='monday' />);
  // const headerEl = screen.getByText(/testing123/i);
  // Act
  const headerEl = screen.queryByText('tuesday');
  // Assert
  expect(headerEl).not.toBeInTheDocument();
});
