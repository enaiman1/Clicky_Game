1. create files and nessecary components

2. index.html (in public folder)
    1. add css framework
    2. add google fonts

3. organize src folder
    1. delete unnecessary files
    2. double check App.js is properly connected to index.js 
    3. create a json to hold game piece info/images 
    4. create components folder

4. organize components folder
    
    1. create Header folder (for styling of the header of the page)
        * create Header.css
            * use bootstrap to create style
        * create Header.js
            * create prop
                * readers style to the dom
        * create index.js
            * exports header component

    2. create ImageCard folder (used for the onlick events for the game piece)
        * create ImageCard.css
            * use bootstrap to create style
        * create ImageCard.js
             * readers the dom when there is a click event
        * create index.js
            * exports the imageCard component

    3. create Scoreboard folder (used to keep track of score)
        * create Scoreboard.css
            * use bootstrap to create style
        * create ScoreBoard.js
            * render the dom to update the score board when user gets it right or wrong
        * create index.js
            * exports the Scoreboard component

    4. create Wrapper folder (used for stling the body of the page)
        * create Wrapper.css
            * use bootstrap to create style
        * create Wrapper.js
            * readers style to the dom
        * create index.js
            * exports the Wrapper component


4. add data to visual.json
    1. create an array 
        * make 12 objects (each object represents a game piece)
            * create an id 
            * create imageURL 

5. create code for App. js
    1. import all neccessary files and components
        * ImageCard
        * Header
        * Wrapper
        * ScoreBoard
        * Visuals
        * css

    2. A class app extends component
        1. create state object
              * images
              * clicked image array
              * starting score of 0
        2.  A function to shuffle cards
              * Math.random to allow to the cards to shuffle after a user clicks it 
        3. A function to handle click events
            * if else statement 
                * if (wrong) reset score to 0 and and resuffle card
                * else (right) add 1 to score and resuffle cards
                    * once you reach to 12 correct (because there are only 12 card) 
                        * alert a win
                        * reset score to 0
                        * resuffle card
    5. render to the dom
        1. <Header>
        2. <ScoreBoard>
            * include state.score
        3. <Wrapper>
            * include state.image.map(for filtering)
            * image card

    
    




        
    