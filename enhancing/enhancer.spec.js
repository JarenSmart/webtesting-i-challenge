const { succeed, fail, repair, get } = require("./enhancer.js");

describe("enhancer unit tests", () => {
  describe("repairs", () => {
    it("durability restored to 100", () => {
      let item = {
        name: "Computer Screen",
        durability: 20,
        enhancement: 1,
      };

      const repairedItem = repair(item);

      expect(repairedItem.durability).toBe(100);
    });
  });

  describe("success", () => {
    it("Enhances level by 1", () => {
      let mockItem = 19;
      let item = {
        name: "Keyboard",
        durability: 20,
        enhancement: mockItem,
      };

      const enhancedItem = succeed(item);

      expect(enhancedItem.enhancement).toBe(mockItem + 1);
    });
  });
});
