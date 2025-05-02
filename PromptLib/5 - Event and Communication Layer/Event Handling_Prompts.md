# Event Handling Conversion Prompt Template

## Objective:
Convert AngularJS event handling (`ng-click`, `ng-change`, `$emit`, `$broadcast`) into React equivalents.

## Instructions:
1. Replace DOM event directives like `ng-click` and `ng-change` with React's `onClick`, `onChange`, etc.
2. Replace custom events (`$emit` and `$broadcast`) with React's `props` or `context` for parent-child or global communication.
3. Ensure event handlers in React are defined as functions inside the component or passed as props from a parent.

## Constraints:
- Use React's functional components and hooks.
- Avoid using libraries unless necessary.

**Example Input:**
AngularJS Code:
```html
<button ng-click="handleClick()">Click Me</button>
```

**Expected React Output:**
React Code:
```jsx
const MyComponent = ({ handleClick }) => (
  <button onClick={handleClick}>Click Me</button>
);

export default MyComponent;
```
