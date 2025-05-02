export const initializeFacebook = (appId) => {
  if (!window.FB) {
    console.warn("Facebook SDK not loaded");
    return;
  }
  window.FB.init({
    appId: appId,
    cookie: true,
    xfbml: true,
    version: 'v13.0', // Ensure this matches the API version you are using
  });
};
