/**
 * EmailJS integration: send admin + user emails after payment.
 * Requires .env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY,
 * VITE_EMAILJS_ADMIN_TEMPLATE_ID, VITE_EMAILJS_USER_TEMPLATE_ID
 * Admin template: To = Beereshjiawasthi@gmail.com, Content = {{html_content}}, Subject = {{subject}}
 * User template: To = {{user_email}}, Content = {{html_content}}, Subject = {{subject}}
 */

import emailjs from "@emailjs/browser";
import { getAdminEmailTemplate, getUserEmailTemplate } from "./emailTemplates.js";

const ADMIN_EMAIL = "Beereshjiawasthi@gmail.com";

function getConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
  const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
  return { serviceId, publicKey, adminTemplateId, userTemplateId };
}

function isConfigured() {
  const { serviceId, publicKey, adminTemplateId, userTemplateId } = getConfig();
  return !!(serviceId && publicKey && adminTemplateId && userTemplateId);
}

/**
 * Send admin notification email (new palm reading request).
 * @param {Object} data - { fullName, phoneNumber, email?, dateOfBirth, package }
 * @param {string|null} imageBase64 - optional data URL of palm image
 */
export async function sendAdminEmail(data, imageBase64 = null) {
  const { serviceId, publicKey, adminTemplateId } = getConfig();
  if (!serviceId || !publicKey || !adminTemplateId) {
    console.warn("EmailJS admin config missing. Skip sending admin email.");
    return;
  }
  const html_content = getAdminEmailTemplate(data, imageBase64);
  await emailjs.send(
    serviceId,
    adminTemplateId,
    {
      to_email: ADMIN_EMAIL,
      subject: `New Palm Reading Request - ${data.fullName}`,
      html_content
    },
    { publicKey }
  );
}

/**
 * Send user confirmation email (only if user provided email).
 * @param {Object} data - same as admin
 */
export async function sendUserEmail(data) {
  if (!data.email || !data.email.trim()) return;
  const { serviceId, publicKey, userTemplateId } = getConfig();
  if (!serviceId || !publicKey || !userTemplateId) {
    console.warn("EmailJS user config missing. Skip sending user email.");
    return;
  }
  const html_content = getUserEmailTemplate(data);
  await emailjs.send(
    serviceId,
    userTemplateId,
    {
      user_email: data.email.trim(),
      subject: `Thank you for your request, ${data.fullName}!`,
      html_content
    },
    { publicKey }
  );
}

/**
 * Send both admin and user emails. Call this on /thank-you when payment is done.
 * @param {Object} data - form data
 * @param {string|null} imageBase64 - optional palm image data URL
 */
export async function sendPostPaymentEmails(data, imageBase64 = null) {
  if (!isConfigured()) {
    console.warn("EmailJS not configured. Add VITE_EMAILJS_* to .env");
    return;
  }
  try {
    await sendAdminEmail(data, imageBase64);
    await sendUserEmail(data);
  } catch (err) {
    console.error("EmailJS send failed:", err);
    throw err;
  }
}

export { isConfigured };
