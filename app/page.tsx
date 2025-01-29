import { Button } from "@/components/ui/button";
import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import PasskeyModal from "@/components/PasskeyModal";
export const{
  PROJECT_ID,
  API_KEY_SECRET,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT,
}=process.env;

export default function Home({ searchParams }: { searchParams: { admin?: string } }) {
  const isAdmin = searchParams?.admin === "true"; 

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal/> }
      <section className="remove-scrollbar container my-auto">
        
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={150}
            alt="patient"
            className="mb-12 h-10 w-fit"
            priority // Helps with SSR consistency
          />
          <div >
           <PatientForm  />

          </div>
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={800}
        width={800}
        alt="patient"
        className="side-img max-w-[50%]"
        priority
      />
    </div>
  );
}
