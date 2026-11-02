import { db } from './connection.server.ts';
import { teamMembers } from './schema.server.ts';

const team = [
  { name: 'Ada Lovelace', role: 'Founder & CEO', bio: 'Started Acme Shop to make buying good things simple.' },
  { name: 'Grace Hopper', role: 'Head of Engineering', bio: 'Keeps the storefront fast and the deploys boring.' },
  { name: 'Alan Turing', role: 'Catalogue Lead', bio: 'Curates every product that reaches the shelf.' },
  { name: 'Margaret Hamilton', role: 'Customer Care', bio: 'Makes sure every order arrives and every question is answered.' },
];

await db.delete(teamMembers);
await db.insert(teamMembers).values(team.map((m, position) => ({ ...m, position })));
console.log(`Seeded ${team.length} team members`);
