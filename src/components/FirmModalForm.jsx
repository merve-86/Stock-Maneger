import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { object, string, number } from "yup";
import { Form } from "formik";
export const firmSchema = object({
  firmName: string().required("Firma adı zorunludur"),
  firmPhone: number()
    .required("Firma telefonu zorunludur")
    .positive()
    .integer(),
  firmAddress: string().required("Firma adresi zorunludur"),
  firmImg: string().url().nullable("Firma fotoğrafı zorunludur"),
});
const FirmModalForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Firm Name"
          name="firmName"
          id="firmName"
          type="text"
          variant="outlined"
          value={values.firmName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firmName && Boolean(errors.firmName)}
          helperText={touched.firmName && errors.firmName}
        />
        <TextField
          label="Firm Phone"
          name="firmPhone"
          id="firmPhone"
          type="tel"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          variant="outlined"
          //   value={values.firstName}
          //   onChange={handleChange}
          //   onBlur={handleBlur}
          //   error={touched.firstName && Boolean(errors.firstName)}
          //   helperText={touched.firstName && errors.firstName}
        />
        <TextField
          label="firmAddress"
          name="firmAddress"
          id="firmAddress"
          type="text"
          variant="outlined"
          //   value={values.email}
          //   onChange={handleChange}
          //   onBlur={handleBlur}
          //   error={touched.email && Boolean(errors.email)}
          //   helperText={touched.email && errors.email}
        />
        <TextField
          label="Firm Image"
          name="firmImg"
          id="firmImg"
          type="image"
          variant="outlined"
          //   value={values.password}
          //   onChange={handleChange}
          //   onBlur={handleBlur}
          //   error={touched.password && Boolean(errors.password)}
          //   helperText={touched.password && errors.password}
        />
        <Button type="submit" variant="contained" size="large">
          Add Firm
        </Button>
      </Box>
    </Form>
  );
};
export default FirmModalForm;
