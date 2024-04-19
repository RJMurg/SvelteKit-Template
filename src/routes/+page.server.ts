import { fail, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event: Event) => {
	if (!event.locals?.user) redirect(302, '/login');

	return {
		hello: 'hello world!',
		username: event.locals?.user?.username
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/login');
	}
};
