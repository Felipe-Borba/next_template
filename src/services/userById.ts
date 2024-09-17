import api from "@/lib/api";

interface UserInsertParams {
  id: number;
}
interface UserInsertResponse {
  id: number;
  name: string;
}
export default async function userInsert(
  params: UserInsertParams
): Promise<UserInsertResponse> {
  const response = await api.get(`/user/${params.id}`);
  return response.data;
}
