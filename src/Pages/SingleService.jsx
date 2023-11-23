import { useParams } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"
import MyImage from "../Images/hero-bg.png";

import { Text,Image } from "@chakra-ui/react"

import { Grid } from "@chakra-ui/react"
import { GridItem,Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import {

  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
  Avatar,Divider
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager
} from "react-icons/fc";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import {AiFillStar} from 'react-icons/ai'
import Footer from "../components/Footer"


interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}


const Card = ({heading, exp,education,image,id,eleId }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "350px" }}
      w={"full"}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
    
      overflow="hidden"
      p={2}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          align={"center"}
          justify={"center"}
          height="200px"
          width={"100%"}
        >
          <Image objectFit="cover" width="100%" height="100%" src = {image}></Image>
        </Flex>
        <Box padding={5}>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {exp}
          </Text>
          <Text mt={1} fontSize={"sm"}>
            {education}
          </Text>
        </Box>
        <Link to={`/services/${id}/${eleId}`}>
        <Button variant={"link"} color={"#13d6a8"} size={"sm"}>
          Book an Appointment
        </Button>
        </Link>
        </Box>
      </Stack>
    </Box>
  );
};


export default function SingleProduct(){
    let {id}=useParams()
    console.log(id)
    id=+id

    const [doctors,setDoctors]=useState([])
    const [dept,setDept]=useState("")

    const getSingleService=(id)=>{  
        axios.get(`https://careconnect-api.onrender.com/services/${id}`).then((res)=>{
            console.log(res.data.doctors)
            setDoctors(res.data.doctors)
            setDept(res.data.name)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getSingleService(id)
    },[id])



    return (
      <>
        {/* first section */}
        <Box backgroundImage={MyImage} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} height={700} width='100%'>
          <Heading as='h1' size='4xl' color={'white'} textAlign={'left'} padding="350px 0px 0px 300px" >SERVICES</Heading>
        </Box>
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Text color={'#53ab93'} fontWeight={"semibold"} fontSize='4xl'>
              {dept}
            </Text>
            <Text color={"black"} fontSize='2xl' fontWeight={"medium"}>
              Doctors
            </Text>
            <Text color={"#8b8986"} fontSize={{ base: "sm", sm: "lg" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              obcaecati ut cupiditate pariatur, dignissimos, placeat amet
              officiis.
            </Text>
          </Stack>
  
          <Container maxW={"10xl"} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
            {doctors.map((ele)=>(
              // <Link to={`/services/${id}/${ele.id}`} key={ele.id}>
        <Card heading = {ele.name}
        dept={dept}
        image ={ele.image}
        name={ele.name}
        exp= {ele.exp}
        price={ele.price}
        education = {ele.education}
        id={id}
        eleId={ele.id}
        
        />
          // </Link>
      ))}
            </Flex>
          </Container>
        </Box>
      
          
      <Footer/>
      </>
    );
  }