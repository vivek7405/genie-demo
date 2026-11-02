import { html } from '@webjsdev/core';

export const metadata = {
  title: 'Contact | Acme Shop',
  description: 'Get in touch with Acme Shop support.',
};

const SUPPORT_EMAIL = 'support@acmeshop.example';

export default function Contact() {
  return html`
    <div class="flex flex-col gap-6">
      <h1 class="text-4xl font-bold tracking-tight m-0">Contact us</h1>
      <p class="text-base leading-relaxed m-0 opacity-70">
        Questions about an order or the shop? Our support team is happy to help.
      </p>
      <p class="m-0">
        Email us at
        <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.
      </p>
    </div>
  `;
}
