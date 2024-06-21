export const enum PlayerRole {
  Goalkeeper = "Goalkeeper",
  CenterBack = "Center-back",
  LeftBack = "Left-back",
  RightBack = "Right-back",
  Midfielder = "Midfielder",
  WingerRight = "Winger-right",
  WingerLeft = "Winger-left",
  CenterForward = "Center-forward",
}

export const isWinger = (role: PlayerRole) =>
  role === PlayerRole.WingerLeft || role === PlayerRole.WingerRight;

export const isBack = (role: PlayerRole) =>
  role === PlayerRole.LeftBack ||
  role === PlayerRole.RightBack ||
  role === PlayerRole.CenterBack;
