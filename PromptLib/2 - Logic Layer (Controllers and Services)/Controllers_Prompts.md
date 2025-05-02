# Controller Conversion Prompt Template

## Objective:
Refactor AngularJS controllers into React functional components using state management.

## Instructions:
1. Replace `$scope` with React state (`useState` or `useReducer`).
2. Move controller logic into the React component or custom hooks.
3. Pass data and functions as props to child components.

## Constraints:
- Use ES6+ syntax.
- Ensure the React component follows best practices (e.g., functional components, hooks).

**Example Input:**
AngularJS Code:
```javascript
app.controller('MyController', function($scope) {
  $scope.message = "Hello World!";
  $scope.updateMessage = function(newMessage) {
    $scope.message = newMessage;
  };
});
```

**Expected React Output:**
React Code:
```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [message, setMessage] = useState("Hello World!");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => updateMessage("New Message!")}>Update Message</button>
    </div>
  );
};

export default MyComponent;
```
