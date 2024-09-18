import { ControllerRenderProps, Path } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input, InputProps } from "../ui/input";

interface Props<T extends Object, A extends Path<T>> extends InputProps {
  field: ControllerRenderProps<T, A>;
  label?: string;
}
export function FieldInputText<T extends Object, A extends Path<T>>({ label, field, ...rest }: Props<T, A>) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input {...rest} {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
