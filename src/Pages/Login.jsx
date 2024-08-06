import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Image,Input,Flex,InputRightElement,Button, InputGroup } from '@chakra-ui/react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext'
import Footer from '../components/Footer'
import {
    Checkbox,
    FormControl,
    FormLabel,
    Heading,
    Link as ChakraLink,
    Stack
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Login(){
    const {isAuth,setAuth,userData,setUserData}=useContext(AuthContext)

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const [show, setShow] = useState(false)
    const [valid,setValid]=useState(false)

    const navigate = useNavigate();

    const handleReset=()=>{
        setEmail("")
        setPass("")

    }
    const handleClick = () => setShow(!show)

    const handleSubmit=()=>{
       
        if(!email||!pass){
            setValid(true)
        }else{
        getUsers()
        }
        handleReset()
    }
    console.log(isAuth,userData)

    const getUsers=()=>{
        axios.get(`https://careconnect-api.onrender.com/users`).then((res)=>{
            console.log(res)
            res.data.forEach((ele)=>{
                if(email===ele.email && pass===ele.password){
                    setAuth(true)
                    setUserData(ele)
                    const previousPage = sessionStorage.getItem('previousPage');
    const redirectTo = previousPage === '/book' ? '/book' : '/';
    navigate(redirectTo);
                }
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
       
    
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
    <Flex flex={1}>
        <Image 
         width='100%'
          alt={"Login Image"}
          objectFit={"cover"}

          src={
            "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"} paddingBottom={300}>
        <Stack spacing={4} w={"full"} maxW={"md"} mt={10}>
          <Heading fontSize={"2xl"} color={"#01D5A2"}>LOGIN</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value); setValid(false)}} isInvalid={valid}
    errorBorderColor='red.300'/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={pass}
        onChange={(e)=>{setPass(e.target.value); setValid(false)}}
        isInvalid={valid}
    errorBorderColor='red.300'/>
    <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
        </InputRightElement>
        </InputGroup>
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link to="/signup">
              <ChakraLink color="#01D5A2">Not a User? Sign Up Here</ChakraLink>
              </Link>
            </Stack>
            <Button  borderRadius={0} color={"#01D5A2"} colorScheme="#01D5A2" variant='outline' size={'lg'} fontSize={'xs'} fontWeight={"bold"}  border={"2px"}  onClick={handleSubmit}>
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      
    </Stack>
    <Footer/>
    </>
    )

}