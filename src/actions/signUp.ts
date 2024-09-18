import api from "@/lib/api";

interface UserSignUpParams {
  email: string;
  name: string;
  password: string;
}
interface UserSignUpResponse {
  id: number;
  name: string;
  role: "admin" | "user";
  token: string;
}
export default async function signUp(params: UserSignUpParams): Promise<UserSignUpResponse> {
  const response = await api.post("/user/sign-up", params);
  return response.data;
}
