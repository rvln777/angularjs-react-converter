# Scope Communication Conversion Prompt Template

## Objective:
Convert AngularJS `$scope` communication (parent-child and sibling communication) into React's props, context, or state.

## Instructions:
1. Identify `$scope` variables and methods shared between components.
2. Refactor `$scope` bindings to React `props` for parent-child communication.
3. Use React Context or a state management library (e.g., Redux) for global or sibling communication.

## Constraints:
- Use ES6+ syntax.
- Ensure the state flow in React remains unidirectional (parent-to-child).

**Example Input:**
AngularJS Code:
```javascript
$scope.$emit('updateMessage', 'Hello from Child!');
$scope.$on('updateMessage', function(event, data) {
  $scope.message = data;
});
```

**Expected React Output:**
React Code (using Context):
```javascript
import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

const ParentComponent = () => {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <ChildComponent />
      <p>{message}</p>
    </MessageContext.Provider>
  );
};

const ChildComponent = () => {
  const { setMessage } = useContext(MessageContext);

  return <button onClick={() => setMessage("Hello from Child!")}>
    Send Message
  </button>;
};

export default ParentComponent;
```
