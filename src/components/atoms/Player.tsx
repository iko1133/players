import React from "react";
import { Player as PlayerModel } from "../../api/players/models";
import { getRoleColor } from "../../styles/roleColors";
import { useHover } from "../../hooks/useHover";

interface PlayerProps {
  player: PlayerModel;
  onPlayerPress: (player: PlayerModel) => void;
  style?: React.CSSProperties;
}

const PlayerComponent: React.FC<PlayerProps> = ({
  player,
  onPlayerPress,
  style,
}) => {
  const hoverStyle = useHover({
    backgroundColor: "lightgray",
  });

  return (
    <div
      style={{ ...styles.container, ...style }}
      onClick={() => onPlayerPress(player)}
      //   onMouseEnter={hoverStyle.onMouseEnter}
      //   onMouseLeave={hoverStyle.onMouseLeave}
    >
      <div
        style={{
          ...styles.square,
          backgroundColor: getRoleColor(player.role),
        }}
      />
      <div style={styles.name}>{player.name}</div>
      <div
        style={{
          ...styles.role,
          color: getRoleColor(player.role),
        }}
      >
        {player.role}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  square: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  name: {
    color: "black",
    fontSize: 16,
    fontWeight: "bolder",
  },
  role: {
    fontSize: 16,
    opacity: 0.7,
  },
};

export default PlayerComponent;
