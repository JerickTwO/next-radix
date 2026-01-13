import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";

function SignupForm() {
  return (
    <Flex direction="column" gap="2" my="2">
      <Text as="label" size="2" weight="bold" htmlFor="name">
        Name
      </Text>
      <TextField.Root type="text" placeholder="Name" autoFocus>
        <TextField.Slot>
          <PersonIcon></PersonIcon>
        </TextField.Slot>
      </TextField.Root>

      <Text as="label" size="2" weight="bold" htmlFor="email">
        Email
      </Text>
      <TextField.Root type="email" placeholder="email@ejemplo.com" autoFocus>
        <TextField.Slot>
          <EnvelopeClosedIcon></EnvelopeClosedIcon>
        </TextField.Slot>
      </TextField.Root>

      <Text as="label" size="2" weight="bold" htmlFor="password">
        Password
      </Text>
      <TextField.Root
        id="password"
        type="password"
        placeholder="*******"
        autoFocus
      >
        <TextField.Slot>
          <LockClosedIcon></LockClosedIcon>
        </TextField.Slot>
      </TextField.Root>

      <Button>Sign In</Button>
    </Flex>
  );
}

export default SignupForm;
