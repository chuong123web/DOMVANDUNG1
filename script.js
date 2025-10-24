// Bài 2: Thay đổi màu nền
function changeBackgroundColor() {
  const color = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = color;
}

// Bài 3: Sửa nội dung văn bản
function editAllText() {
  const paragraphs = document.querySelectorAll(".text-box p");
  paragraphs.forEach(p => {
    if (!p.textContent.includes("(đã sửa)")) {
      p.textContent = p.textContent + " (đã sửa)";
    }
  });
}

