# Directives Conversion Prompt Template

## Objective:
Convert AngularJS directives (built-in or custom) into React components or reusable logic.

## Instructions:
1. Identify AngularJS directives in the code (`ng-repeat`, `ng-if`, `ng-class`, etc.).
2. Replace built-in directives with React equivalents:
   - Use JSX for rendering logic.
   - Use React state and conditional rendering for `ng-if`.
   - Use dynamic `className` for `ng-class`.
3. Refactor custom directives into React components or hooks.

## Constraints:
- Use ES6+ syntax.
- Ensure the React components are reusable and modular.
- Preserve the original functionality of directives.

**Example Input:**
AngularJS Code:
```javascript
app.directive('myDirective', function() {
  return {
    template: '<div>{{item}}</div>',
    scope: {
      item: '@'
    }
  };
});
```

**Expected React Output:**
React Code:
```javascript
const MyComponent = ({ item }) => (
  <div>{item}</div>
);

export default MyComponent;
```
