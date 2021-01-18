# Everia
# Everia is a turn based RTS (Real Time Strategy) browser based game
# It uses JSON as a light-weight way to store data


---------------
How to install
---------------
Prerequisites:
- Web server (can be local, I used IIS 10 and tested also on IIS 7)
- PHP installed on web server (tested on PHP Version 7.3.2)

Installation:
- Put all files in the wwwroot file or equivalent 
- Create a folder and get images for for the images which make up the grid (can't upload the images here) 
  images\village.png (player and AI village image)
  images\forest1.png (forest 1 image, use multiple if wanted)
  images\texture.png (plain grid image green if grass, beige if sand)
  images\lake.png (lake 1 image, use multiple if wanted)
  
- Go to localhost/main.php and play the game


---------------
Future developments
---------------
- Improve .css development (developed for 1080px)
- Tutorial on how to play
- AI types will have a chance to train different types of units based on their agression type
- Attacks will arrive in the turns calculated and specified not just instant as current game state shows
- Develop better battle reports
- Convert JSON to csv on the fly each turn
- Ability to take over cities and lose your cities
- New game/reset game option (currently have to manually reset files)
- Calverly capacity to take up more than that of swords/axes/archers
- Generate spawn point at random
- Generate new cities at random


---------------
Recommendations
---------------
- Convert data to readable .csv format: open the .json file and copy the data pasting it to: https://json-csv.com/ 
to display current status of data


---------------
Contact me
---------------
- stuartvinton@gmail.com
