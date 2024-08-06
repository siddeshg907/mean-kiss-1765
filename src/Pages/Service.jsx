import { Box,Flex,Text ,Grid,Image, Spinner} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import {GiAmbulance} from 'react-icons/gi'
import {TbNotes} from 'react-icons/tb'
import {TbSofa,TbHeartbeat} from 'react-icons/tb'
import {TiDeviceDesktop} from 'react-icons/ti'
//import {GrLounge} from 'react-icons/gr'
import {RiCustomerService2Line} from 'react-icons/ri'
import {MdOutlineMedicalServices,MdOutlineBloodtype} from 'react-icons/md'
//import {GrNotes} from 'react-icons/gr'
import {LuStethoscope,LuBookOpen,LuNetwork} from 'react-icons/lu'
import MyImage from "../Images/hero-bg.png";
//skeleton here
import {
  Button,
  Container,
  Heading,
  Icon,
  Stack,
  //useColorModeValue,
  //Avatar,
  Divider
} from "@chakra-ui/react";
import { ReactElement } from "react";

//import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
//import {AiFillStar} from 'react-icons/ai'
import Footer from '../components/Footer';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({heading, description,image,href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "350px" }}
      w={"full"}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
    
      overflow="hidden"
      p={2}
    >
      <Stack align={"start"} spacing={2}>
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
            {description}
          </Text>
        </Box>
        <Link to={`/services/${href}`}>
        <Button variant={"link"} color={"#13d6a8"} size={"sm"} border="solid 1px teal" height={7} width={100}>
          Book now
        </Button>
        </Link>
        </Box>
      </Stack>
    </Box>
  );
};

const Card3= ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
    
     
      overflow="hidden"
      padding="50px 20px 50px 20px">
      <Stack align={'start'} spacing={5}>
        <Flex
         direction={{"base":"column","sm":"column","md":"row"}}
          align={'flex-start'}
          justify={'center'}
          gap={3}
          
          >
                <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'#13d6a8'}
        mb={1}>
        {icon}
      </Flex>
          {/* {icon} */}
          <Heading alignSelf={'center'} size="md">{heading}</Heading>
        </Flex>
        <Box mt={2}>
         
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        
      </Stack>
    </Box>
  );
};
const Card2= ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
    
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      overflow="hidden"
      padding="30px 20px 40px 20px">
      <Stack align={'start'} spacing={5}>
        <Flex
         direction={{"base":"column","sm":"column","md":"row"}}
          align={'flex-start'}
          justify={'center'}
          gap={3}
          >
          {icon}
          <Heading alignSelf={'center'} size="md">{heading}</Heading>
        </Flex>
        <Box mt={2}>
         
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        
      </Stack>
    </Box>
  );
};

export default function Service(){

  const [services,setServices]=useState([])
  const [loading, setLoading] = useState(true); // Add loading state
  //const [indexFeedback, setIndexFeedback]=useState(0)
  //const [feedbackData, setFeedbackData]=useState([{
   // description
//: 
//"",

//image
//: "",

// location
// : 
// "",
// name
// : 
// "",
// rating
// : 
// ""
//   }])

  const images=["https://media.istockphoto.com/id/1455449749/photo/let-me-take-a-listen-to-your-heartbeat.webp?b=1&s=170667a&w=0&k=20&c=n4AnFgh8RwbVlmMVcZeSCbOkL97LbXgKkXuf_n2AINY=","https://images.unsplash.com/photo-1632053002928-1919605ee6f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFlZGlhdHJpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","https://media.istockphoto.com/id/1125368035/photo/natural-healing-alternative-medicine.webp?b=1&s=170667a&w=0&k=20&c=jV3Xc3tw3KGfATy7o-4LUYDKJ4GocAX-ptOtichLB0k=",
"https://plus.unsplash.com/premium_photo-1674575132185-b95568d3294e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60","https://media.istockphoto.com/id/1373088953/photo/eye-doctor-with-female-patient-during-an-examination-in-modern-clinic-ophthalmologist-is.webp?b=1&s=170667a&w=0&k=20&c=ll74OK81G6egmoIaGR9VdOr59AhsDKl6O6HEl-Yaues=",
"https://media.istockphoto.com/id/1223774237/photo/doctors-looking-at-lungs-x-ray.webp?b=1&s=170667a&w=0&k=20&c=DU-ErRGBFYqTp7PiFO84QVzEqxMsYyGvas7F3Y2PdEA=","https://media.istockphoto.com/id/1223774237/photo/doctors-looking-at-lungs-x-ray.webp?b=1&s=170667a&w=0&k=20&c=DU-ErRGBFYqTp7PiFO84QVzEqxMsYyGvas7F3Y2PdEA="]


//day2
const getServices = async () => {
  try {
    const response = await axios.get('https://careconnect-api.onrender.com/services');
    setServices(response.data);
  } catch (error) {
    console.error('Error fetching services:', error);
  } finally {
    setLoading(false); // Set loading to false after fetching
  }
};
  useEffect(()=>{
    getServices()
    
  },[])
//box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    return (
      <>
        {/* first section */}
        <Box backgroundImage={MyImage} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} height={700} width='100%'>
        <Heading 
  as="h1" 
  size="4xl"
  color="white" 
  textAlign={{ base: 'center', md: 'left' }} 
  padding={{ base: '100px 20px', md: '200px 50px', lg: '350px 0px 0px 300px' }}
