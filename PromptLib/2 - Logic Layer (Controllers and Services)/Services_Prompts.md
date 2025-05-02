# Service Conversion Prompt Template

## Objective:
Refactor AngularJS services into React equivalents such as custom hooks or JavaScript modules.

## Instructions:
1. Identify the service's functionality (e.g., shared logic, API calls).
2. Convert the service into:
   - A custom React hook (for logic tied to React components).
   - A JavaScript module (for reusable logic across files).
3. Use `fetch`, `axios`, or similar libraries for HTTP requests.

## Constraints:
- Use ES6+ syntax.
- Ensure the service logic is reusable.

**Example Input:**
AngularJS Code:
```javascript
app.service('MyService', function() {
  this.getGreeting = function() {
    return "Hello from Service!";
  };
});
```

**Expected React Output:**
React Code (Custom Hook):
```javascript
import { useState, useEffect } from 'react';

const useGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting("Hello from Service!");
  }, []);

  return greeting;
};

export default useGreeting;
```

React Code (JavaScript Module):
```javascript
export const getGreeting = () => {
  return "Hello from Service!";
};
```
