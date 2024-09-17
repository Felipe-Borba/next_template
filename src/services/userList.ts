import api from "@/lib/api";
import { Pageable } from "./Pageable";

interface UserListParams {}
interface UserListResponse {
  id: number;
  name: string;
}
export default async function userList(
  params: UserListParams
): Promise<Pageable<UserListResponse>> {
  const response = await api.get("/", { params });
  return response.data;
}
