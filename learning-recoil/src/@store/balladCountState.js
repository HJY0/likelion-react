import { selector } from "recoil";
import { playListSate } from "./playListState";

export const balladCountState = selector({
  key: "balladCountState",
  get: ({ get }) => {
    const playList = get(playListSate);
    const balladCount = playList.filter(
      (genre) => genre.includes("발라드").length
    );

    return balladCount;
  },
});
