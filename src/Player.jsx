import React, { PureComponent } from "react";
import Counter from "./Counter";

import Icon from "./Icon";

import "./App.css";

class Player extends PureComponent {
  render() {
    const {removePlayer, id, score, changeScore, index, playerName, isHighScore} = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button
            onClick={() => removePlayer(id)}
            className="remove-player"
          >
            ✖  </button>
          <Icon isHighScore={isHighScore}/>
          {playerName}
        </span>

        <Counter
          score={score}
          changeScore={changeScore}
          index={index}
        />
      </div>
    );
  }
}

export default Player;
