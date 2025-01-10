import { ID, Query } from "node-appwrite";
import {
 
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";
// export const{
//     PROJECT_ID,
//     API_KEY_SECRET,
//     DATABASE_ID,
//     PATIENT_COLLECTION_ID,
//     DOCTOR_COLLECTION_ID,
//     APPOINTMENT_COLLECTION_ID,
//     NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,
//     NEXT_PUBLIC_ENDPOINT,
// }=process.env;
const PROJECT_ID= '6778e064001451dafdd3'

const API_KEY_SECRET= 'standard_64393ffe987fe0eb7dd421928c54ed3ff4a8e28a8dd79785ab20af31cf4a89d0476973dd0e1a8f8b0b1e4ed7ccefcfd7716715322bd78b313b89c74380338db7d95a6b4e18e087dbfef5f35a8b4b53b084d10ec6e4f89101213d52f74589e777c218a936b54f6b6e64acb720bb8cba7db0222dd372e2e47481d97bc7be801a9c'
const DATABASE_ID= '6778e1210039f23b355d'
const PATIENT_COLLECTION_ID= '6778e1a5002b1ba8ee3c'

const DOCTOR_COLLECTION_ID= "6778e1cf00299ddba6ad"
const APPOINTMENT_COLLECTION_ID= "6778e1ea0007b7494607"

const NEXT_PUBLIC_BUCKET_ID= "6778e231000773580c9e"

const NEXT_PUBLIC_ENDPOINT= `https://cloud.appwrite.io/v1`
    

export const createUser = async (user: CreateUserParams) => {
  try {

   
    // Validate user input
    if (!user.email || !user.email.includes("@")) {
      throw new Error(`Invalid email: ${user.email}`);
    }

    if (user.phone && !/^\+?\d{10,15}$/.test(user.phone)) {
      throw new Error(`Invalid phone number: ${user.phone}`);
    }

    // Create new user
    console.log("Generated unique ID:", ID.unique());

    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone || undefined, // Optional phone
      undefined, // Optional password
      user.name || undefined // Optional name
    );
    console.log("New user created:", newUser);

    return parseStringify(newUser);
  } catch (error: any) {
    if (error?.code === 409) {
      // Handle user conflict
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      if (existingUser?.users?.length > 0) {
        console.log("User already exists:", existingUser.users[0]);
        return existingUser.users[0];
      }
    }

    console.error("An error occurred while creating a new user:", error);
    throw error; // Re-throw to propagate the error
  }
};
