import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My First Test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	it('H1 should say hello gav', (done) => {
		const index = fs.readFileSync('./src/index.html','utf-8');

		jsdom.env(index, function(err, window){
			const h1 = window.document.getElementsByTagName('h1')[0];

			expect(h1.innerHTML).to.equal('Hello, Gav');
			done();
			window.close();
		});
	});
});

