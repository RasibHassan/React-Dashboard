import PieChart from "../../components/PieChart";
import { Box } from "@mui/material";

function Pie() {
  return (
    <>
      <Box sx={{ height: "80vh",width: "90%" , m: "4rem" }}>
        <h1>Monthly Grades</h1>
        <PieChart />
      </Box>
    </>
  );
}
export default Pie;