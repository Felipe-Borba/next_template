import { PropsWithChildren } from "react";
import { FieldErrors, UseFormReturn } from "react-hook-form";
import { Form } from "../ui/form";

interface Props<T extends Object> extends PropsWithChildren {
  onSubmit: (data: T) => void;
  onError?: (data: FieldErrors<T>) => void;
  form: UseFormReturn<T, any, undefined>;
}
export default function FormContainer<T extends Object>({ children, form, onSubmit, onError }: Props<T>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)}>{children}</form>
    </Form>
  );
}
