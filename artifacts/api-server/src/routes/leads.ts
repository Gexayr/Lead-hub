import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { leadsTable, insertLeadSchema } from "@workspace/db/schema";
import { desc } from "drizzle-orm";
import { sendTelegramNotification } from "../lib/telegram";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  const parsed = insertLeadSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten(),
    });
    return;
  }

  try {
    const [lead] = await db
      .insert(leadsTable)
      .values(parsed.data)
      .returning();

    await sendTelegramNotification(lead);

    res.status(201).json(lead);
  } catch (err) {
    req.log.error({ err }, "Failed to save lead");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/leads", async (req, res) => {
  try {
    const leads = await db
      .select()
      .from(leadsTable)
      .orderBy(desc(leadsTable.createdAt));
    res.json(leads);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch leads");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
