import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './TodoFooter';

const TodoFooterWithRouter = (args) => (
  <BrowserRouter>
    <TodoFooter {...args} />
  </BrowserRouter>
);

// it('render 1 task left', () => {
//   // Arrange
//   render(<TodoFooterWithRouter numberOfIncompleteTasks={1} />);
//   // Act
//   const numOfTasksEl = screen.getByText('1 task left');
//   // Assert
//   expect(numOfTasksEl).toBeInTheDocument();
// });

// **************************************

// it should render 10 tasks left

// it('render 10 task left', () => {
//   // Arrange
//   render(<TodoFooterWithRouter numberOfIncompleteTasks={10} />);
//   // Act
//   const numOfTasksEl = screen.getByText('10 task left');
//   // Assert
//   expect(numOfTasksEl).toBeInTheDocument();
// });

// **************************************

// it should not render 'tasks' if numberOfIncompleteTasks === 1

// it('should not render tasks if only 1 task', () => {
//   // Arrange
//   render(<TodoFooterWithRouter numberOfIncompleteTasks={1} />);
//   // Act
//   const numOfTasksEl = screen.queryByText(/tasks/i);
//   // Assert
//   expect(numOfTasksEl).not.toBeInTheDocument();
// });

// **************************************

it('should not render tasks if only 1 task', () => {
  // Arrange
  render(<TodoFooterWithRouter numberOfIncompleteTasks={1} />);
  const numOfTasksEl = screen.queryByText(/tasks/i);
  expect(numOfTasksEl).not.toBeInTheDocument();
});
