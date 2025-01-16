"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import UserFormValidation from "@/lib/validation";
import {
  Form
} from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
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


const PatientForm = () => {
  const router = useRouter();
  // Initialize useForm with zodResolver
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Define the submit handler
  const onSubmit = async ({name,email,phone}: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    try{
     const userData= {name,email,phone};
     const user =await createUser(userData);
     console.log("done`1")
     if(user){
       router.push(`/patient/${user.$id}/register`);
     console.log("done`2")
    }
    console.log("done`3")
    } catch (error) {
      console.log(error)
    }
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
          label="phone number"
          placeholder="(123) 456-7890"      
        

        />
        <SubmitButton isLoading={isLoading} >Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;

