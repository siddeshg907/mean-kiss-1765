import {
    Box,
    Image,
    Container,
    Heading,
    VStack,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    //Textarea,
    Button,
    HStack,
    Spacer,
    Radio,
    RadioGroup,
    Stack,
    Divider,
    Text
  } from "@chakra-ui/react";
  
  import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


  
  function CheckoutPage({putRequest, postData,SingleDoctor,setShowCheckout,timeslotForCheckOut,updatedDataForCheckOut,selectedDateForCheckOut,handleUserApptPost}) {

    const navigate= useNavigate()

    const HandlePlaceOrder=()=>{
        putRequest(updatedDataForCheckOut)
        handleUserApptPost(postData,selectedDateForCheckOut,timeslotForCheckOut,userData)
        navigate("/appointments")
    }


    const {userData}=useContext(AuthContext)


    return (
      <Box py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="xl" mb={8} color={"#53ab93"}>
            Checkout
          </Heading>
  
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem colSpan={{ sm: 3, md: 2 }}>
              <Box bg="white" shadow="md" p={6}>
                <Heading as="h2" size="lg" mb={6}>
                  User Information
                </Heading>
  
                <FormControl id="firstname" mb={4}>
                  <FormLabel>First Name</FormLabel>
                  <Input value={userData.name.split(" ")[0]} type="text" placeholder="Enter your name" />
                </FormControl>
  
                <FormControl id="lastname" mb={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input value={userData.name.split(" ")[1]} type="text" placeholder="Enter your name" />
                </FormControl>
                  
  
                <FormControl id="email" mb={4}>
                  <FormLabel >Email</FormLabel>
                  <Input value={userData.email} type="email" placeholder="Enter your email" />
                </FormControl>
                <Checkbox mb={3}>
                  Subsribe to Our Mailing List
                  </Checkbox>   
              </Box>
            </GridItem>
  
            <GridItem colSpan={{ sm: 3, md: 1 }}>
              <Box bg="white" shadow="md" p={6}>
                <Heading as="h2" size="lg" mb={6}>
                  Payment Information
                </Heading>
  
                <FormControl id="card" mb={4}>
                  <FormLabel>Card Number</FormLabel>
                  <Input type="text" placeholder="Enter your card number" />
                </FormControl>
  
                <FormControl id="expiry" mb={4}>
                  <FormLabel>Expiry Date</FormLabel>
                  <Input type="text" placeholder="MM / YY" />
                </FormControl>
  
                <FormControl id="cvv" mb={4}>
                  <FormLabel>CVV</FormLabel>
                  <Input type="text" placeholder="CVV" />
                </FormControl>
              </Box>
            </GridItem>
          </Grid>
  
          <Divider my={8} />
  
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg" mb={4} color={"#53ab93"}>
              Appointment Details
            </Heading>
  
            {/* Item list goes here */}
            <Box bg="white" shadow="md" p={6} width="full">
         
              <HStack spacing={4}>
                <Box
                  flexShrink={0}
                  width={16}
                  height={16}
                   bg="gray.200"
                  
                  borderRadius="md"
                  
                >
                     <Image src={SingleDoctor.image} borderRadius={"md"}
    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
  />
                </Box>
                <Box flex="1" textAlign={"left"}>
                <Heading as="h3" size="md" mb={1}>
                  {SingleDoctor.name}
                </Heading>
                <Text>{postData.name}</Text>
                  {/* <Text>{postData.name}</Text> */}
                </Box>
                <Spacer />
                <Box>
                  <Text>{selectedDateForCheckOut} At {timeslotForCheckOut}</Text>
                </Box>
              </HStack>
            </Box>
  
            {/* Order total */}
            <Box bg="white" shadow="md" p={6} width="full">
              <Stack direction="row" justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>₹ {SingleDoctor.price}</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Text>Discount</Text>
                <Text>₹ 100</Text>
              </Stack>
              <Divider my={2} />
              <Stack
                direction="row"
                justifyContent="space-between"
                fontWeight="bold"
              >
                <Text>Total</Text>
                <Text>₹ {Number(SingleDoctor.price)- 100}</Text>
              </Stack>
            </Box>
  
            {/* Shipping method */}
            <Box bg="white" shadow="md" p={6} width="full">
              <Heading as="h3" size="md" mb={4}>
              Appointment Preference
              </Heading>
              <RadioGroup>
                <Stack direction="row" spacing={4}>
                  <Radio value="online">Online Appointment</Radio>
                  <Radio value="offline">Offline Appointment</Radio>
                </Stack>
              </RadioGroup>
            </Box>
  
            {/* Payment method */}
            <Box bg="white" shadow="md" p={6} width="full">
              <Heading as="h3" size="md" mb={4}>
                Payment Method
              </Heading>
              <RadioGroup>
                <Stack direction="row" spacing={4}>
                  <Radio value="creditCard">Credit Card</Radio>
                  <Radio value="paypal">PayPal</Radio>
                </Stack>
              </RadioGroup>
            </Box>
  
            {/* Checkout button */}
            <Button borderRadius={0} color={"white"}  bg="rgba(1, 213, 162, 1)" variant='solid'  size={'lg'} fontSize={'xs'} mr={5} width={"200px"} alignSelf="center" onClick={HandlePlaceOrder}>
              Place Order
            </Button>
          </VStack>
        </Container>
      </Box>
    );
  }
  
  export default CheckoutPage;
  