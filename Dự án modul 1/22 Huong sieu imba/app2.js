let btnAnDanh = document.getElementById('guiAnDanh');

btnAnDanh.onclick = function () {
    let userInput = document.getElementById('menber-input').value;
    if (userInput !== '') {
        //Ẩn thẻ cũ đi:
        // document.getElementById('new-menber-comment').style.display = "none";

        //Tạo một thẻ mới:
        let a = document.getElementById('div-menber'); //Gọi thẻ bố
        let messageTemplate = `
        <div class="menber">
            <div class="menber-logo">
                <ion-icon name="person"></ion-icon>
            </div>
            <div class="menber-infor">
                <span class="menber-name" style="color: white" ;>Ẩn danh</span>
                <span class="menber-time">Cách đây 1 phút</span>
                <p style="color: #9b9b9b">${userInput}</p>
            </div>
        </div>
        <div class="menber-icon">
            <i class="fa-solid fa-thumbs-up"></i>
            <span class="number-like">1</span>
            <i class="fa-solid fa-message"></i>
            <span class="number-com">0</span>
            <i class="fa-solid fa-flag"></i>
        </div>
        `
        a.innerHTML += messageTemplate;

        document.getElementById('menber-input').value = "";

    }
}