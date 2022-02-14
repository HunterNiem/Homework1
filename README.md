# FriendsList API (NodeJS)

## Pre-requisites
  * [Node JS](https://nodejs.org)
  * Install express and requests:

    ```bash
    npm install express --save
    npm install request --save
    ```

## Running the web server

From the command line start the server with the following command:

  ```bash
  node server.js
  ```

Use Postman, CURL, or other program to call the following functions:

  * GET - [http://127.0.0.1:6273/friendslist/getNumFriends](http://127.0.0.1:6273/friendslist/getNumFriends)
  * GET - [http://127.0.0.1:6273/friendslist/getRecentChanges](http://127.0.0.1:6273/friendslist/getRecentChanges)
  * POST - [http://127.0.0.1:6273/friendslist/addFriends](http://127.0.0.1:6273/friendslist/addFriends)
  * POST - [http://127.0.0.1:6273/friendslist/loseFriends](http://127.0.0.1:6273/friendslist/loseFriends)

## Running via Docker

  1. Build the image:

    ```bash
    docker build -t my-friendslist .
    ```

  2. Run the image:

    ```bash
    docker run -p 127.0.0.1:6723:6723 -it my-friendslist
    ```