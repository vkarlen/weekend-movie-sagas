# The Movie Saga

## Description

_Duration: 2 Day Sprint_

An app for browsing a movie database and adding any movie you wish.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![Movie List](/screenshot.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

Here is how you get this app running on your own machine:

1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Scroll through the movies on the home page.
2. For more details on a certain movie, click on its image. Once you are done reading about it, you can click the back button to be brought back to the home page.
3. To add a movie to the database, click the navigation at the top of the page. Fill out all information in the fields provided and then click 'Save'. If you change your mind, you can click 'Cancel' and be brought back to the home page at any time.

## Built With

- HTML/CSS
- Javascript
- Material UI
- Axios
- React
- Redux
- SQL

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [vada.karlen@gmail.com](vada.karlen@gmail.com)
