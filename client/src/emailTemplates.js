/**
 * HTML email templates for Admin and User (EmailJS).
 * Design aligned with homepage: #FF6F00, #333333, #FFF8E1, Cinzel/Outfit style.
 */

const packageNames = {
  Insight: "Insight (₹599)",
  Destiny: "Destiny (₹1,499)",
  Oracle: "Oracle (₹999)"
};

const packageDescriptions = {
  Insight: "Your Personality Report with Major Lines Analysis",
  Destiny: "Complete Destiny Analysis with Comprehensive Palm Reading",
  Oracle: "Numerology Report with 10-Year Timeline"
};

/** Admin email: new palm reading request (to Beereshjiawasthi@gmail.com) */
export function getAdminEmailTemplate(data, imageBase64) {
  const requestDate = new Date().toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short"
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Palm Reading Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #FF6F00 0%, #FF8C42 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🔮 New Palm Reading Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                You have received a new palm reading request. Here are the details:
              </p>
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #FF6F00; font-size: 14px;">Full Name:</strong>
                    <span style="color: #333333; font-size: 14px; margin-left: 10px;">${escapeHtml(data.fullName)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #FF6F00; font-size: 14px;">Phone Number:</strong>
                    <span style="color: #333333; font-size: 14px; margin-left: 10px;">${escapeHtml(data.phoneNumber)}</span>
                  </td>
                </tr>
                ${data.email ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #FF6F00; font-size: 14px;">Email Address:</strong>
                    <span style="color: #333333; font-size: 14px; margin-left: 10px;">${escapeHtml(data.email)}</span>
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #FF6F00; font-size: 14px;">Date of Birth:</strong>
                    <span style="color: #333333; font-size: 14px; margin-left: 10px;">${escapeHtml(data.dateOfBirth)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #FF6F00; font-size: 14px;">Selected Package:</strong>
                    <span style="color: #333333; font-size: 14px; margin-left: 10px; font-weight: bold;">${packageNames[data.package] || escapeHtml(data.package)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #FF6F00; font-size: 14px;">Request Date:</strong>
                    <span style="color: #333333; font-size: 14px; margin-left: 10px;">${requestDate}</span>
                  </td>
                </tr>
              </table>
              ${imageBase64 ? `
              <div style="margin-top: 30px; padding: 20px; background-color: #FFF8E1; border-radius: 8px; border: 2px dashed #FF6F00;">
                <p style="margin: 0 0 15px 0; color: #333333; font-size: 14px; font-weight: bold;">📸 Palm Image:</p>
                <img src="${imageBase64}" alt="Palm Image" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" />
              </div>
              ` : ""}
              <div style="margin-top: 30px; padding: 20px; background-color: #FFF8E1; border-radius: 8px; border-left: 4px solid #FF6F00;">
                <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.6;">
                  <strong>Next Steps:</strong><br>
                  Please review the palm image and prepare the analysis report according to the selected package. The customer is eagerly waiting for their personalized reading.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #333333; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="margin: 0; color: #ffffff; font-size: 12px;">
                This is an automated notification from your Astrology Service System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/** User email: thank you / confirmation (to customer) */
export function getUserEmailTemplate(data) {
  const requestDate = new Date().toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short"
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #FF6F00 0%, #FF8C42 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">✨ Thank You, ${escapeHtml(data.fullName)}! ✨</h1>
              <p style="margin: 15px 0 0 0; color: #ffffff; font-size: 18px; opacity: 0.95;">Your Journey to Self-Discovery Begins Now</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Dear <strong>${escapeHtml(data.fullName)}</strong>,
              </p>
              <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for choosing our Vedic Palm Reading service! We're excited to help you unlock the secrets of your destiny.
              </p>
              <div style="background-color: #FFF8E1; padding: 25px; border-radius: 8px; border-left: 4px solid #FF6F00; margin-bottom: 30px;">
                <h2 style="margin: 0 0 20px 0; color: #FF6F00; font-size: 20px;">📋 Your Request Summary</h2>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #333333; font-size: 14px;">
                      <strong>Selected Package:</strong> ${packageNames[data.package] || escapeHtml(data.package)}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666666; font-size: 13px;">
                      ${packageDescriptions[data.package] || "Comprehensive palm reading analysis"}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #333333; font-size: 14px;">
                      <strong>Date of Birth:</strong> ${escapeHtml(data.dateOfBirth)}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #333333; font-size: 14px;">
                      <strong>Request Date:</strong> ${requestDate}
                    </td>
                  </tr>
                </table>
              </div>
              <div style="background-color: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 15px 0; color: #333333; font-size: 18px;">🔮 What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px; color: #333333; font-size: 14px; line-height: 1.8;">
                  <li style="margin-bottom: 10px;">Our expert astrologer will analyze your palm image and birth details</li>
                  <li style="margin-bottom: 10px;">A comprehensive report will be prepared based on your selected package</li>
                  <li style="margin-bottom: 10px;">You'll receive your personalized report via email within 24-48 hours</li>
                  <li>For any queries, feel free to contact us via WhatsApp</li>
                </ol>
              </div>
              <div style="text-align: center; margin: 30px 0;">
                <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; font-weight: bold;">
                  We're honored to be part of your spiritual journey! 🙏
                </p>
                <p style="margin: 0; color: #666666; font-size: 14px;">
                  Your destiny awaits...
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #333333; padding: 30px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px; font-weight: bold;">
                Astrologer - Satyam Awasthi
              </p>
              <p style="margin: 0; color: #ffffff; font-size: 12px; opacity: 0.8;">
                Unlocking destinies through Vedic wisdom
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(text) {
  if (text == null) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
