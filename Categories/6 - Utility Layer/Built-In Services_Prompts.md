# Built-In Services Conversion Prompt Template

## Objective:
Convert AngularJS built-in services like `$http`, `$timeout`, `$interval`, and `$q` into React equivalents.

## Instructions:
1. Replace `$http` with `fetch` or libraries like `axios` for HTTP requests.
2. Replace `$timeout` and `$interval` with `setTimeout` and `setInterval` in JavaScript.
3. Replace `$q` with native Promises or `async/await`.

## Constraints:
- Use modern JavaScript (ES6+).
- Avoid external libraries unless necessary.

**Example Input:**
AngularJS Code:
```javascript
$http.get('/api/data').then(function(response) {
  $scope.data = response.data;
});
```

**Expected React Output:**
React Code (using `fetch`):
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default MyComponent;
```
