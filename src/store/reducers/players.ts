import { Player } from "../../api/players/models";
import { ADD_PLAYER, CLEAR_PLAYERS, REMOVE_PLAYER } from "../actionTypes";
import { loadState } from "../localStorage";

const selectedPlayers = loadState();

export interface PlayersState {
  selectedPlayers: Player[];
}

const initialState = {
  selectedPlayers: selectedPlayers || [],
};

const players = (
  state = initialState,
  action: { type: string; payload: Player }
) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        selectedPlayers: [...state.selectedPlayers, action.payload],
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        selectedPlayers: state.selectedPlayers.filter(
          (player) => player.id !== action.payload.id
        ),
      };
    case CLEAR_PLAYERS:
      return {
        ...state,
        selectedPlayers: [],
      };
    default:
      return state;
  }
};

export default players;
