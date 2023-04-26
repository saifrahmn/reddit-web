import React from "react";
import { Form, Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
// import{register} from ".graphql/mutation/register"

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values , {setErrors})=> {
         const response= await register(values);
         if(response.data?.Register.error){
           //show the error 
           //error is an error with two fields 'field' , 'message'
           setErrors(toErrorMap(response.data.Register.error));
         }
        //  else if(response.data.Register.user){
        //     router.push("/")
        //  }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
  <InputField name="username" placeholder="username" label="Username" />
  </Box>
  <Box mt={4}>
  <InputField name="password" placeholder="password" label="Password" type="password"/>
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
            background= '#F7DB6A'
            type="submit"
          >
            Register
          </Button>
  </Form>
  )}
  </Formik>
  </Wrapper>
  );
};


export default Register;