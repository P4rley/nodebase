import { requireAuth } from "@/lib/auth-utils";
import React from "react";

const Workflow = async () => {
  await requireAuth();

  return <div>Workflow Page</div>;
};

export default Workflow;
