# friend-finder

This "Friend Finder" application is a full-stack site which takes in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

To see the app in action, [Friend Finder](https://young-wave-20877.herokuapp.com/)

## Getting Started

This app requires the express and body-parser npm packages :

   * [express](https://www.npmjs.com/package/express)

   * [body-parser](https://www.npmjs.com/package/body-parser)


### Deployment
* Clone repo
* Run npm install
* At command prompt run 'node server.js'

## Overview

Most of this app was built using the Hot Restaurant tutorial. It provided the necessary guidance to get the seperate files talking to eachother.  And once I abandoned the file structure recommended by the Homework Instructions and a fresh repo -- I was able to get this uplaoded to Heroku.

The part I struggled with on this project was the evaulation/comparison of the data. My TA, Buzz, gave me guidance on how to gather the survey results in an array.  And I found a tutorial on a [Friend Finder](https://www.youtube.com/watch?v=kWu9stxD6m0)app which helped me finish the framework of the comparision and showing the results. But, I know the process of comaprson is not correct. The tutorial adds up the score for each survey to one sum and then compares that sum to other individuals.  This isn't the bext evaluator because it doesn't distinquish between each question response.  I understand that each question should be evaulated seprately -- but can't figure out how this can be achieved. The Homework describes it as the following:

With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

I spent a lot of time looking for an example and console.logging the different elements -- but did not achieve success.

## Built With

* [Html]
* [JavaScript]
* [jQuery]

## Authors

* **Jennifer Ginelli** - *Initial work* - [jcnimble](https://jcnimble.github.io/)

## Acknowledgments

   * Hot Restaurant Tutorial [Watch the Video!](https://www.youtube.com/watch?v=G7RvQMW2DOg&feature=youtu.be&list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr)
   * Star Wars Tutorial [Watch the Video!](https://www.youtube.com/watch?v=ygk-kNstqK0&list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr&index=1)
   * Friend Finder Tutorial [Watch the Video!](https://www.youtube.com/watch?v=kWu9stxD6m0)
   * Bryan esteemed Professor
   * Buzz and Aaron dedicated TAs
     
