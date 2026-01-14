"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";

function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2" my="2">
        <Text as="label" size="2" weight="bold" htmlFor="name">
          Name
        </Text>

        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              message: "Name is required",
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="text"
                placeholder="Name"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        ></Controller>
        {errors.name && (
          <Text size="1" color="red">
            {errors.name?.message}
          </Text>
        )}
        <Text as="label" size="2" weight="bold" htmlFor="email">
          Email
        </Text>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: "Email is required",
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="email"
                placeholder="email@example.com"
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon></EnvelopeClosedIcon>
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        ></Controller>
        {errors.email && (
          <Text size="1" color="red">
            {errors.email.message}
          </Text>
        )}
        <Text as="label" size="2" weight="bold" htmlFor="password">
          Password
        </Text>

        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "Password is Required",
              value: true,
            },
            minLength: {
              message: "Password must be a least 8 characters",
              value: 8,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                id="password"
                type="password"
                placeholder="*******"
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon></LockClosedIcon>
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        ></Controller>
        {errors.password && (
          <Text size="1" color="red">
            {errors.password.message}
          </Text>
        )}
        <Button type="submit">Sign In</Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
