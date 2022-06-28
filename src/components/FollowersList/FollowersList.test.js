import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './FollowersList';

const FollowersListWithRouter = (args) => (
  <BrowserRouter>
    <FollowersList {...args} />
  </BrowserRouter>
);

// it should render first item
it('should render first item', async () => {
  render(<FollowersListWithRouter />);
  const firstFollower = await screen.findByTestId('follower-1');
  expect(firstFollower).toBeInTheDocument();
});

// it should render 5 items
it('should render 5 item', async () => {
  render(<FollowersListWithRouter />);
  const fiveFollowersArr = await screen.findAllByTestId(/follower/i);
  expect(fiveFollowersArr).toHaveLength(5);
});
