import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define schemas for sign-in and sign-up forms
const signInSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters").max(50),
  password: z.string().min(5, "Password must be at least 5 characters").max(50),
});

const signUpSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters").max(50),
  confirmPassword: z.string().min(5, "Password must be at least 5 characters").max(50),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export function SignForm({ type }: { type: "sign-in" | "sign-up" }) {
  const schema = type === "sign-in" ? signInSchema : signUpSchema;

  // Define the form
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      ...(type === "sign-up" && { email: "", confirmPassword: "" }),
    },
  });

  // Submit handler
  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("Form values:", values);
  };

  // Field definitions
  const fields = [
    { name: "username", label: "Username", placeholder: "Enter your username" },
    ...(type === "sign-up"
      ? [
          { name: "email", label: "Email", placeholder: "Enter your email" },
          { name: "password", label: "Password", placeholder: "Enter your password" },
          { name: "confirmPassword", label: "Repeat Password", placeholder: "Re-enter your password" },
        ]
      : [{ name: "password", label: "Password", placeholder: "Enter your password" }]),
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof z.infer<typeof schema>}
            render={({ field: inputField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input placeholder={field.placeholder} {...inputField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">{type === "sign-in" ? "Sign In" : "Sign Up"}</Button>
      </form>
    </Form>
  );
}

export default SignForm;
