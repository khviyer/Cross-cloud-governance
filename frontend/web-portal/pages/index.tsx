import { Box, Heading, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>AI Analytics Platform</Heading>
      <Button colorScheme="teal" size="lg">Go to Dashboard</Button>
    </Box>
  )
}