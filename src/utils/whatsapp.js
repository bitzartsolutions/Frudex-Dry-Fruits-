const enquiryNumber = '918129555591';

export function submitToWhatsApp(event, setSubmitted) {
  event.preventDefault();
  const form = event.target instanceof HTMLFormElement ? event.target : event.currentTarget;
  const formData = Object.fromEntries(new FormData(form));
  const message = Object.entries(formData)
    .filter(([, value]) => value)
    .map(([field, value]) => `${field}: ${value}`)
    .join('\n');

  const url = `https://wa.me/${enquiryNumber}?text=${encodeURIComponent(`New Frudex enquiry\n\n${message}`)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  if (setSubmitted) setSubmitted(true);
}
