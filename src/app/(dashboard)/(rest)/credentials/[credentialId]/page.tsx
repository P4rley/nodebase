import { requireAuth } from "@/lib/auth-utils";
import React from "react";

interface Props {
  params: Promise<{ credentialId: string }>;
}
const Page = async ({ params }: Props) => {
  await requireAuth();
  const { credentialId } = await params;

  return <div>Credential id: {credentialId}</div>;
};

export default Page;
