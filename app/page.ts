import { html } from '@webjsdev/core';

export const metadata = {
  title: 'Acme Shop',
};

export default function Home() {
  return html`
    <div class="max-w-2xl mx-auto px-6 py-24 flex flex-col gap-6">
      <h1 class="text-4xl font-bold tracking-tight m-0">Acme Shop</h1>
      <p class="text-base leading-relaxed m-0 opacity-70">
        A small storefront that Genie builds on. Every task on the board becomes a branch, a pull request and a preview here.
      </p>
      <ul class="m-0 pl-5">
        <li>Catalogue: coming soon</li>
        <li>Cart: coming soon</li>
        <li><a href="/about">About</a></li>
      </ul>
      <footer class="text-sm m-0 opacity-70">&copy; Acme Shop. Built with WebJs.</footer>
    </div>
  `;
}
