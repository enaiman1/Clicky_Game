import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";
import visual from "./visual.js";
import './App.css';

// creating state object
class App extends Component {
    state = {
        visual,
        clickedImages: [],
        score: 0
    };


    // A function to shuffle cards
    shuffleCards = array => {
        array.sort((a, b) => 0.5 - Math.random());
        return array;
    }

    //A function to handle click events
    imageClick = event => {
        console.log(event.target);
        const currentImage = event.target.alt;
        const alreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

        // if/else statment
        // if (wrong) reset score to 0 and and resuffle card
        if (alreadyClicked) {
            alert("You lost!");
            this.setState({
                visual: this.shuffleCards(visual),
                clickedImages: [],
                score: 0
            });
            // if right add 1 to score and resuffle cards
        } else {
            this.setState(
                {
                    visual: this.shuffleCards(visual),
                    clickedImages: this.state.clickedImages.concat(currentImage),
                    score: this.state.score + 1
                },
                // A function when you win the game
                // once you reach to 12 correct (because there are only 12 card) 
                () => {
                    if (this.state.score === 12) {
                        alert("You win !");
                        this.setState({
                            visual: this.shuffleCards(visual),
                            clickedImages: [],
                            score: 0
                        });
                    }
                }
            );
        }

    };

    // renders ui to dom
    render() {
        return (
            <div>
                <Header
                    title="Patterns"
                    desc="A React memory game."
                    rules="Click on an image to earn points,"
                    rules2="But dont click on the same image twice, or you will lose"
                />

                <ScoreBoard score={this.state.score}
                />

                <Wrapper>
                    {/*maps over this.state.image and renders an ImageCard component for each image object */}
                    {this.state.visual.map(visual => (
                        <ImageCard
                            imageClick={this.imageClick}
                            id={visual.id}
                            key={visual.id}
                            image={visual.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}





export default App;
