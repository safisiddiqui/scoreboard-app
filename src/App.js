import React from "react";
import Player from "./Player";
import "./App.css";
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      { playerName: "Safi", score: 0, id: 1 },
      { playerName: "Ayesha", score: 0, id: 2 },
      { playerName: "Heian", score: 0, id: 3 },
      { playerName: "Bilal", score: 0, id: 4 },
    ],
  };

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: (prevState.players[index].score += delta),
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleAddPlayer = (playerName) => {
    this.setState({
      players: [
        ...this.state.players,

        { playerName: playerName, score: 0, id: (this.prevPlayerId += 1) },
      ],
    });
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header title="Scoreboard"
        players={this.state.players} />
        {/* Players list */}
        {this.state.players.map((players, index) => (
          <Player
            key={players.id.toString()}
            playerName={players.playerName}
            removePlayer={this.handleRemovePlayer}
            id={players.id}
            score={players.score}
            changeScore={this.handleScoreChange}
            index={index}
            isHighScore={highScore === players.score}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
