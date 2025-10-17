// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import Client from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Page() {
  const queryClient = getQueryClient();
  // const trpc = useTRPC();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  // const { data: users } = useQuery(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
