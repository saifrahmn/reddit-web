import React from "react";
import { Form, Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useLoginMutation, useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
// import{register} from ".graphql/mutation/register"

interface registerProps {}

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ user_name: "", user_password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login( { options: values } );
          if (response.data.login.error) {
            //show the error
            //error is an error with two fields 'field' , 'message'
            setErrors(toErrorMap(response.data.login.error));
          }
          //  else if(response.data.login.user){
          //     router.push("/")
          //  }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField
                name="username"
                placeholder="username"
                label="Username"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            {/* <Box mt={4}>
  <InputField name="RePassword" placeholder="password" label="Re-enter password" />
  </Box> */}
            {/* {/* <Box mt={4}>
  <InputField name="github" placeholder="github username" label="Github id" />
  </Box>
  <Box mt={4}>
  <FormControl>
  <FormLabel htmlFor="Role">Your Role in the community</FormLabel>
  <select id="Role" placeholder="Team lead" />
</FormControl> 
        </Box>*/}
            <Button
              mt={4}
              isLoading={isSubmitting}
              background="#F7DB6A"
              type="submit"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
