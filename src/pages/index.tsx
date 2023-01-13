import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import {SubmitHandler, useForm, useFormState} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

//validação dos inputs
const signInFormSchema = yup.object().shape({
  email: yup.string().required("O e-mail é obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatoria"),
})

export default function SignIn() {

    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(signInFormSchema)
    })

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) =>{
     await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(values);
    }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail" 
            //ref mudou
            error={errors.email}
            //agora estou usando yup
            // {...register('email',{required: "E-mail obrigatorio"})}
            />
         <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            //ref mudou
            {...register("password")}
            />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          // isLoading={formState.isSubmitting}
          >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
