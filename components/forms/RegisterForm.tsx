"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import UserFormValidation from "@/lib/validation";
import {
  Form,
  FormControl
} from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { GenderOptions } from "@/constants";
import { Label } from "../ui/label";


// Define the form schema


const RegisterForm = ({ user }: { user: User }) => {
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
  const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);
      console.log("done`1")
      if (user) {
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
        <section className="space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <section className="space-y-4">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

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
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email address"
            placeholder="johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="Date of birth"
          />

          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option, i) => (
                    <div key={option + i} className="radio-group">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <SubmitButton isLoading={isLoading} >Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;

