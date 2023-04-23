# Storybooks
App to create public and private stories

StoryBooks is a platform that lets you share your stories and experiences with others. With a simple login using your Google account, you can create stories and choose to make them public or private, depending on your preferences. Public stories can be viewed by other users on the site, allowing you to connect with like-minded individuals and explore different perspectives. Private stories can be saved for your personal reference or shared with other individuals for a more public audience. You can easily manage your stories and change their status at any time. Additionally, StoryBooks provides a public story board where you can browse other users' stories and gain inspiration for your own writing. Join the StoryBooks community today and start sharing your story with the world.

You can check it out, sign up with your google account and share your stories!<br>
https://storybooks-api.cyclic.app

![Screenshot 2022-12-21 194308](https://user-images.githubusercontent.com/63148481/209016844-4a990fd0-b240-4585-ad5c-fd9f92365baa.jpg)

## How it was made

I used MongoDB as the database, Express as the backend framework, Handlebars as view for the front end, materialize for styling components, and Node.js as the runtime environment with Express.js for RESTful API creation. Additionally, I utilized MongoDB with Mongoose for database modeling, Passport GoogleOAuth 2.0 for credential authentication. It was very challenging to learn and bring all these technologies together but the result is a fully functional real world application.

## Lessons Learned

During this project, I learned alot about full stack applications, starting with credential authentication with Google OAuth API which is a practical way for the user to start using the application without having too much fuss about registering. Also learned how to efficiently handle the routing and how to protect routes based on authentication, creating a well structured admin dashboard with the user posts for management as well as public stories section where all stories are visible to all the users, allowing further exploration of other users published stories. Further improved MongoDB management and modeling with Mongoose, also storing session. Learned how to use Handlebars and Materialize for an efficient dynamic SSR Application. 

After this project I feel I can tackle any project, utilizing MVC patterns for scalability and mantainability.
