# Directives in View Conversion Prompt Template

## Objective:
Refactor AngularJS directives used in templates (`ng-if`, `ng-class`, `ng-repeat`) into React equivalents.

## Instructions:
1. Replace `ng-if` with conditional rendering (`condition && <Element />`).
2. Replace `ng-class` with dynamic `className` logic.
3. Replace `ng-repeat` with React's `map` function for iterating over arrays.

## Constraints:
- Use ES6+ syntax.
- Ensure the React code preserves the original functionality.

**Example Input:**
AngularJS Code:
```html
<div ng-if="isVisible">Visible Content</div>
```

**Expected React Output:**
React Code:
```jsx
{isVisible && <div>Visible Content</div>}
```
