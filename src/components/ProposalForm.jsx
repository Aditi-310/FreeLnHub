import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProposalForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectTitle: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/proposals", form);
      toast.success("✅ Proposal submitted successfully!");
      setForm({
        name: "",
        email: "",
        company: "",
        projectTitle: "",
        budget: "",
        description: "",
      });
    } catch (err) {
      console.error("Error submitting proposal", err);
      toast.error("❌ Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-2 border rounded" />
      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company Name (Optional)" className="w-full p-2 border rounded" />
      <input type="text" name="projectTitle" value={form.projectTitle} onChange={handleChange} placeholder="Project Title" required className="w-full p-2 border rounded" />
      <input type="text" name="budget" value={form.budget} onChange={handleChange} placeholder="Estimated Budget" className="w-full p-2 border rounded" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe your project..." rows="4" required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ProposalForm;
