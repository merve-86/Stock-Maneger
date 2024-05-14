import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useStockRequest from "../services/useStockRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SaleModal({ handleClose, open, info, setInfo }) {
  const { postStock, putStock } = useStockRequest();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("firms", info);
    } else {
      postStock("firms", info);
    }

    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Brand"
              name="brand"
              id="brand"
              type="text"
              variant="outlined"
              value={info.brand}
              onChange={handleChange}
            />

            <TextField
              label="Product"
              name="product"
              id="product"
              type="text"
              variant="outlined"
              value={info.product}
              onChange={handleChange}
            />

            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="text"
              variant="outlined"
              value={info.quantity}
              onChange={handleChange}
            />

            <TextField
              label="Price"
              name="price"
              id="price"
              type="text"
              variant="outlined"
              value={info.price}
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              {info._id ? "UPDATE SALE" : "ADD SALE"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
