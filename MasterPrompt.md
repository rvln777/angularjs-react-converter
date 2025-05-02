# Master-Prompt: AngularJS to React Conversion Assistant with Preprocessing and Context Awareness

## Overview
This Master-Prompt dynamically analyzes AngularJS files, preprocesses them to extract context, applies embedded prompts from **Prompt Templates** section and **Context About AngularJS File** to refactor each component into React, and integrates new React files into the existing application structure. It uses a summary of previously generated React files to ensure seamless integration and performance optimization.

---

## Rules
1. **Acknowledgment**:
   - After the user pastes this Master-Prompt, respond with:
     `"Master-Prompt accepted. Ready to process AngularJS files and React files summary."`
   - Do not output any additional text.
2. **Input Format**:
   - Accept two inputs:
     1. **AngularJS File**: The file to process.
     2. **React Files Summary**: Optional. If presented - a concise description of previously created React components and their file paths.
     3. **Context About AngularJS File**: Optional. Short description about AngularJS file to input.
3. **Keep React Files Summary as highest point of truth with protected properties. You can add new ones, but can't remove already existing**
4. **Preprocessing Step**:
   - If **Context About AngularJS File** is not presented in input. Automatically analyze the AngularJS file to create a **Context About AngularJS File**:
     - Purpose: What the file does.
     - Dependencies: Services, modules, or shared state.
     - Expected Output: Dynamically inferred based on identified components.
     - Special Logic: Any advanced AngularJS features or custom behavior.
5. **Refactoring Step Workflow**
  - Step 1: Analyze AngularJS File Context
    Extract and summarize the purpose, dependencies, and expected output of the AngularJS file.
    Identify key AngularJS components:
    Modules, controllers, services, directives, templates, and routing logic.
    Infer any special logic that requires custom handling (e.g., $watch, $emit).

  - Step 2: Select and Apply Prompt Templates
    Map each identified AngularJS component to the appropriate Prompt Template.
    For example:
      Use the Controller Conversion Prompt Template for controllers.
      Use the Service Conversion Prompt Template for services.
    Apply the selected templates to refactor the AngularJS component into React code. 
    Follow Instructions from selected template. Prioritize important ones.

  - Step 3: Integrate with React Files Summary
    Check the React Files Summary for reusable components, services, or utilities.
    Avoid duplicating logic by reusing existing files.
    Ensure new components are consistent with the existing application structure.
    Add imports for shared services, utilities, or components (e.g., import { getData } from '../services/DataService';).
    Regenerate elements from React Files Summary if needed based on new context.

  - Step 4: Generate and Optimize React Code
    Create React files for each refactored AngularJS component, organized using best practices for React folder structure.
    src/components/: For React components (e.g., NewComponent.js).
    src/services/: For reusable services (e.g., DataService.js).
    src/utils/: For helper functions or utilities.

    Optimize the React code for:
      Modularity: Break large components into smaller, reusable subcomponents.
      Performance: Minimize unnecessary re-renders using React.memo or useCallback where applicable.
      Maintainability: Use clear naming conventions and consistent state management.

  - Step 5: Combine and Integrate Outputs
    Update the React Files Summary to include the newly generated React files.
    Ensure the new files integrate seamlessly with the existing React application.
    Provide a final summary of all React files (new and existing), including file paths. File path are important.

6. **Output Format**:
   - **File Analysis**: Provide a breakdown of the AngularJS file, listing identified components.
   - **Generated React Files**: Output the React code for the newly created files, organized using best practices.
   - **Updated React Files Summary**: Return an updated summary that combines the previously generated files and the newly created ones, including their file paths. File path are important.

---

## Example Input

### AngularJS File:
```javascript
angular.module('myApp')
  .service('DataService', function() {
    this.getData = function() {
      return ["Item1", "Item2", "Item3"];
    };
  })
  .controller('NewController', function($scope, DataService) {
    $scope.data = DataService.getData();
  });
```

### Previously Generated React Files Summary:
```markdown
### React Files Summary:
1. **App.js** (Path: `/src/App.js`):
   - Root component.
   - Uses `BrowserRouter` for routing.
   - Renders `MainComponent` and `CustomComponent`.
2. **MainComponent.js** (Path: `/src/components/MainComponent.js`):
   - Manages `title` and `items` state using `useState`.
   - Displays a `<h1>` title and a list of items.
3. **CustomComponent.js** (Path: `/src/components/CustomComponent.js`):
   - A reusable component that accepts an `item` prop and renders it inside a `<div>`.
```

