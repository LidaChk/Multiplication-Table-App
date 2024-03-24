import { getRandomInt } from './getRandomInt';

describe('getRandomInt', () => {
  it('throws an error if k is less than 0', () => {
        expect(() => getRandomInt(1, -1)).toThrow('Invalid value for k');
    });

    it('throws an error if k is greater than or equal to n', () => {
        expect(() => getRandomInt(1, 1)).toThrow('Invalid value for k');
    });

    it('returns a value between 0 and n - 2 when k is not 0 or n - 1', () => {
        for (let i = 0; i < 100; i++) {
            const n = Math.floor(Math.random() * 100) + 1;
            const k = Math.floor(Math.random() * (n - 2)) + 1;
            const result = getRandomInt(n, k);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(n - 1);
            expect(result !== k).toBeTruthy();
        }
    });

    it('returns 0 when k is 0', () => {
        for (let i = 0; i < 100; i++) {
            const n = Math.floor(Math.random() * 100) + 1;
            expect(getRandomInt(n, 0)).toBe(0);
        }
    });

    it('returns n - 1 when k is n - 1', () => {
        for (let i = 0; i < 100; i++) {
            const n = Math.floor(Math.random() * 100) + 1;
            expect(getRandomInt(n, n - 1)).toBe(n - 1);
        }
    });
});
