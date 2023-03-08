import { selector } from "recoil";

import { playListSate } from "./playListState";

export const hiphopCountState = selector({
  key: "hiphopCountState",
  get: ({ get }) => {
    const playList = get(playListSate);
    const hiphopCount = playList.filter(
      (genre) => genre.includes("힙합").length
    );

    return hiphopCount;
  },
});
