"use client";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!res?.ok) {
      console.log(res);
    }
    router.push("/dashboard");
  });
  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2" my="2">
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
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
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
              message: "Password is required",
              value: true,
            },
            minLength: {
              message: "Password must be at least 8 characters",
              value: 8,
            },
          }}
          render={({ field }) => (
            <TextField.Root type="password" placeholder="*******" {...field}>
              <TextField.Slot>
                <LockClosedIcon />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
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

export default SigninForm;
