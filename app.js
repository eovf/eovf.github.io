document.getElementById("promptForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const prompt = document.getElementById("prompt").value;

  // 내 백엔드 서버 주소 (예시: Render에 배포한 주소)
  const backendUrl = "https://my-backend.onrender.com/generate";

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    // 백엔드에서 받은 이미지 출력
    document.getElementById("result").innerHTML = `<img src="${data.image}" alt="AI 이미지">`;
  } catch (error) {
    console.error("에러 발생:", error);
    document.getElementById("result").innerText = "이미지 생성 중 오류가 발생했습니다.";
  }
});