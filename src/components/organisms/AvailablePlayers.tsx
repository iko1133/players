import { useEffect, useState } from "react";
import PlayerComponent from "../atoms/Player";
import { Player } from "../../api/players/models";
import { getPlayers } from "../../api/players/methods";
import { addPlayer } from "../../store/actions/players";
import { useAppDispatch } from "../../hooks/appHooks";

const AvailablePlayers = () => {
  const dispatch = useAppDispatch();

  const [players, setPlayers] = useState<Player[] | null | undefined>([]);
  const [searchedPlayers, setSearchedPlayers] = useState<
    Player[] | null | undefined
  >([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();

    const filteredPlayers = players?.filter(
      (player) =>
        player.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        player.role.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedPlayers(filteredPlayers);
  };

  useEffect(() => {
    setSearchedPlayers(players);
  }, [players]);

  useEffect(() => {
    getPlayers(setPlayers);
  }, []);

  const onPlayerSelect = (player: Player) => {
    const result = dispatch(addPlayer(player));
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Available Players</div>

      <input
        type="text"
        placeholder="Search for a player with their name or position"
        style={styles.input}
        onChange={handleSearch}
      />

      <div style={styles.playersContainer}>
        {!players && <div>Loading...</div>}

        {searchedPlayers?.map((player) => (
          <PlayerComponent
            key={player.id}
            player={player}
            onPlayerPress={onPlayerSelect}
            style={styles.player}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    height: "100vh",
    overflow: "scroll",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 24,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 8,
    border: "1px solid black",
    paddingLeft: 8,
    marginBottom: 24,
  },
  playersContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap" as "wrap",
  },
  player: {
    width: "50%",
  },
};

export default AvailablePlayers;
