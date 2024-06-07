import { config } from 'dotenv';
config();

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // Ensure correct relative path

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { schema });

// Example usage
(async () => {
    try {
        // Insert a new idea
        await db.insert(schema.Ideas).values({
            content: 'New Idea Content',
            username: 'user123',
            vote: 0,
            createdAt: new Date().toISOString()
        });

        console.log('New idea inserted');
    } catch (error) {
        console.error('Error inserting idea:', error);
    }
})();
