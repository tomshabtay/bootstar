import { greet } from "../../src/utils/utils";

describe("utils", () => {
    test('should greet', () => {
        expect(greet('DY')).toBe('Hello DY');
    });
});