// 로컬 스토리지에서 상태를 불러오는 함수
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.error("로컬 스토리지에서 데이터를 불러오지 못했습니다:", error);
    return undefined;
  }
};

// 상태를 로컬 스토리지에 저장하는 함수
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.error("로컬 스토리지에 저장하지 못했습니다:", error);
  }
};
