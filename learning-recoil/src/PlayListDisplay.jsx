import { useRecoilState } from "recoil";
import { playListState } from "./@store/playListState";

export default function PlayListDisplay() {
  const [playList, setPlayList] = useRecoilState(playListState);

  // 클로저 이용 (바로 실행해주기 위해서..?)
  const handleDeleteGenre = (index) => () => {
    setPlayList(playList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>플레이리스트 장르</h2>
      <ul>
        {playList.map((genre, index) => (
          <li key={index} style={listStyle}>
            {genre}
            <button type="button" onClick={handleDeleteGenre(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const listStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  marginBottom: 20,
};
