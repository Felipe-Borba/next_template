import api from "@/lib/api";

interface UserSignInParams {
  email: string;
  password: string;
}
interface UserSignInResponse {
  id: number;
  name: string;
  role: "admin" | "user";
  token: string;
}
export default async function signIn(params: UserSignInParams): Promise<UserSignInResponse> {
  const response = await api.post("/user/sign-in", params);
  return response.data;
}
