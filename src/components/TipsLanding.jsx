import { Flex,Box,Grid,GridItem,Text,Button,Image } from "@chakra-ui/react"

import { BiBrain } from 'react-icons/bi';

import {GiHeartOrgan} from 'react-icons/gi'
import {TbDental} from 'react-icons/tb'
import {TbMicroscope} from 'react-icons/tb'
import {AiOutlineEye} from 'react-icons/ai'
import {BsLungs} from 'react-icons/bs'
import {GiSkeleton} from 'react-icons/gi'

import React from "react";
import {
  Container,
  Heading,
  Icon,
  Stack,
  VStack,
  chakra
} from "@chakra-ui/react";



interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}


const Card = ({image}) => {
  return (
    <Box
      maxW={{ base: "full", md: "400px" }}
      w={"full"}
      overflow="hidden"
     
    >
      <Stack spacing={3} height={"100%"}>
        
      <Image src={image} alt="patient" height={"100%"} objectFit={"cover"} width="100%"></Image>
            
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function TipsLanding() {
  return (
    <Box p={4} padding={20}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)"
        }}
        gap={4}
      >

        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="5px" textAlign={"left"} >
            <chakra.h2 color={'#13d6a8'} fontWeight={"semibold"} fontSize='1xl'>
            AWESOME
            </chakra.h2>
            <chakra.h2  color={"black"} fontSize='2xl' fontWeight={"semibold"}>
             Health Tips
            </chakra.h2>
            <Flex>
              <chakra.p color={"#8b8986"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem vel nihil distinctio beatae numquam deserunt iusto quo nesciunt ex tempora soluta dolorem, illo eveniet reprehenderit voluptate! Sunt, ullam? Ipsum.
              </chakra.p>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack
            alignItems={{
              base: "flex-start",
              sm: "flex-start",
              md: "flex-end"
            }}
            spacing="20px"
          >
            <Button borderRadius={0} color={"#01D5A2"} colorScheme="#01D5A2" variant='outline' size={'lg'} fontSize={'xs'} fontWeight={"bold"} width={"200px"} border={"2px"}>
               VIEW MORE TIPS
            </Button>
          </VStack>
        </GridItem>
      </Grid>

      <Container maxW={"11xl"} mt={12} > 
      {/* was 5 xl */}
        <Grid templateColumns={{
           base: "repeat(1, 1fr)", // default value for all breakpoints
           sm: "repeat(2, 1fr)",   // small screens and up
           md: "repeat(3, 1fr)", 
        }} gap={3} justifyContent="space-evenly">
         
          <Card
            image="https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1724&q=80"
            // href={"#"}
          />
          <Card
           
            image="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhdGllbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          />
          <Card
           image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            // href={"#"}
          />
          <Card
            image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhdGllbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            // href={"#"}
          />
          <Card
           image="https://images.unsplash.com/photo-1578496781379-7dcfb995293d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBhdGllbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            // href={"#"}
          />
          <Card
            image="https://images.unsplash.com/photo-1576766125535-b04e15fd0273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBhdGllbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            // href={"#"}
          />
        </Grid>
      </Container>
    </Box>
  );
}
