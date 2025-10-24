import React from "react";

interface Props {
  params: Promise<{ workflowId: string }>;
}
const Page = async ({ params }: Props) => {
  const { workflowId } = await params;

  return <div>Workflow id: {workflowId}</div>;
};

export default Page;
