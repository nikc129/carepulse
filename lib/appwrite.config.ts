import * as sdk from 'node-appwrite';
export const PROJECT_ID = '6778e064001451dafdd3';

export const API_KEY_SECRET = 
  'standard_64393ffe987fe0eb7dd421928c54ed3ff4a8e28a8dd79785ab20af31cf4a89d0476973dd0e1a8f8b0b1e4ed7ccefcfd7716715322bd78b313b89c74380338db7d95a6b4e18e087dbfef5f35a8b4b53b084d10ec6e4f89101213d52f74589e777c218a936b54f6b6e64acb720bb8cba7db0222dd372e2e47481d97bc7be801a9c';

export const DATABASE_ID = '6778e1210039f23b355d';
export const PATIENT_COLLECTION_ID = '6797a7360012cb4a94ce';

export const DOCTOR_COLLECTION_ID = '6778e1cf00299ddba6ad';
export const APPOINTMENT_COLLECTION_ID = '6778e1ea0007b7494607';

export const BUCKET_ID: string = '6778e231000773580c9e';

export const ENDPOINT = 'https://cloud.appwrite.io/v1';

  
const client = new sdk.Client()
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY_SECRET!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);