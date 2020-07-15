const { succeed, fail, repair, get } = require("./enhancer.js");

describe("enhancer unit tests", () => {
  describe("repairs", () => {
    it("durability restored to 100", () => {
      const item = {
        name: "Computer Screen",
        durability: 20,
        enhancement: 1,
      };

      const repairedItem = repair(item);

      expect(repairedItem.durability).toBe(100);
    });
  });
});