---

## Example Preprocessing (Automatically Generated Context)
```markdown
### Context About AngularJS File (Generated Automatically):
- **Purpose**: This file defines a service (`DataService`) for fetching data and a controller (`NewController`) for displaying the data in a view.
- **Dependencies**:
  - Relies on the `DataService` for fetching data.
  - Uses `$scope` to bind data in the controller.
- **Expected Output**:
  - Convert the `DataService` into a reusable JavaScript module.
  - Refactor the `NewController` into a React functional component using `useState` and `useEffect`.
- **Special Logic**: None.
```

---

## Example Output

### File Analysis:
1. **Service**:
   - Name: `DataService`.
   - Provides data fetching functionality (`getData`).
2. **Controller**:
   - Name: `NewController`.
   - Uses `DataService` to fetch data and bind it to `$scope.data`.

---

### Generated React Files:
#### **DataService.js** (Path: `/src/services/DataService.js`)
```javascript
export const getData = () => {
  return ["Item1", "Item2", "Item3"];
};
```

#### **NewComponent.js** (Path: `/src/components/NewComponent.js`)
```javascript
import React, { useState, useEffect } from 'react';
import { getData } from '../services/DataService';

const NewComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewComponent;
```

---

### Updated React Files Summary:
```markdown
### React Files Summary:
1. **App.js** (Path: `/src/App.js`):
   - Root component.
   - Uses `BrowserRouter` for routing.
   - Renders `MainComponent`, `CustomComponent`, and `NewComponent`.
2. **MainComponent.js** (Path: `/src/components/MainComponent.js`):
   - Manages `title` and `items` state using `useState`.
   - Displays a `<h1>` title and a list of items.
3. **CustomComponent.js** (Path: `/src/components/CustomComponent.js`):
   - A reusable component that accepts an `item` prop and renders it inside a `<div>`.
4. **DataService.js** (Path: `/src/services/DataService.js`):
   - Provides data fetching functionality (`getData`) and is imported by `NewComponent`.
5. **NewComponent.js** (Path: `/src/components/NewComponent.js`):
   - Fetches data using `DataService` and renders it as a list.
```

---

## Prompt Templates
### Directives Conversion Prompt Template

#### Objective:
Convert AngularJS directives (built-in or custom) into React components or reusable logic.

#### Instructions:
1. Identify AngularJS directives in the code (`ng-repeat`, `ng-if`, `ng-class`, etc.).
2. Replace built-in directives with React equivalents:
   - Use JSX for rendering logic.
   - Use React state and conditional rendering for `ng-if`.
   - Use dynamic `className` for `ng-class`.
3. Refactor custom directives into React components or hooks.

#### Constraints:
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
### Module Conversion Prompt Template

#### Objective:
Convert AngularJS modules (`angular.module`) into React's component-based architecture.

#### Instructions:
1. Replace the module declaration (`angular.module`) with React's modular file-based structure.
2. Define dependencies as direct imports in the relevant React files.
3. Organize module components (e.g., controllers, directives, services) into separate files or folders.

#### Constraints:
- Use ES6+ syntax.
- Use standard React conventions (e.g., `import/export`).
- Maintain the separation of concerns (e.g., logic in hooks or services, UI in components).

**Example Input:**
AngularJS Code:
```javascript
angular.module('myApp', ['ngRoute', 'ngAnimate']);
```

**Expected React Output:**
React Code:
```javascript
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => (
  <BrowserRouter>
    {/* Application components */}
  </BrowserRouter>
);

export default App;
```
### Controller Conversion Prompt Template

#### Objective:
Refactor AngularJS controllers into React functional components using state management.

#### Instructions:
1. Replace `$scope` with React state (`useState` or `useReducer`).
2. Move controller logic into the React component or custom hooks.
3. Pass data and functions as props to child components.

#### Constraints:
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
### Service Conversion Prompt Template

#### Objective:
Refactor AngularJS services into React equivalents such as custom hooks or JavaScript modules.

