# StarWars
In this project I tried to implement, from scratch,  a One-Page web application, using the following stack:
* JavaScript
* ReactJS
* Redux
* RESTful api
* HTML
* SASS

## Description
The web page communicates with the following public Star Wars API:
```
https://swapi.co/
```
It retrives the information regarding all the Star Wars characters, and their home planets.

## Usage
The home page is the first set of characters and their home planet names, arranged in a table. The possible actions are:
* Clicking ```next``` will display the next set of characters
* Clicking ```previous``` will display the previous set of characters
* Clicking on a character's name will display a modal with all the characters attributes (like hair and eyes color, heigth, etc.)
* Clicking on ```Home Planet``` will display a page with the current planet's information: name of the planet, terrain and population.
* From the planets information page you can either go back to the characters table, or browse other sets of planets by clicking ```next``` or ```previous```

*Note that the displayed planets are depended on the current set of characters loaded.* 
