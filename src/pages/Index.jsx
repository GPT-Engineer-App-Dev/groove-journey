import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { FaMusic, FaTicketAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="gray.800" minH="100vh" p={5} color="white">
      <Flex direction="column" align="center" justify="center" gap={6}>
        <Heading as="h1" size="2xl" mt={10}>
          The Rock Legends Tour
        </Heading>
        <Text fontSize="xl">
          Join us on the most epic tour across the globe. Experience the magic live!
        </Text>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Band Image"
        />
        <Button rightIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
          Buy Tickets
        </Button>
        <Flex gap={2} mt={5}>
          <FaMusic />
          <Text>Upcoming Shows</Text>
        </Flex>
        <Text>
          Stay tuned for dates and cities for our upcoming shows!
        </Text>
      </Flex>
    </Box>
  );
};

export default Index;