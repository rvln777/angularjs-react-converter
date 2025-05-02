# Custom Filters Conversion Prompt Template

## Objective:
Convert AngularJS custom filters into pure JavaScript functions or React helper utilities.

## Instructions:
1. Identify the AngularJS filter logic.
2. Refactor the filter into a reusable JavaScript function.
3. Use the function directly in React components or as a utility.

## Constraints:
- Use ES6+ syntax.
- Ensure the function is reusable.

**Example Input:**
AngularJS Code:
```javascript
app.filter('capitalize', function() {
  return function(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});
```

**Expected React Output:**
React Code:
```javascript
// helper.js
export const capitalize = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

// Usage in React
import { capitalize } from './helper';

const MyComponent = () => (
  <div>{capitalize("hello")}</div>
);

export default MyComponent;
```
