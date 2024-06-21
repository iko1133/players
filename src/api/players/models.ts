import { PlayerRole } from "../../enums/roles";

export interface Player {
  id: number;
  name: string;
  role: PlayerRole;
}
