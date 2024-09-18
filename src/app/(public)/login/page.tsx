"use client";

import signIn from "@/actions/signIn";
import { FieldInputText } from "@/components/form/FieldInputText";
import FormContainer from "@/components/form/FormContainer";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader2 } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useMutation({
    mutationFn: signIn,
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return (
    <div>
      <h1>login</h1>
      <br />
      <FormContainer
        form={form}
        onSubmit={login.mutate}
        onError={(err) => {
          console.log(err);
        }}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => <FieldInputText field={field} label="Email" placeholder="email@example.com" />}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => <FieldInputText field={field} label="Password" type="password" />}
        />

        <Button className="w-full" type="submit" disabled={login.isPending}>
          {login.isPending && <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </FormContainer>
    </div>
  );
}

//TODO add FormInputDate, FormInputNumber, FormInputFile
