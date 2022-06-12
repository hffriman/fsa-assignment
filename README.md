# My Solution for Full-Stack Academy's Programming Assignment

<b>LINK TO MY SOLUTION:</b> https://heroic-semolina-10fdb4.netlify.app/

## Introduction
This test is a part of technical assessment, which is required to complete in order to be selected in Integrify's Full-Stack Academy.
The objective of the task was to:
1. Fetch data of fictional users from the API
2. Render some of the user data inside visual card elements
3. Add a button functionality that shows more data of only one selected user
  
This project was made with React.js and visualized by React-Bootstrap.


## Starting and Finishing Time
- Starting time: May 10th at 1 pm
- Finishing time: May 12th at 10 pm
- I managed to complete this task in 57 hours, which is under the given deadline (72 hours).


## Screenshots

![Screenshot 1](/src/screenshots/screenshot-1.png)
![Screenshot 2](/src/screenshots/screenshot-2.png)



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
