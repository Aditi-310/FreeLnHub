import React from "react";
import ProposalForm from "../components/ProposalForm"; // adjust path if needed

export const Proposal = () => {

     console.log("Proposal page loaded");
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Submit Your Project Proposal</h1>
      <ProposalForm />
    </div>
  );
};
