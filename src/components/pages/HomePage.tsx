import AvailablePlayers from "../organisms/AvailablePlayers";
import MyTeam from "../organisms/MyTeam";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <MyTeam />

      <div style={styles.divider} />

      <AvailablePlayers />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
  },
  divider: {
    backgroundColor: "lightgray",
    height: "100%",
    width: "2px",
  },
};

export default HomePage;
