import { hotDogAI } from "..";

describe(hotDogAI, () => {
  it("should return Hotdog when it's a Hotdog", () => {
    expect(hotDogAI({ name: 'Hotdog' })).toEqual('Hotdog');
  });
});