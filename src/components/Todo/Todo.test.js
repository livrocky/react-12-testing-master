import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Todo';

const TodoWithRouter = (args) => (
  <BrowserRouter>
    <Todo {...args} />
  </BrowserRouter>
);

// const addTasks = (tasksArray) => {
//   const inputEl = screen.getByPlaceholderText('Add a new task here...');
//   const btnEl = screen.getByRole('button', { name: /add/i });
//   tasksArray.forEach((task) => {
//     fireEvent.change(inputEl, { target: { value: task } });
//     fireEvent.click(btnEl);
//   });
// };

// integration test
it('should add new todo to todo list', () => {
  // it should work with multiple todos

  render(<TodoWithRouter />);
  // addTasks('Buy milk', 'go running', 'Do homework');
  const inputEl = screen.getByPlaceholderText('Add a new task here...');
  const btnEl = screen.getByRole('button', { name: /add/i });
  fireEvent.change(inputEl, { target: { value: 'bubble gum' } });
  fireEvent.click(btnEl);
  fireEvent.change(inputEl, { target: { value: 'bubble gum' } });
  fireEvent.click(btnEl);
  fireEvent.change(inputEl, { target: { value: 'bubble gum' } });
  fireEvent.click(btnEl);
  const divEls = screen.getAllByTestId('single-todo');
  expect(divEls).toHaveLength(3);
});

// it should render diffenere class when clicked on todo
// it('it should render "todo-item-active" class when clicked on todo', () => {
//   render(<TodoWithRouter />)
//   addTasks(['bubble gum'])
//   const divEl = screen.getByTestId('single-todo'
//   fireEvent.click(divEl));
//   expect(divEl).toHaveClass('todo-item-active')
// })
