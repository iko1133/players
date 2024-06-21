import { Player } from "../api/players/models";
import { storageKeys } from "../config/constants";
import { RootState } from "../store";

export const loadState: () => Player[] | undefined = () => {
  try {
    const serializedState = localStorage.getItem(storageKeys.reduxStore);
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.players.selectedPlayers);
    localStorage.setItem(storageKeys.reduxStore, serializedState);
  } catch (err) {
    console.log(err);
  }
};
