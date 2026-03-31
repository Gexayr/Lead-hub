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
      const res = await fetch(`${import.meta.env.BASE_URL}api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(err.error ?? "Failed to submit demo request");
      }

      return res.json();
    },
  });
}
