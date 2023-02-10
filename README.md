# financial-planner

## Acceptance Criteria

WHEN I visit the site for the first time
 > THEN I am presented with [_______, the homepage], which includes [________]; [navigation links for the homepage and the dashboard; and the option to log in]

WHEN I click on the [_______,homepage option]
 > THEN I am taken to the homepage

WHEN I click on any other links in the navigation
 > THEN I am prompted to either sign up or sign in

WHEN I choose to [_______,sign up]
 > THEN I am prompted to create a username and password

WHEN I click on the [______,sign-up button]
 > THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
 > THEN I am prompted to enter my username and password

WHEN I am signed in to the site
 > THEN I see [_______, navigation links for the homepage, the dashboard, and the option to log out]

WHEN I click on the homepage option in the navigation
 > THEN I am taken to the homepage and presented with [________ ]
 
WHEN I click on [______]
 > THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter [______] and click on the submit button while signed in
 > THEN the [_____] is saved and the [_____] is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the [______, dashboard] option in the [______, navigation]
 > THEN I am taken to the [______, dashboard] and presented with [_______,the option] to [______ ]

WHEN I click on the button to [________, add a new [_______]
 > THEN I am prompted to enter [_______, contents for my [_______ ]

WHEN I click on the button to create a new [_______ ]
 > THEN the [_______ ] title and contents of [______, my post are saved and I am taken back to [_______, an updated dashboard with my new [______ ,post

WHEN I click on one of my [________, existing posts in the dashboard
 > THEN I am able to delete or update my [_________ ,post and taken back to an updated dashboard

WHEN I click on the [________ ,logout option in the navigation
 > THEN I am [_________ ,signed out of the site

WHEN I am idle on the site for more than a [_________, set time
 > THEN I am able to [______ ,view comments but I am prompted to log in again before I can add, update, or delete comments




## User Stories

* As a user, I want to [__________, 

* As a user, I want to be able to [__________, create an account.

* As a registered user, I want to [_______ ,.



### Acceptance Criteria

* It's done when the `/` homepage route renders a list of all projects from the database.

* It's done when the `/project/:id` route renders an individual project's details based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/profile` route renders the logged-in user's projects and a form to create a new project.

* It's done when only a logged in user can visit the `/profile` route.

* It's done when a logged in user is redirected to `/profile` when they try to visit `/login` again.

* It's done when a user on the profile page can use the form to create a new project in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.
