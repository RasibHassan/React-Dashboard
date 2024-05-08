import GeographyChart from "../../components/GeographyChart";
// import PieChart from "../../components/GeographyChart";
import { Box } from "@mui/material";

function Pie() {
  return (
    <>
      <Box sx={{ height: "80vh",width: "90%" , m: "4rem" }}>
        <h1>Our Students</h1>
        <GeographyChart />
      </Box>
    </>
  );
}
export default Pie;