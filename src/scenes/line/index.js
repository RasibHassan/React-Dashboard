import Line from "../../components/LineChart";
import { Box } from "@mui/material";

function line() {
  return (
    <>
      <Box sx={{ height: "80vh",width: "90%" , m: "4rem" }}>
        <h1>Monthly Grades</h1>
        <Line/>
      </Box>
    </>
  );
}
export default line;