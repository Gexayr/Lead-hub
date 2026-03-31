import { logger } from "./logger";

const BOT_TOKEN = process.env.TG_BOT_TOKEN;
const CHAT_ID = process.env.TG_CHAT_ID;

export async function sendTelegramNotification(lead: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string | null;
  message?: string | null;
}): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) {
    logger.warn("TG_BOT_TOKEN or TG_CHAT_ID not set — skipping Telegram notification");
    return;
  }

  const text = [
    `🔥 <b>New Demo Request</b>`,
    ``,
    `👤 <b>Name:</b> ${lead.firstName} ${lead.lastName}`,
    `📧 <b>Email:</b> ${lead.email}`,
    `🏢 <b>Company:</b> ${lead.company}`,
    lead.phone ? `📞 <b>Phone:</b> ${lead.phone}` : null,
    lead.message ? `💬 <b>Message:</b>\n${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      logger.error({ status: res.status, body }, "Telegram API error");
    } else {
      logger.info("Telegram notification sent successfully");
    }
  } catch (err) {
    logger.error({ err }, "Failed to send Telegram notification");
  }
}
