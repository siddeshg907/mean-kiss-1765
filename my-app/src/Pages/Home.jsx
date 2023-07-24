import { Flex,Text,Box,Button, Slider } from '@chakra-ui/react'
import AboutLanding from '../components/AboutLanding'
import ServicesLanding from '../components/ServicesLanding'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiFirstAid} from 'react-icons/bi'
import AboutMedicalLanding from '../components/AboutOurMedicalLanding';
import TipsLanding from '../components/TipsLanding';
import ApptLanding from '../components/ApptLanding';
import NewsLanding from '../components/NewsLanding';
import Footer from '../components/Footer';
import TopGrid from '../components/LandingTopGrid';
import Carousel from '../components/SliderLanding';
import {
  Stack,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';
function Home(){   

    return(

          
        <Box
        maxWidth="100%" mx="auto"
        w={"full"}
        overflow="hidden"
       // p={5}
       position="relative"
     >
      
   <Box
           position="absolute"
           top={0}
           left={0}
           right={0}
           w="50%"
           
           
   />
   <Box>
   <Box position="relative" height="100%">
   
           {/* <Box
             position="absolute"
             top={0}
             left={0}
             right={0}
              bottom={0}
             transform="skewX(10deg) translateX(-50%)"
             bg= 'rgba(36, 83, 99, 0.8)'
          
             transformOrigin="top left"
           /> */}
       {/* // ends here  */}
       <Box>
        {/* carousel here? */}
        <Flex
        >
          <Carousel/>
    {/* <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://plus.unsplash.com/premium_photo-1661627589302-21c86f989f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}> */}
      {/* <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}> */}
       
          <Box position="absolute" zIndex={5}  
left={0} right={0} p={4}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} alignSelf={'flex-start'} textAlign={"left"} mt={250} bgColor="white" p="2%" marginLeft="2%" borderRadius="5%">
        
          <Text
         
            color={'black'}
           
            fontWeight={"semibold"}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}>
             BEST MEDICAL CARE FOR YOUR FAMILY
          </Text>
          
          
<Text color={'#37E6E2'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
Helping You Stay Happy One
          </Text>
          <Text color={"#8b8986"} paddingRight="20%">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis nibh eget augue eleifend semper. Praesent et elit vel metus convallis</Text>
          <Stack direction={{"base":"column","sm":"column","md":"row"}}>
          <Button borderRadius={0} color={"white"}  bg="rgba(1, 213, 162, 1)" variant='solid' opacity={1} size={'lg'} fontSize={'xs'}>GET STARTED</Button>
                <Button borderRadius={0} color={"white"} variant='outline' colorScheme='white' opacity={1} size={'lg'} fontSize={'xs'}>MAKE AN APPOINTMENT</Button>
          </Stack>
        
        </Stack>
        </Box>
       
      {/* </VStack> */}
    </Flex>
 
  </Box>
  
  </Box>
{/*<Box position={"relative"} zIndex={25}
>
  <Box>
    <TopGrid position="absolute" zIndex={25}
    />
    </Box>
    </Box>*/}
    </Box>

      
      
      
      
      <Box>
        <AboutLanding />
      </Box>
      <Box bg={"#053d4c"} padding={10}>
        <AboutMedicalLanding/>
      </Box>
      <Box>
        <ServicesLanding/>
      </Box>
      <Box height={"300px"} bg={"teal"}>
      <Flex
    height="100%"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <ApptLanding />
  </Flex>
      </Box>
      
      <Box>
        <Footer/>
        </Box>
    
   </Box>
    )
}

export default Home