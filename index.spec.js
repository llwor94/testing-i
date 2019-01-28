const { enhancer } = require('./index');

describe('enhancer', () => {
	describe('success method', () => {
		test('is a function', () => {
			expect(typeof enhancer.success).toBe('function');
		});
		describe('item from enhancement 0', () => {
			const item = {
				name: 'Sword',
				type: 'weapon',
				durability: 100,
				enhancement: 0,
			};

			it('should increase the enhancement by 1', () => {
				const enhanced = enhancer.success(item);
				expect(enhanced.enhancement).toEqual(1);
			});
			it('should update name of enhanced to include enhanced level', () => {
				const enhanced = enhancer.success(item);
				expect(enhanced.name).toEqual('[+2] Sword');
			});
		});
		test('displays PRI as level 16', () => {});
	});
});
