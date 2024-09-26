const generateBtn = document.getElementById('generate-btn');

const numberEle = document.getElementById('number-generator');
generateBtn.addEventListener("click", () => {
    const ranNo = (Math.floor((Math.random() * 100) + 1));
    numberEle.textContent = ranNo;
})

