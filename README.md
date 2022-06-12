# My Solution for Full-Stack Academy's Programming Assignment

TRY THE WEBSITE

## Introduction
This test is a part of technical assessment, which is required to complete in order to be selected in Integrify's Full-Stack Academy.
The objective of the task was to:
1. Fetch data of fictional users from the API
2. Render some of the user data inside visual card elements
3. Add a button functionality that shows more data of only one selected user
  
This project was made with React.js and visualized by React-Bootstrap.


## Screenshots

![Screenshot 1](/src/screenshots/screenshot-1.png)
![Screenshot 2](/src/screenshots/screenshot-2.png)

## Starting and Finishing Time
- Starting time: May 10th at 1 pm
- Finishing time: May 12th at 10 pm
- I managed to complete this task in 57 hours, which is under the given deadline (72 hours).


## Explaining My Solution

1. App.js: 
    - Uses Router to render either Homepage.js or ShowUOneser.js
    - Homepage.js is rendered by default
    - ShowOneUser.js is defined to receive a parameter (id) in its url
2. Homepage.js: 
    - Fetches the user data from the API (with UseEffect)
    - Maps the data and renders them inside UserCard component (created by me)
      - 1 to 3 UserCards are shown in each row (depending on the screen size)
3. UserCard.js:
    - Renders the React-Bootstraps Card component that contains:
      - User data from the Homepage.js (as props data)
      - The UserButton component (created by me)
4. UserButton.js: 
    - Renders React-Bootstraps Button component
    - Has a link to the single user's individual page
      - Gets the user's id from Homepage.js and sends it to ShowOneUser.js  
5. ShowOneUser.js: 
    - Gets the single user's individual id from the UserButton.js (with UseParams)
    - Fetches the single user's data based on the their id value (with UseEffect)
    - Renders the single user's data inside one UserProfile component (created by me)
6. UserProfile.js:
    - Renders React-Bootstrap's Card component that contains:
      - More detailed data of the individual user from ShowOneUser.js (as props data) 
      - React-Bootstrap's Close Button component (with a link to Homepage.js)
7. App.css
     - Contains only a new background color
     - Other style definitions are defined in the classNames of components
     
## Screenshots




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
