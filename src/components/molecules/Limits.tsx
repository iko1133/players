import { Player } from "../../api/players/models";
import {
  checkForCenterForwards,
  checkForDefenders,
  checkForGoalKeeper,
  checkForMidfielders,
  checkForSize,
  checkForWingers,
} from "../../config/rules";
import { useAppSelector } from "../../hooks/appHooks";

const Rule = ({
  texts,
  checkerFunction,
}: {
  texts: string[];
  checkerFunction: (players: Player[]) => boolean;
}) => {
  const team = useAppSelector((state) => state.players.selectedPlayers);

  return (
    <div
      style={{
        ...styles.rule,
        ...(checkerFunction(team) && styles.correctRule),
      }}
    >
      {texts.map((text) => (
        <div style={styles.ruleText} key={text}>
          {text}
        </div>
      ))}
    </div>
  );
};

// An overlay component that will display the limits of the team
const Limits = () => {
  return (
    <div style={styles.container}>
      <Rule
        texts={["One and only one player of a position 'Goalkeeper'"]}
        checkerFunction={checkForGoalKeeper}
      />
      <Rule
        texts={["At least 4 player in a defensive position ('Back positions')"]}
        checkerFunction={checkForDefenders}
      />
      <Rule
        texts={[
          "Minimum of one of each winger positions (one left, one right)",
          "Maximum of 3 total winger positions",
        ]}
        checkerFunction={checkForWingers}
      />
      <Rule
        texts={["At least 1 Midfielder"]}
        checkerFunction={checkForMidfielders}
      />
      <Rule
        texts={["At least 1 Center-forward"]}
        checkerFunction={checkForCenterForwards}
      />
      <Rule texts={["Maximum of 11 players"]} checkerFunction={checkForSize} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: 50,
    borderRadius: 8,
    alignItems: "flex-start",
    pointerEvents: "none" as "none",
  },
  rule: {
    color: "black",
    fontSize: 12,
    marginBottom: 8,
    alignItems: "flex-start",
  },
  ruleText: {
    textAlign: "left" as "left",
  },
  correctRule: {
    color: "green",
    fontWeight: "bold",
  },
};

export default Limits;
