import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  FormLabel,useToast,Switch,

  Modal,
  ModalOverlay,
  ModalContent,Box
} from "@chakra-ui/react";
import {

  Stack,
  Heading,
  Text,
  Container,

  SimpleGrid,
  
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';

import axios from 'axios'
import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom'

import * as yup from "yup";
import OTP from "../components/PinInput";
import Footer from '../components/Footer'
import { AuthContext } from "../Context/AuthContext.jsx";
// const avatars = [
//   {
//     name: 'Ryan Florence',
//     url: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     name: 'Segun Adebayo',
//     url: 'https://bit.ly/sage-adebayo',
//   },
//   {
//     name: 'Kent Dodds',
//     url: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     name: 'Prosper Otemuyiwa',
//     url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     name: 'Christian Nwamba',
//     url: 'https://bit.ly/code-beast',
//   },
// ];


const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name should be at least 3 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name should be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters")
    .max(20, "Password should not exceed 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required")
});

function Register() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  });
  const toast = useToast()
  const [submitStatus, setSubmitStatus]=useState(false)
  const [errors, setErrors] = useState({});
  const [generatedOTP,setgeneratedOTP]=useState("")
  //const [postSuccess,setPostSuccess]=useState(false)
  const [misMatch,setMisMatch]=useState(false)
  const navigate=useNavigate()
  
  const {setAuth,setUserData}=useContext(AuthContext)

  function generateOTP(){
    return Math.floor(1000 + Math.random() * 9000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));

    if (name === 'password') {
      schema
        .validateAt(name, { [name]: value })
        .then(() => {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        })
        .catch((err) => {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
        });
    }
  };

  const isConfirmPasswordDisabled = !details.password || !!errors.password;


  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(details, { abortEarly: false })
      .then(() => {
        // Validation passed, do something here like submitting the form
        console.log("Form submitted successfully");
        setSubmitStatus(true)
        setgeneratedOTP(generateOTP())
      })
      .catch((err) => {
        const fieldErrors = {};

        err.inner.forEach((error) => {
          fieldErrors[error.path] = error.message;
        });

        setErrors(fieldErrors);
      });
      
  };

  const handleOTPVerification = (enteredOTP) => {
  
    if (+enteredOTP === generatedOTP) {
      // OTP matches, perform the desired action
      console.log('OTP matched');
      
      postUserDetails()
      //call post axios 

    } else {
      // OTP does not match, handle the error
      console.log('OTP mismatch');
      //show pop up
      console.log(+enteredOTP,generateOTP)

      setMisMatch(true)
      toast({
        title: "Incorrect OTP",
        description: "OTP doesn't match",
        status: "error",
        duration: 2000,
      });
      
      //invoke generated again and show the new one
      setgeneratedOTP(generateOTP())

      //reset pin
      //passing mismatch value to pininput
    }
  };
  
  const postUserDetails=()=>{
    //loader here
    axios.post(`https://careconnect-api.onrender.com/users`,{
      "name":details.firstName+" "+details.lastName,
      "email":details.email,
      "password":details.password
    }).then((res)=>{
      console.log(res.data)
 
      //setPostSuccess(true)
//set auth status
     
      setAuth(true)
      //set user data
      setUserData({"name":details.firstName+" "+details.lastName,
      "email":details.email,
      "password":details.password})
       //redirect
       navigate("/")
      //reset
      // setDetails({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   password: "",
      //   confirm: ""
      // })


     
      toast({
             title: 'Account created.',
             description: "We've created your account for you.",
             status: 'success',
             duration: 2000,
            });
          
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  

    return (
      <Box position={'relative'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition={'center'} backgroundImage={'https://t4.ftcdn.net/jpg/01/33/33/41/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'} 
          py={{ base: 10, sm: 20, lg: 32 }}
          alignItems={'center'}>
          {/*<Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              MedX Users{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, #01d5a1, #053d4c)"
                bgClip="text">
                &
              </Text>{' '}
              Doctors
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={{ base: 'md', md: 'lg' }}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, #01d5a1, #053d4c)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'#053d4c'}
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, #01d5a1, #053d4c)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex>
            </Stack>
          </Stack>*/}
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
            marginLeft="400px"
            >
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Your journey to better health starts here. Sign up and access our range of services
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, #01d5a1, #053d4c)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Our hospital offers a holistic approach to well-being, combining medical expertise with a range of wellness programs and support services. By signing up, you'll become part of a vibrant community dedicated to improving lives through preventive care, innovative treatments, and personalized attention. Take control of your health journey and experience the difference firsthand.
              </Text>
            </Stack>
           
  
            <Box mt={10} Box as={'form'} onSubmit={handleSubmit}>
              <Stack spacing={4}>
              <FormControl isInvalid={!!errors.firstName}>
            <FormLabel>First Name</FormLabel>
                <Input
                  placeholder="Firstname"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  type="text"
              name="firstName"
              value={details.firstName}
              onChange={handleChange}
              onFocus={() => setErrors({})}
                />
                {errors.firstName && (
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel>Last Name</FormLabel>
                <Input
                  placeholder="Lastname"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  type="text"
              name="lastName"
              value={details.lastName}
              onChange={handleChange}
              onFocus={() => setErrors({})}
                />
                 {errors.lastName && (
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            )}
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input
            placeholder="Enter Email"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
              type="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              onFocus={() => setErrors({})}
            />
             <FormHelperText>We'll never share your email.</FormHelperText>
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
            placeholder="Enter password"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
              type="password"
              name="password"
              value={details.password}
              onChange={handleChange}
              onFocus={() => setErrors({})}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={!!errors.confirm}
            isDisabled={isConfirmPasswordDisabled}
          >
            <FormLabel>Confirm Password</FormLabel>
            <Input
           placeholder="Confirm password"
           bg={'gray.100'}
           border={0}
           color={'gray.500'}
           _placeholder={{
             color: 'gray.500',
           }}
              type="password"
              name="confirm"
              onChange={handleChange}
              value={details.confirm}
              onFocus={() => setErrors({})}
            />
            {errors.confirm && (
              <FormErrorMessage>{errors.confirm}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl display='flex' alignItems='center'>
      <FormLabel htmlFor='email-alerts' mb='0'>
        Enable email alerts?
      </FormLabel>
      <Switch id='email-alerts' />
    </FormControl>
                
              </Stack>
              <Input 
              type="submit" value="Submit"
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, #01d5a1, #053d4c)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, #01d5a1, #053d4c)',
                  boxShadow: 'xl',
                }}/>
                
            </Box>
        
        
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
            <Modal isOpen={submitStatus}>
        <ModalOverlay />
        
        <ModalContent style={{
          display: 'flex',
          flexDirection:'column',
          padding:"20px",
          justifyContent: 'center',
          alignItems:'center', height:"200px", width:"300px"}}>
        <Box >
        <OTP
        key={Math.random()+Date.now()}
        generatedOTP={generatedOTP}
        handleOTPVerification={handleOTPVerification}
        misMatch={misMatch}
        />
        </Box>
          </ModalContent>
          
        </Modal>
         <Footer/>
      </Box>
    );
  
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#348976" />
      <circle cx="244" cy="106" r="139" fill="#348976" />
      <circle cy="291" r="139" fill="#348976" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#01d5a1" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#01d5a1" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#01d5a1" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#01d5a1" />
    </Icon>
  );
};

export default Register;