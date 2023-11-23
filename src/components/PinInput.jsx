import { PinInput, PinInputField,HStack,Box,Text } from '@chakra-ui/react'
import { useState,useEffect } from 'react';



export default function OTP({generatedOTP,handleOTPVerification,misMatch}){

  const [pinValues, setPinValues] = useState(['', '', '', '']);
  

  
  const handlePinChange = (value, index) => {
    const updatedPinValues = [...pinValues];
    updatedPinValues[index] = value;

  setPinValues(updatedPinValues)
  };
 
  useEffect(() => {
    const enteredOTP = pinValues.join('');
    if (pinValues.every((value) => value !== '')) {
      setPinValues(['', '', '', '']);
  
      handleOTPVerification(enteredOTP);
    }
  }, [pinValues, handleOTPVerification]);


  return(
    <>
    <Box mb={2}>
      <Text align="center">Your OTP is: {generatedOTP}</Text>
    </Box>
<HStack>
  <PinInput otp mask>
  {pinValues.map((value, index) => (
    <PinInputField
      key={`${index}-${value}`}
      value={value}
      onChange={(e) => handlePinChange(e.target.value, index)}
    />
  ))}
  </PinInput>
</HStack>
</>
  )
}