
import { Flex, Grid, GridItem, Stack, Image,Box,Container,VStack ,chakra} from "@chakra-ui/react";


const Card = ({image}) => {
  return (
    <Box
     maxW={{ base: "full", md: "275px" }}
     w={"full"}
     overflow="hidden"
    // p={5}
    position="relative"
    boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
  >
    <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        //bgGradient="linear(to top, rgba(19, 214, 168, 0.9) 0%, rgba(19, 214, 168, 0) 50%)" // Updated gradient values
/>
       <Stack spacing={3} height={"100%"}>
        
        <Image src={image} alt="patient" height={"100%"} objectFit={"cover"} width="100%"></Image>
              
          {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button> */}
        </Stack>
    
 
  </Box>
  );
};

export default function AboutMedicalLanding() {
  return (
 
    <Box p={4} padding={20} >
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(1, 1fr)"
      }}
      gap={4}
    >

      <GridItem colSpan={1} bg={"#053d4c"}>
        <VStack spacing="5px" textAlign={"center"}>
          <Flex>
          <chakra.h2 color={'#13d6a8'} fontWeight={"semibold"} fontSize='3xl'>
         
          ABOUT US
          </chakra.h2>
          </Flex>
          
          <Flex>
            <chakra.p color={"white"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem vel nihil distinctio beatae numquam deserunt iusto quo nesciunt ex tempora soluta dolorem, illo eveniet reprehenderit voluptate! Sunt, ullam? Ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quam labore, doloribus ea commodi pariatur, dolores in exercitationem natus dolor soluta! Iure dolore ducimus, fugit ipsa culpa qui voluptate autem.
            </chakra.p>
            </Flex>
        </VStack>
      </GridItem>
    </Grid>

    <Container maxW={"11xl"} mt={12} > 
    {/* was 5 xl */}
      <Grid templateColumns={{
         base: "repeat(1, 1fr)", // default value for all breakpoints
         sm: "repeat(2, 1fr)",   // small screens and up
         md: "repeat(4, 1fr)", 
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
      </Grid>
    </Container>
  </Box>
 
  );
}
