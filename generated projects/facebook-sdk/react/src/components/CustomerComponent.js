import React from 'react';
import useFacebook from '../hooks/useFacebook';

const CustomerComponent = () => {
  const {
    user,
    friends,
    logged,
    facebookReady,
    welcome,
    bye,
    checkLoginStatus,
    login,
    fetchUserData,
    fetchFriendsData,
    logout,
  } = useFacebook();

  if (!facebookReady) {
    return <div>Loading Facebook SDK...</div>;
  }

  return (
    <div>
      <h1>Customer Dashboard</h1>
      {!logged && <button onClick={checkLoginStatus}>Login with Facebook</button>}
      {logged && (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      {welcome && <p>Welcome back!</p>}
      {bye && <p>Goodbye!</p>}

      {logged && (
        <div>
          <h3>Friends List:</h3>
          <ul>
            {friends?.data?.map((friend, index) => (
              <li key={index}>
                {friend.name} {friend.location ? `(${friend.location.name})` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerComponent;
