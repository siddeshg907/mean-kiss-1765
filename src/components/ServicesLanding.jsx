import { Flex,Box,Grid,GridItem,Text,Button,Image } from "@chakra-ui/react"
import myImage from '../Images/brain.png'
import { BiBrain } from 'react-icons/bi';
import {LuBaby} from 'react-icons/lu'
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


const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      overflow="hidden"
      p={5}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      padding={10}
    >
      <Stack align={"start"} spacing={3}>
        <Flex w={"100%"} align={"center"} justify={"flex-start"}>
          {React.cloneElement(icon, { boxSize: "80px" })}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={5} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function SerivcesLanding() {
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
            <chakra.h2 color={'#13d6a8'} fontWeight={"semibold"} fontSize='2xl'>
            Our Services
            </chakra.h2>
            <chakra.h2  color={"black"} fontSize='2xl' fontWeight={"semibold"}>
             
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
              MORE INFO
            </Button>
          </VStack>
        </GridItem>
      </Grid>

      <Container maxW={"10xl"} mt={12}> 
      {/* was 5 xl */}
        <Flex flexWrap="wrap" gridGap={6} justify="space-evenly" textAlign={"left"}>
          {/*<Card
            heading={"Neurology"}
            icon={<Icon as={BiBrain} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />*/}
          {/*<Card
            heading={"Paediatric"}
            icon={<Icon as={LuBaby} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />*/}
          <Card
            heading={"Cardiology"}
            icon={<Icon as={GiHeartOrgan} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />
          <Card
            heading={"Dental Care"}
            icon={<Icon as={TbDental} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />
          <Card
            heading={"Laboratory"}
            icon={<Icon as={TbMicroscope} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />
          <Card
            heading={"Eye Care"}
            icon={<Icon as={AiOutlineEye} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />
          {/*<Card
            heading={"Pulmonary"}
            icon={<Icon as={BsLungs} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />
          <Card
            heading={"X-Ray"}
            icon={<Icon as={GiSkeleton} size={80} color="#13d6a8" />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis."
            }
            // href={"#"}
          />*/}
        </Flex>
      </Container>
    </Box>
  );
}