#### Instructions:
1. Identify the service's functionality (e.g., shared logic, API calls).
2. Convert the service into:
   - A custom React hook (for logic tied to React components).
   - A JavaScript module (for reusable logic across files).
3. Use `fetch`, `axios`, or similar libraries for HTTP requests.

#### Constraints:
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
### Directives in View Conversion Prompt Template

#### Objective:
Refactor AngularJS directives used in templates (`ng-if`, `ng-class`, `ng-repeat`) into React equivalents.

#### Instructions:
1. Replace `ng-if` with conditional rendering (`condition && <Element />`).
2. Replace `ng-class` with dynamic `className` logic.
3. Replace `ng-repeat` with React's `map` function for iterating over arrays.

#### Constraints:
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
### Template Conversion Prompt Template

#### Objective:
Convert AngularJS templates into React components using JSX syntax.

#### Instructions:
1. Identify AngularJS expressions (`{{variable}}`) and replace them with JSX `{variable}`.
2. Replace AngularJS directives in templates (e.g., `ng-repeat`, `ng-if`) with React equivalents.
3. Use props to pass data dynamically into React components.

#### Constraints:
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
### Routing Conversion Prompt Template

#### Objective:
Convert AngularJS routing logic (`ngRoute` or `ui-router`) into React Router equivalents.

#### Instructions:
1. Identify AngularJS routing configuration in the code.
2. Replace `$routeProvider` or `$stateProvider` with React Router's `<Routes>` and `<Route>` components.
3. If dynamic URL parameters are used (e.g., `:id`), use React Router's `useParams` hook to access them in components.
4. If nested views are present, use nested routing in React Router.

#### Constraints:
- Use React Router (v5 or v6).
- Maintain a clean folder structure, organizing React components by routes.

**Example Input:**
AngularJS Code:
```javascript
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/users/:userId', {
      templateUrl: 'user.html',
      controller: 'UserController'
    });
});
```

**Expected React Output:**
React Code:
```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const Home = () => <div>Home Page</div>;

const User = () => {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users/:userId" element={<User />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```
### Event Handling Conversion Prompt Template

#### Objective:
Convert AngularJS event handling (`ng-click`, `ng-change`, `$emit`, `$broadcast`) into React equivalents.

#### Instructions:
1. Replace DOM event directives like `ng-click` and `ng-change` with React's `onClick`, `onChange`, etc.
2. Replace custom events (`$emit` and `$broadcast`) with React's `props` or `context` for parent-child or global communication.
3. Ensure event handlers in React are defined as functions inside the component or passed as props from a parent.

#### Constraints:
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
### Scope Communication Conversion Prompt Template

#### Objective:
Convert AngularJS `$scope` communication (parent-child and sibling communication) into React's props, context, or state.

#### Instructions:
1. Identify `$scope` variables and methods shared between components.
2. Refactor `$scope` bindings to React `props` for parent-child communication.
3. Use React Context or a state management library (e.g., Redux) for global or sibling communication.
4. **Impornant** Don't forget to wrap components which use context to context provider.

#### Constraints:
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
### Built-In Services Conversion Prompt Template

#### Objective:
Convert AngularJS built-in services like `$http`, `$timeout`, `$interval`, and `$q` into React equivalents.

#### Instructions:
1. Replace `$http` with `fetch` or libraries like `axios` for HTTP requests.
2. Replace `$timeout` and `$interval` with `setTimeout` and `setInterval` in JavaScript.
3. Replace `$q` with native Promises or `async/await`.

#### Constraints:
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
### Custom Filters Conversion Prompt Template

#### Objective:
Convert AngularJS custom filters into pure JavaScript functions or React helper utilities.

#### Instructions:
1. Identify the AngularJS filter logic.
2. Refactor the filter into a reusable JavaScript function.
3. Use the function directly in React components or as a utility.

#### Constraints:
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
### Animations Conversion Prompt Template

#### Objective:
Convert AngularJS animations (`ngAnimate`) into React animations using CSS or JavaScript libraries (e.g., `react-spring`, `framer-motion`).

#### Instructions:
1. Identify animation logic tied to AngularJS directives (`ng-show`, `ng-hide`, `ng-class`).
2. Replace them with CSS transitions or React animation libraries.
3. Use React state to trigger animations.

#### Constraints:
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

---
