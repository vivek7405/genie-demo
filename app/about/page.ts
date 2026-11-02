import { html } from '@webjsdev/core';
import { listTeam } from '#modules/team/queries/list-team.server.ts';

export const metadata = {
  title: 'About | Acme Shop',
  description: 'Meet the team behind Acme Shop.',
};

export default async function About() {
  const team = await listTeam();
  return html`
    <div class="flex flex-col gap-6">
      <h1 class="text-4xl font-bold tracking-tight m-0">About Acme Shop</h1>
      <p class="text-base leading-relaxed m-0 opacity-70">Meet the people behind the shop.</p>
      <h2 class="text-2xl font-semibold m-0">Our team</h2>
      ${team.length === 0
        ? html`<p class="m-0 opacity-70">Team members coming soon.</p>`
        : html`<ul class="m-0 p-0 list-none grid gap-4 sm:grid-cols-2">
            ${team.map((m) => html`
              <li class="rounded-lg border border-current/20 p-4">
                <h3 class="m-0 text-lg font-semibold">${m.name}</h3>
                <p class="m-0 text-sm opacity-70">${m.role}</p>
                <p class="mt-2 mb-0">${m.bio}</p>
              </li>`)}
          </ul>`}
    </div>
  `;
}
