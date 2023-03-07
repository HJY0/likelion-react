import classes from "./Counter.module.css";
import CountButton from "./CountButton";
import Count from "./Count";

export default function Counter() {
  // 읽기(GET)/쓰기(SET)  useRecoilState
  // 읽기(GET)            useRecoilValue
  // 쓰기(SET)            useSetRecoilState

  return (
    <div className={classes.ReactCounter}>
      <Count />
      <CountButton>리코일 카운트</CountButton>
    </div>
  );
}

Counter.displayName = "RecoilCounter";
