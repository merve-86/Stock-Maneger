import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";



export default function SaleTable() {
  const { deleteStock } = useStockRequest();
  const  {sales} = useSelector(state => state.stock)

  const getRowId = (row) => row._id 

  const columns = [
    { field: "updatedAt", headerName: "Date", minWidth: 150, flex: 1.4 },
    {
      field: "brandId",
      headerName: "Brand",
      width: 150,
      editable: true,
      valueGetter: (value, row) => row.brandId?.name,
    },

    {
      field: "productId",
      headerName: "Product",
      width: 150,
      editable: true,
      valueGetter: (value, row) => row.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (props) => {
        console.log(props);
        return [
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            onClick={() => deleteStock("sales", props.id)}
            label="Delete"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={sales}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
