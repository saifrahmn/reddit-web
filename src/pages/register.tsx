import React from "react";
import { Form, Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      />
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
  <InputField name="username" placeholder="username" label="username" />
  </Box>
  {/* <Box mt={4}>
  <InputField name="password" placeholder="password" label="password" type="password"/>
  </Box>
  <Button
            mt={4}
            variantColor="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button> */}
  </Form>
  )}
  
  </Formik>
    </Wrapper>
  );
      }


export default Register;