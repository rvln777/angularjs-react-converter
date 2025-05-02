import { useState, useEffect, useCallback } from 'react';

const useFacebook = () => {
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState({});
  const [logged, setLogged] = useState(false);
  const [facebookReady, setFacebookReady] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [bye, setBye] = useState(false);

  // Monitor Facebook SDK readiness
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.FB) {
        setFacebookReady(true);
        clearInterval(interval);
      }
    }, 100); // Check every 100ms until ready
    return () => clearInterval(interval);
  }, []);

  // Check Facebook login status
  const checkLoginStatus = useCallback(() => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        setLogged(true);
        fetchUserData();
        fetchFriendsData();
      } else {
        login();
      }
    });
  }, []);

  // Login to Facebook
  const login = useCallback(() => {
    window.FB.login((response) => {
      if (response.status === 'connected') {
        setLogged(true);
        fetchUserData();
        fetchFriendsData();
      }
    });
  }, []);

  // Fetch user data from Facebook API
  const fetchUserData = useCallback(() => {
    window.FB.api('/me', (response) => {
      setUser(response);
    });
  }, []);

  // Fetch friends data from Facebook API
  const fetchFriendsData = useCallback(() => {
    window.FB.api('/me/friends?fields=name,location', (response) => {
      setFriends(response);
    });
  }, []);

  // Logout from Facebook
  const logout = useCallback(() => {
    window.FB.logout(() => {
      setUser({});
      setFriends({});
      setLogged(false);
    });
  }, []);

  // Monitor Facebook status change
  useEffect(() => {
    const handleStatusChange = (response) => {
      if (response.status === 'connected') {
        setWelcome(true);
        setBye(false);
      } else {
        setWelcome(false);
        setBye(true);
      }
    };

    const eventListener = window.FB?.Event?.subscribe('auth.statusChange', handleStatusChange);

    return () => {
      if (eventListener) {
        window.FB.Event.unsubscribe('auth.statusChange', handleStatusChange);
      }
    };
  }, []);

  return {
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
  };
};

export default useFacebook;
