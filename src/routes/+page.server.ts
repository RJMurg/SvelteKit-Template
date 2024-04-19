import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load = (async () => {
	return {
		hello: 'hello world!'
	};
}) satisfies PageServerLoad;
