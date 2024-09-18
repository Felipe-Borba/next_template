import api from "@/lib/api";

interface UserSignInParams {
  email: string;
  password: string;
}
export interface UserSignInResponse {
  id: number;
  name: string;
  role: "admin" | "user";
  token: string;
}
export default async function signIn(params: UserSignInParams): Promise<UserSignInResponse> {
  const response = await api.post("/auth/sign-in", params);
  return response.data;
}
