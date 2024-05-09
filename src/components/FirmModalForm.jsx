import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { object, string, number } from "yup";
import { Form } from "formik";
import useStockRequest from "../services/useStockRequest";

export const firmSchema = object({
  name: string().required("Firma adı zorunludur"),
  phone: number().required("Firma telefonu zorunludur").positive().integer(),
  address: string().required("Firma adresi zorunludur"),
  image: string().url().nullable("Firma fotoğrafı zorunludur"),
});
const FirmModalForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  const { createFirm } = useStockRequest();

  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Firm Name"
          name="name"
          id="name"
          type="text"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          label="Firm Phone"
          name="phone"
          id="phone"
          type="text"
          value={values.phone}
          onChange={handleChange}
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          variant="outlined"
        />
        <TextField
          label="Firm Address"
          name="address"
          id="address"
          type="text"
          value={values.address}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Firm Image"
          name="image"
          id="image"
          type="text"
          value={values.image}
          onChange={handleChange}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          onClick={() => createFirm(values)}
        >
          Add Firm
        </Button>
      </Box>
    </Form>
  );
};
export default FirmModalForm;