>
  SERVICES
</Heading>
        </Box>
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Text color={'#53ab93'} fontWeight={"semibold"} fontSize='1xl'>
              SERVICES
            </Text>
            <Text color={"black"} fontSize='2xl' fontWeight={"medium"}>
              Our Major Services
            </Text>
            <Text color={"#8b8986"} fontSize={{ base: "sm", sm: "lg" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              obcaecati ut cupiditate pariatur, dignissimos, placeat amet
              officiis.
            </Text>
          </Stack>
  
          <Container maxW={"10xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {loading ? (
              <Spinner size="xl" color="#13d6a8" />
            ) : (
              services.map((ele,index)=>(
                index===services.length-1 ? 
                  <></>
                :
              
                <Card key={ele.id} heading = {ele.name}
                image ={images[index]}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={ele.id}
                />
               
              )))
            }
          </Flex>
        </Container>
        </Box>
        {/* second section */}
       <Box p={4} bg={"#f5f5f5"}>
           <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
              Short heading
            </Heading>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              obcaecati ut cupiditate pariatur, dignissimos, placeat amet
              officiis.
            </Text>
          </Stack> 
  
          <Container maxW={"10xl"} mt={12}>
            <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)"
              }}
            >
              <Flex flexWrap="wrap" gridGap={6} justify="center">
                <Card2
                  heading={"Top Doctors"}
                  icon={<Icon as={MdOutlineMedicalServices} w={10} h={10} color= '#13d6a8'/>}
                  description={
                    "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                  }
             
                />
                <Card2
                  heading={"Modern Machine"}
                  icon={<Icon as={TiDeviceDesktop} w={10} h={10} color= '#13d6a8'/>}
                  description={
                    "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                  }
                 
                />
                <Card2
                  heading={"Qualified Facilities"}
                  icon={<Icon as={TbSofa} w={10} h={10} color= '#13d6a8'/>}
                  description={
                    "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                  }
          
                />
                <Card2
                  heading={"Professional Services"}
                  icon={<Icon as={RiCustomerService2Line} w={10} h={10} color= '#13d6a8'/>}
                  description={
                    "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                  }
             
                />
                <Card2
                  heading={"Medical Counselling"}
                  icon={<Icon as={GiAmbulance} w={10} h={10} color= '#13d6a8'/>}
                  description={
                    "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                  }
         
                />
                 <Card2
                  heading={"Emergency Help"}
                  icon={<Icon as={TbNotes} w={10} h={10} color= '#13d6a8'/>}
                  description={
                    "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                  }
             
                />
              </Flex>
              <Flex   justify={"center"} bg={"#00d6a2"} color={"white"}>
                 {/* <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                  objectFit={"cover"}
                />  */}
                
                  <Flex direction="column" justify={"center"}gap={3}>
                  <Heading>Opening Hours</Heading>
                  <Stack direction="row">
                  <Text>Saturday</Text>
                  <Text>10:00 AM to 6:00PM</Text>
                  </Stack> 
       
                  <Divider
    borderBottomWidth="1px"
    borderBottomStyle="dashed"
    borderColor="white"
  />
  
                  <Stack direction="row">
                  <Text>Monday</Text>
                  <Text>10:00 AM to 6:00PM</Text>
                  </Stack>
                  <Divider
    borderBottomWidth="1px"
    borderBottomStyle="dashed"
    borderColor="white"
  />
                  <Stack direction="row">
                  <Text>Wednesday</Text>
                  <Text>10:00 AM to 6:00PM</Text>
                  </Stack>
                  <Divider
    borderBottomWidth="1px"
    borderBottomStyle="dashed"
    borderColor="white"
  />
                  <Stack direction="row">
                  <Text>Friday</Text>
                  <Text>10:00 AM to 6:00PM</Text>
                  </Stack>
                  
                  <Heading>Need a Personal Health Plan?</Heading>
                  <Text>Lorem ipsum dotur adipisicing elit, suscipit molestias, magni aut inventor</Text>
                  </Flex>
              
              </Flex>
            </Grid>
          </Container>
      </Box>
        {/* third section */}
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
              Related to Bed Bugs
            </Heading>
            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
              Clinical Developer of ecological
            </Heading>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              obcaecati ut cupiditate pariatur, dignissimos, placeat amet
              officiis.
            </Text>
          </Stack>
  
          <Container maxW={"10xl"} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} columnGap={20} justify="center">
              <Card3
                heading={"Operation"}
                icon={<Icon as={LuStethoscope} w={10} h={10} />}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              />
              <Card3
                heading={"Herbal Medicine"}
                icon={<Icon as={LuBookOpen} w={10} h={10} />}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              />
              <Card3
                heading={"Body Examination"}
                icon={<Icon as={LuNetwork} w={10} h={10} />}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              />
              <Card3
                heading={"Dermatology"}
                icon={<Icon as={TbNotes} w={10} h={10}/>}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              />
              <Card3
                heading={"Cardio"}
                icon={<Icon as={TbHeartbeat} w={10} h={10} />}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              />
              <Card3
                heading={"Blood Test"}
                icon={<Icon as={MdOutlineBloodtype} w={10} h={10} />}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              />
            </Flex>
          </Container>
              </Box>
        {/* fourth section --feedback map through the array end point here and update
        using state */}
      <Stack
          bg={"#053d4c"}
          py={16}
          px={8}
          spacing={{ base: 5, md: 5 }}
          align={"center"}
          direction={"column"}
        > <Text color={'#13d6a8'} fontWeight={"bold"} fontSize='2xl'>
        "Experience unparalleled care and well-being with our dedicated health services."
      </Text></Stack>
          {/*<Flex direction={"column"}>
          <Text color={'#13d6a8'} fontWeight={"semibold"} fontSize='1xl'>
              WHAT OUR HAPPY
            </Text>
            <Heading color={"white"} fontSize='2xl' fontWeight={"semibold"}>Clients Are Saying</Heading>
            
            </Flex>
          {/* <Flex justifyContent="space-between" alignItems="center" width="100%"> }
           
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign={"center"}
              maxW={"3xl"}
              fontStyle="italic"
              color={useColorModeValue("gray.400", "gray.400")}
            >
              {feedbackData[indexFeedback].description}
            </Text>
           
          {/* </Flex> }
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Icon as={AiOutlineArrowLeft} _hover={{ cursor: "pointer" }} onClick={() => {
    setIndexFeedback((indexFeedback - 1) % feedbackData.length);
  }} color={"#13d6a8"}></Icon>
          <Box textAlign={"center"}>
            <Avatar
              src={
                feedbackData[indexFeedback].image
                // "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              alt={feedbackData[indexFeedback].name}
              mb={2}
            />
  
            <Text fontWeight={600} color={"white"}>{`${feedbackData[indexFeedback].name},`}</Text>
            <Text
            
              fontSize={"sm"}
              color={useColorModeValue("gray.400", "gray.400")}
            >
              {feedbackData[indexFeedback].location}
            </Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.400", "gray.400")}
            >
              Rating:{feedbackData[indexFeedback].rating}
            </Text>
          </Box>
          <Icon _hover={{ cursor: "pointer" }} color={"#13d6a8"} as={AiOutlineArrowRight} onClick={() => {
    setIndexFeedback((indexFeedback + 1) % feedbackData.length);
  }}></Icon>
          </Flex>
        </Stack>*/}
      <Footer/>
      </>
    );
  
}