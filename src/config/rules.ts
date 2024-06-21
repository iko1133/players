import { Player } from "../api/players/models";
import { PlayerRole, isBack, isWinger } from "../enums/roles";

// Amount of players: min - max
// Goalkeeper :  1 - 1
// Defenders : 4 - ?
// Midfielders : 1 - ?
// Wingers : 2 - 3 (at least one right, one left)
// Center-forwards : 1 - ?
// Players : 11

export const checkForGoalKeeper = (
  players: Player[],
  restrictMinimum = true
): boolean => {
  // Count the number of goalkeepers
  const goalkeepers = players.filter(
    (player) => player.role === PlayerRole.Goalkeeper
  );

  if (!restrictMinimum) return goalkeepers.length <= 1;

  return goalkeepers.length === 1;
};

export const checkForDefenders = (players: Player[]): boolean => {
  // Count the number of defenders
  const defenders = players.filter((player) => isBack(player.role));

  return defenders.length >= 4;
};

export const checkForMidfielders = (players: Player[]): boolean => {
  // Count the number of midfielders
  const midfielders = players.filter(
    (player) => player.role === PlayerRole.Midfielder
  );

  return midfielders.length >= 1;
};

export const checkForWingers = (
  players: Player[],
  restrictMinimum = true
): boolean => {
  // Count the number of wingers
  const wingers = players.filter((player) => isWinger(player.role));

  if (!restrictMinimum) return wingers.length <= 3;

  return (
    wingers.length >= 2 &&
    wingers.length <= 3 &&
    !!wingers.find((player) => player.role === PlayerRole.WingerLeft) &&
    !!wingers.find((player) => player.role === PlayerRole.WingerRight)
  );
};

export const checkForCenterForwards = (players: Player[]): boolean => {
  // Count the number of center forwards
  const centerForwards = players.filter(
    (player) => player.role === PlayerRole.CenterForward
  );

  return centerForwards.length >= 1;
};

export const checkForSize = (
  players: Player[],
  restrictMinimum = true
): boolean => (restrictMinimum ? players.length === 11 : players.length <= 11);

export const checkForValidTeam = (players: Player[]): boolean =>
  checkForGoalKeeper(players) &&
  checkForDefenders(players) &&
  checkForMidfielders(players) &&
  checkForWingers(players) &&
  checkForCenterForwards(players) &&
  checkForSize(players);

export const checkForLimits = (players: Player[]): boolean =>
  checkForGoalKeeper(players, false) &&
  checkForWingers(players, false) &&
  checkForSize(players, false);
