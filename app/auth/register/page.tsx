import {
  Card,
  Container,
  Heading,
  Flex,
  Box,
  Text,
  Link,
} from "@radix-ui/themes";
import SignupForm from "../../components/auth/SignupForm";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0 ">
        <Flex className="h-screen w-full items-center">
          <Card size="3" className="w-full">
            <Box className="p-7">
              <Heading>Sign Up</Heading>
              <SignupForm></SignupForm>
              <Flex justify="between" my="4">
                <Text>Already have an account?</Text>
                <Link asChild>
                  <NavLink href="/auth/login">Sign In</NavLink>
                </Link>
              </Flex>
            </Box>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
