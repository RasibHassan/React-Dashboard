import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataTeam} from "./../../data/mockData"

const columns = [
 
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'name', headerName: 'name', width: 150 },
  { field: 'age', headerName: 'Age' ,width: 150 },
  { field: 'email', headerName: 'email name', width: 300 },
  {
    field: 'phone',
    headerName: 'phone',
    width: 290,
  },
  {
    field: 'access',
    headerName: 'Access',
    width: 190,
  },
];



export default function DataTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (<><Box sx={{margin: "40px"}}><h1>CONTACTS</h1>
  
  <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            backgroundColor: colors.blueAccent[500],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[500],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[500],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
     
      <DataGrid
        rows={mockDataTeam}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />

    </Box></Box></>
  );
}


