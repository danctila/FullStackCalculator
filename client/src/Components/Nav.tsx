import { Center, Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <>
      <Center w="100%" h="80px" bg="#A29165" pos="fixed" zIndex={200}>
        <Text fontSize="30" fontWeight="semibold" color="#214D7D">
          NHS Grade Calculator
        </Text>
      </Center>
    </>
  );
};

export default Nav;
