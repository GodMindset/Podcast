import React from "react";
import {
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  Grid,
} from "@material-ui/core";
import { Formik, ErrorMessage, Form, Field } from "formik";

export const Question = () => {
  const generateQuestionBox = () => {
    const box = () => (
      <TextField
        id="standard-multiline-static"
        label="Your question"
        multiline
        fullWidth={true}
        rows={4}
        defaultValue="Input your question here"
      />
    );

    return box;
  };

  return (
    <Container>
      <Typography variant="v1">Submit your question</Typography>

      <Paper>
        <Formik
          initialValues={{ question: "", name: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.question) {
              errors.question = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmiting }) => {
            // call service
            setSubmiting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    placeholder="Insert your question"
                    component={generateQuestionBox()}
                    name="question"
                    rows="6"
                  />
                  <ErrorMessage name="question" component="div" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    placeholder="Name (optional)"
                    type="textarea"
                    name="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="outlined"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Question;
