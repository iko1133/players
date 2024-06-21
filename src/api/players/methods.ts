import hosts from "../hosts";
import { Player } from "./models";
import paths from "./paths";

export const getPlayers = async (setter: (data: Player[] | null) => void) => {
  try {
    const response = await fetch(hosts.baseUrl + paths.getPlayers);
    const data = (await response.json()) as Player[] | null;

    setter && setter(data);

    return data;
  } catch (error) {
    alert("Error fetching players");
  }
};
