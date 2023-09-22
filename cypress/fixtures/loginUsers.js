const randomNumber = Math.floor(Math.random() * 1000);

import { uiPassword } from '../support/UI/helper';

export const validUser = {
	email: 'lambdatestnew@yopmail.com',
	password: uiPassword,
};

export const invalidUser = {
	email: `fake${randomNumber}@fake.com`,
	password: 'jsjsjnsj',
};
