// Author: https://codevoweb.com/react-material-ui-and-react-hook-form-html-forms/
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from '@emotion/styled';
import FormInput from 'src/components/FormInput';

// ? Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

// Styled Material UI Link Component

// Login Schema with Zod
const loginSchema = object({
  email: string().min(1,'Email is required').email('Email is invalid'),
  password: string()
    .min(1,'Password is required')
    .min(6, 'Password must be more than 6 characters')
    .max(32, 'Password must be less than 32 characters'),
  persistUser: literal(true).optional(),
});

// ? Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {
  // ? Default Values
  const defaultValues: ILogin = {
    email: '',
    password: '',
  };

  // ? The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  // ? Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values);
  };

  // ? JSX to be rendered
  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <FormProvider {...methods}>
          <Box
            display='flex'
            flexDirection='column'
            component='form'
            noValidate
            autoComplete='off'
            sx={{ paddingRight: { sm: '3rem' } }}
            onSubmit={methods.handleSubmit(onSubmitHandler)}
          >
            <Typography
              variant='h6'
              component='h1'
              sx={{ textAlign: 'center', mb: '1.5rem' }}
            >
              Log into your account
            </Typography>

            <FormInput
              label='Enter your email'
              type='email'
              name='email'
              focused
              required
            />
            <FormInput
              type='password'
              label='Password'
              name='password'
              required
              focused
            />

            <LoadingButton
              loading={false}
              type='submit'
              variant='contained'
              sx={{
                py: '0.8rem',
                mt: 2,
                width: '80%',
                marginInline: 'auto',
              }}
            >
              Login
            </LoadingButton>
          </Box>
        </FormProvider>
      </Grid>
    </Container>
  );
};

export default LoginPage;

