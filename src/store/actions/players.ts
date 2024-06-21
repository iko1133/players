import store from "..";
import { Player } from "../../api/players/models";
import { checkForLimits } from "../../config/rules";
import { ADD_PLAYER, CLEAR_PLAYERS, REMOVE_PLAYER } from "../actionTypes";

export const addPlayer = (player: Player) => {
  return (dispatch: any) => {
    const team = store.getState().players.selectedPlayers;

    const playerIndex = team?.findIndex(
      (teamPlayer) => teamPlayer.id === player.id
    );

    if (playerIndex !== -1) {
      alert("Player already in team");
      return;
    }

    const newTeam = [...team, player];

    if (!checkForLimits(newTeam)) {
      alert("Reached max limits");
      return;
    }

    dispatch({
      type: ADD_PLAYER,
      payload: player,
    });
  };
};

export const removePlayer = (player: Player) => {
  return (dispatch: any) => {
    dispatch({
      type: REMOVE_PLAYER,
      payload: player,
    });
  };
};

export const clearPlayers = () => {
  return (dispatch: any) => {
    dispatch({
      type: CLEAR_PLAYERS,
      payload: null,
    });
  };
};
