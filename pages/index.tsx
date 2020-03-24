import React from "react";
import { PageLayout } from "../components/PageLayout";
import { addProductsAPI } from "../services/products";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FileUpload from "../components/FileUpload";
import { Form } from "react-final-form";
import { TextFieldWrapper } from "../components/TextFieldWrapper";

const Products = ({ token, roleId }) => {
  const handleExcelSubmit = async values => {
    console.log(values);
    try {
      const res = await addProductsAPI(values);
      console.log(res);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return (
    <PageLayout pageTitle="About Us">
      <Form onSubmit={handleExcelSubmit}>
        {({ handleSubmit }) => (
          <form style={{ margin: "40px" }} onSubmit={handleSubmit}>
            <Grid justify="center" container spacing={8}>
              <Grid item xs={12}>
                <TextFieldWrapper name="token" label="token" />
              </Grid>
              <Grid item xs={12}>
                <FileUpload
                  required
                  accept=".xlsx, .xls"
                  showName
                  label="Upload Excel"
                  inputStyle={{
                    height: "20px",
                    width: "100%"
                  }}
                  labelStyle={{
                    height: "20px",
                    margin: "0 auto",
                    width: "150px",
                    border: "1px solid #8f8f8f",
                    borderRadius: "5px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8f8f8f"
                  }}
                  //   accept="image/*"
                  name="upl"
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{
                    color: "#626262",
                    fontWeight: 500,
                    border: "1px solid #626262"
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </PageLayout>
  );
};

export default Products;
