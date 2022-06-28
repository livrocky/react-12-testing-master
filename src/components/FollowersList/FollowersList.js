import React, { useEffect, useState } from 'react';
import './FollowersList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=5');
    setFollowers(data.results);
  };

  // it should render first item

  // it should render 5 items

  return (
    <div className='followerslist-container'>
      <div>
        {followers.map((follower, index) => (
          <div key={follower.cell} data-testid={`follower-${index + 1}`} className='follower-item'>
            <img src={follower.picture.large} alt={follower.name.first} />
            <div className='followers-details'>
              <div className='follower-item-name'>
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='todo-footer'>
        <Link to='/'>Go Back</Link>
      </div>
    </div>
  );
}
