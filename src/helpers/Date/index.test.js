import { getMonth } from './index';

/**
 * 
 */
describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return 'janvier' for 2022-01-01 as date", () => {
            // prépare
            const date = new Date("2022-01-01");
            // agit
            const result = getMonth(date);
            // verifie
            expect(result).toBe("janvier");
        });

        it("the function return 'juillet' for 2022-07-08 as date", () => {
            // prépare
            const date = new Date("2022-07-08");
            // agit
            const result = getMonth(date);
            // verifie
            expect(result).toBe("juillet");
        });

        it("the function return 'avril' for 2022-04-29 as date", () => {
            // prépare
            const date = new Date("2022-04-29");
            // agit
            const result = getMonth(date);
            // verifie
            expect(result).toBe("avril");
        });
    });
});
