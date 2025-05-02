import React, { useState } from 'react';

const CustomerTemplate = ({ user, friends, logged, facebookReady, welcome, IntentLogin, logout }) => {
  const [filterName, setFilterName] = useState("");

  // Filter friends by name
  const filteredFriends = friends?.data?.filter((friend) =>
    friend.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      {/* Welcome Message */}
      {welcome && (
        <h3>
          Bem-vindo, <b className="light-red">{user.name}</b>
        </h3>
      )}

      {/* Login Button */}
      {!logged && (
        <button disabled={!facebookReady} onClick={IntentLogin}>
          Conectar com o Facebook
        </button>
      )}

      {/* Logout Button */}
      {logged && (
        <button disabled={!facebookReady} onClick={logout}>
          Sair
        </button>
      )}

      {/* Filter Section */}
      {logged && (
        <div className="filter">
          <h3>Filtrar por nome</h3>
          <p>
            <input
              type="text"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              placeholder="Busque contatos pelo nome"
            />
          </p>

          <ul className="customer-cards">
            {filteredFriends?.map((friend, index) => (
              <li
                key={index}
                style={{
                  background: `url(http://graph.facebook.com/${friend.id}/picture?type=large) no-repeat center center`,
                  backgroundSize: '100% auto',
                }}
              >
                <p>{friend.name}</p>
                {/* Uncomment the line below if location should be displayed */}
                {/* <br /><small className="light">{friend.location}</small> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerTemplate;
