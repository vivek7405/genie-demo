import { html } from '@webjsdev/core';

export const metadata = {
  title: 'About',
};

export default function About() {
  return html`
    <div class="max-w-2xl mx-auto px-6 py-24 flex flex-col gap-6">
      <h1 class="text-4xl font-bold tracking-tight m-0">About</h1>
      <p class="text-base leading-relaxed m-0 opacity-70">This is just a Genie Demo app.</p>
      <p class="text-base leading-relaxed m-0 opacity-70">Trying to check if Genie is able to add an about page.</p>
    </div>
  `;
}
