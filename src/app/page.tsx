import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

export default async function Page() {
  await requireAuth();

  const data = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-6">
      Protected Server Component
      <div>{JSON.stringify(data)}</div>
      <LogoutButton />
    </div>
  );
}
