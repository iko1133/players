import { useEffect } from "react";
import { Player } from "../../api/players/models";
import { PlayerRole, isBack, isWinger } from "../../enums/roles";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { clearPlayers, removePlayer } from "../../store/actions/players";
import PlayerComponent from "../atoms/Player";
import Limits from "../molecules/Limits";
import { checkForValidTeam } from "../../config/rules";

const MyTeam = ({}: {}) => {
  const dispatch = useAppDispatch();

  const teamPlayers = useAppSelector((state) => state.players.selectedPlayers);

  const onRemovePlayer = (player: Player) => {
    dispatch(removePlayer(player));
  };

  const onClearPress = () => {
    dispatch(clearPlayers());
  };

  const renderRow = (checkerFun: (role: PlayerRole) => boolean) => {
    return (
      <div style={styles.row}>
        {teamPlayers
          ?.filter((player) => checkerFun(player.role))
          .map((player) => (
            <PlayerComponent
              key={player.id}
              player={player}
              onPlayerPress={onRemovePlayer}
              style={styles.player}
            />
          ))}
      </div>
    );
  };

  useEffect(() => {
    if (checkForValidTeam(teamPlayers)) {
      setTimeout(() => alert("Team is full and valid!"), 500);
    }
  }, [teamPlayers]);

  return (
    <div style={styles.container}>
      <Limits />

      <div style={styles.title}>Team</div>

      <button
        title="Clear Team"
        onClick={onClearPress}
        style={styles.clearButton}
      >
        Clear Team
      </button>

      <div style={styles.playersContainer}>
        {renderRow((role) => role === PlayerRole.CenterForward)}
        {renderRow(isWinger)}
        {renderRow((role) => role === PlayerRole.Midfielder)}
        {renderRow(isBack)}
        {renderRow((role) => role === PlayerRole.Goalkeeper)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    height: "100vh",
    display: "flex",
    flexDirection: "column" as "column",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 40,
    color: "black",
    fontWeight: "bold",
  },
  clearButton: {
    display: "flex",
    position: "absolute" as "absolute",
    top: 18,
    right: "51%",
  },
  playersContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    flex: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  player: { margin: 8, maxWidth: "20%", flex: 1 },
};

export default MyTeam;
