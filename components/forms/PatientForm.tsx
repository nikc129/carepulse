"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form
} from "@/components/ui/form";
import CustomFormField from "./CustomFormField";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

// Define the form schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PatientForm = () => {
  // Initialize useForm with zodResolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // Define the submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
      <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>
        <CustomFormField 
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="full name"
          placeholder="John Doe"
        
          iconSrc="/assets/icons/user.svg"
          iconAlt="User icon"

        />
        <CustomFormField 
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="email"
          placeholder="JohnDoe@gmail"
        
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"

        />
         <CustomFormField 
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="phone nu,ber"
          placeholder="(123) 456-7890"
        
        

        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
