# Template Conversion Prompt Template

## Objective:
Convert AngularJS templates into React components using JSX syntax.

## Instructions:
1. Identify AngularJS expressions (`{{variable}}`) and replace them with JSX `{variable}`.
2. Replace AngularJS directives in templates (e.g., `ng-repeat`, `ng-if`) with React equivalents.
3. Use props to pass data dynamically into React components.

## Constraints:
- Use ES6+ syntax.
- Ensure the React components are modular and reusable.

**Example Input:**
AngularJS Code:
```html
<div>
  <h1>{{ title }}</h1>
  <p ng-bind="description"></p>
</div>
```

**Expected React Output:**
React Code:
```jsx
const MyComponent = ({ title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default MyComponent;
```
