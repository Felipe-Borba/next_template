import api from "@/lib/api";

interface UserInsertParams {
  name: string;
}
interface UserInsertResponse {
  id: number;
  name: string;
}
export default async function userInsert(
  params: UserInsertParams
): Promise<UserInsertResponse> {
  const response = await api.post("/user", params);
  return response.data;
}
