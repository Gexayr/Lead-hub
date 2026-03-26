import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const demoFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type DemoFormInput = z.infer<typeof demoFormSchema>;

export function useSubmitDemo() {
  return useMutation({
    mutationFn: async (data: DemoFormInput) => {
      // Simulate an API call to submit the demo request
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // In a real app, you would make a fetch call here:
      // const res = await fetch('/api/demo', { method: 'POST', body: JSON.stringify(data) });
      // if (!res.ok) throw new Error("Failed to submit");
      // return res.json();
      
      return { success: true, message: "Demo requested successfully" };
    }
  });
}
