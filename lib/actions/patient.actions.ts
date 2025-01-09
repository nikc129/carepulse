import { ID, Query } from "node-appwrite";
import {
 
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

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
