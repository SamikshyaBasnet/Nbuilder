// Google Analytics tracking functions

// Track page views
export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track phone call clicks
export const trackPhoneClick = (phoneNumber) => {
  event({
    action: "phone_click",
    category: "Contact",
    label: phoneNumber,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: "whatsapp_click",
    category: "Contact",
    label: "WhatsApp Button",
  });
};

// Track email clicks
export const trackEmailClick = () => {
  event({
    action: "email_click",
    category: "Contact",
    label: "Email Button",
  });
};

// Track service interest
export const trackServiceView = (serviceName) => {
  event({
    action: "service_view",
    category: "Services",
    label: serviceName,
  });
};

// Track project interest
export const trackProjectView = (projectName) => {
  event({
    action: "project_view",
    category: "Projects",
    label: projectName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  event({
    action: "button_click",
    category: "Engagement",
    label: buttonName,
  });
};
