import { asc } from 'drizzle-orm';
import { db } from '#db/connection.server.ts';
import { teamMembers } from '#db/schema.server.ts';
import type { TeamMember } from '#db/schema.server.ts';

export async function listTeam(): Promise<TeamMember[]> {
  return db.select().from(teamMembers).orderBy(asc(teamMembers.position), asc(teamMembers.id));
}
