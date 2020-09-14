## Hyperglance SeniorReact Developer - Technical Assessment

# 1. Implement an Algorithm (Solution)

    function countLessThan(numbers, threshold) {
      return numbers.filter(number => number < threshold).length;
    }

# 2. Build an Address Book Web App (Solution)

Pre-requisite

    node, npm, yarn

Instructions

    git clone https://github.com/jagcompacion/address-book.git
    cd address-book
    yarn install
    yarn start

List any libs/frameworks

    bootstrap - for good design
    react-bootstrap - can be use as a component for react
    axios - make http request for api
    redux - for state management
    react-redux - react can use redux functions
    redux-thunk - middleware for redux
    shortid - create random id when adding contact
    react-router-dom - routing

# Final Questions (Answers)

1. How long did you spend on this assessment? 1hour
2. What else would you add to your solution if you had more time? styled-components, typescript, linter, react-testing-library (much better compared to enzyme), prettier, formik, react-toasts for handling success/error message.
3. List a few of your preferred JS/React frameworks (also let us know when you would choose to use/not
   use them)? reactjs, angular, vue. preferred react because of the community, better community means solving problems fast.
4. When a React component needs to make an asynchronous call (such as to an API) what is your
   preferred approach to achieve this? async/await.
   Have you had any experience with frontend E2E testing frameworks like cypress.io? (If so please tell us
   about your experience). yes, we had e2e on our project before. When you create cypress command and run it, it will show it to you on the browser.
5. What do you think is the most interesting trend in React development or frontend development in
   general? react17. boring updates no new features. just improvising the performance.
