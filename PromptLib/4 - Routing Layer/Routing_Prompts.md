# Routing Conversion Prompt Template

## Objective:
Convert AngularJS routing logic (`ngRoute` or `ui-router`) into React Router equivalents.

## Instructions:
1. Identify AngularJS routing configuration in the code.
2. Replace `$routeProvider` or `$stateProvider` with React Router's `<Routes>` and `<Route>` components.
3. If dynamic URL parameters are used (e.g., `:id`), use React Router's `useParams` hook to access them in components.
4. If nested views are present, use nested routing in React Router.

## Constraints:
- Use React Router (v5 or v6).
- Maintain a clean folder structure, organizing React components by routes.

**Example Input:**
AngularJS Code:
```javascript
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/users/:userId', {
      templateUrl: 'user.html',
      controller: 'UserController'
    });
});
```

**Expected React Output:**
React Code:
```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const Home = () => <div>Home Page</div>;

const User = () => {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users/:userId" element={<User />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```
