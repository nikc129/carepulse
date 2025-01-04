import { z } from "zod";
const UserFormValidation = z.object({
    name: z.string().min(2, {
    message: "must be 2 characters or more" })
    .max(50,  "must be 50 characters or less"),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\d{10,15}$/.test(phone), 'invalid phone number'),
  
});
export default UserFormValidation;