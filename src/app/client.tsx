"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());

  return (
    <div>
      <h1>Client Component</h1>
      <pre>{JSON.stringify(users)}</pre>
    </div>
  );
};

export default Client;
