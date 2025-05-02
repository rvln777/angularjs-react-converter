# Animations Conversion Prompt Template

## Objective:
Convert AngularJS animations (`ngAnimate`) into React animations using CSS or JavaScript libraries (e.g., `react-spring`, `framer-motion`).

## Instructions:
1. Identify animation logic tied to AngularJS directives (`ng-show`, `ng-hide`, `ng-class`).
2. Replace them with CSS transitions or React animation libraries.
3. Use React state to trigger animations.

## Constraints:
- Use modern animation libraries or CSS transitions.
- Avoid unnecessary complexity.

**Example Input:**
AngularJS Code:
```html
<div ng-show="isVisible" class="animate">Hello!</div>
```

**Expected React Output:**
React Code (CSS-based Animation):
```jsx
import './styles.css'; // Define CSS transitions here

const MyComponent = ({ isVisible }) => (
  <div className={`animate ${isVisible ? 'show' : 'hide'}`}>Hello!</div>
);

export default MyComponent;
```

React Code (using `framer-motion`):
```jsx
import { motion } from 'framer-motion';

const MyComponent = ({ isVisible }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
  >
    Hello!
  </motion.div>
);

export default MyComponent;
```
