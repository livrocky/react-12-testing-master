import { render, screen } from '@testing-library/react';
import AddInput from './AddInput';

it('Add new task here', () => {
  // Arrange
  render(<AddInput />);
  // Act
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  // Assert
  expect(inputEl).toBeInTheDocument();
});
