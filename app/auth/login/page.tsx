import {
  Card,
  Container,
  Heading,
  Flex,
  Box,
  Text,
  Link,
} from "@radix-ui/themes";
import SigninForm from "../../components/auth/SigninForm";
import NavLink from "next/link";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0 ">
        <Flex className="h-screen w-full items-center">
          <Card size="3" className="w-full">
            <Box className="p-7">
              <Heading>Sign In</Heading>
              <SigninForm></SigninForm>
              <Flex justify="between" my="4">
                <Text>Don't have an account?</Text>
                <Link asChild>
                  <NavLink href="/auth/register">Sign Up</NavLink>
                </Link>
              </Flex>
            </Box>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
