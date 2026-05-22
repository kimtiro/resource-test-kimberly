const inquiries = new Set([
  "Schedule a tour",
  "Request pricing",
  "Ask about floorplans",
  "General question"
]);

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Only POST requests are supported." });
  }

  const { fullName = "", email = "", inquiryType = "", message = "" } = request.body || {};
  const errors = [];

  if (fullName.trim().length < 2) errors.push("Full name is required.");
  if (!isEmail(email.trim())) errors.push("A valid email address is required.");
  if (!inquiries.has(inquiryType)) errors.push("Please choose a valid inquiry type.");
  if (message.trim().length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length) {
    return response.status(422).json({ message: errors.join(" ") });
  }

  return response.status(200).json({
    message: "Thank you. Your inquiry was submitted successfully."
  });
}
