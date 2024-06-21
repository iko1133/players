import { PlayerRole, isBack, isWinger } from "../enums/roles";

export const getRoleColor = (role: PlayerRole) => {
  if (role === PlayerRole.Goalkeeper) return "gray";
  if (isBack(role)) return "blue";
  if (role === PlayerRole.Midfielder) return "green";
  if (isWinger(role)) return "purple";
  if (role === PlayerRole.CenterForward) return "red";
};
