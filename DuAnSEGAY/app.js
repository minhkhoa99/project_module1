// 1.dangki
// btn nut dang ki:
let btnDangKi = document.getElementById("btn-dangki");
let modal = document.getElementById("modal11")
btnDangKi.onclick = function () {
    modal.style.display = "inline-flex";
};

// btn tat form dang ki;
let btnTroLai = document.getElementById("btn-trolai");

btnTroLai.onclick = function () {
    modal.style.display = "none";

};
let dangNhapODangKi = document.getElementById("DN_DK");
// console.log(dangNhapODangKi)
dangNhapODangKi.onclick = function () {

    modal.style.display = "none";
    modalDN.style.display = "inline-flex";
}


// kiemtra dang ki

let dangKi = document.getElementById("inputDangKi");
let passDangKi = document.getElementById("passDangKi");
let passAgainDangKi = document.getElementById("passAgainDangKi");
let nutDangKi = document.getElementById("btnDangKi");

let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
}
console.log(isEmailAddress('gmail.com@.com'))//false
console.log(isEmailAddress('gmail.com@gm.com'))//true

nutDangKi.onclick = function (event) {

    let check = isEmailAddress(`${dangKi.value}`);

    if (check == true) {
        // alert("email hop le");
        if (passDangKi.value === "") {
            alert("Không được bỏ trống mật khẩu");
        } else if (passAgainDangKi.value === "") {
            alert("Không được bỏ trống mật khẩu");
        } else if (passDangKi.value !== passAgainDangKi.value) {
            alert("Mật khẩu không giống nhau,mới nhập lại")
        } else {
            alert("Đăng kí thành công");
            modal.style.display = "none";
            modalDN.style.display = "inline-flex";
        };
    } else {
        alert("Email không hợp lệ");
    }

}

// #########
// let listFilmsSeGay = localStorage.getItem('films');
// console.log(localStorage.getItem('films'));

// const list = [{
//     'name': 'Display',
//     'group': 'Technical detals',
//     'id': '60',
//     'value': '4'
// },
// {
//     'name': 'Manufacturer',
//     'group': 'Manufacturer',
//     'id': '58',
//     'value': 'Apple'
// },
// {
//     'name': 'OS',
//     'group': 'Technical detals',
//     'id': '37',
//     'value': 'Apple iOS'
// }
// ];

// const groups = list.reduce((groups, item) => {
//     const group = (groups[item.group] || []);
//     group.push(item);
//     groups[item.group] = group;
//     return groups;
// }, {});

// console.log(groups);

// const groups = listFilmsSeGay.reduce((groups, item) => {
//     const group = (groups[item.group] || []);
//     group.push(item);
//     groups[item.group] = group;
//     return groups;
// }, {});

// console.log(groups);






































// 2. btn tat form dang nhap

let btnDangNhap = document.getElementById("btn-dangnhap");
let modalDN = document.getElementById("modal111")
btnDangNhap.onclick = function () {
    modalDN.style.display = "inline-flex";

};

// btn tat form dang ki;
let btnTroLai1 = document.getElementById("btn-trolai1");

btnTroLai1.onclick = function () {
    modalDN.style.display = "none";

};
let dangKiODangNhap = document.getElementById("dk_dn");
console.log(dangKiODangNhap)
dangKiODangNhap.onclick = function () {
    console.log("dhjjdjakf")
    modal.style.display = "inline-flex";
    modalDN.style.display = "none";
}












// ###################################

// phan tim kiem

let danhSachFilm = ["cú rơi tử thần", "hạ cánh khẩn cấp", "quái thú", "sát thủ đối đầu", "ip man", "ben hur", "siêu imba", "hạ cánh khẩn cấp", "giấc mộng anh hùng"];
let input = document.getElementById('input');
let btnSearch = document.getElementById("btn-search");

btnSearch.onclick = function () {
    let value = input.value.toLowerCase();

    let A = 0;
    if (value === "") {

        alert("Bạn muốn xem phim gì?");
    } else if (value === "cú rơi tử thần" || value === "cu rơi tử thần" || value === "cu roi tu than" || value === "cu rơi tu thần") {
        location.href = ('../Dự án modul 1/11 Huong cu roi tu than/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "hạ cánh khẩn cấp" || value === "ha canh khan cap" || value === "hạ canh khẩn cap" || value === "hạ cánh khan cap" || value === "ha cánh khẩn cap" || value === "ha canh khẩn câp") {
        location.href = ('../Dự án modul 1/12 Huong ha canh khan cap/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "quái thú" || value === "quái thu" || value === "quai thú" || value === "quai thu") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "sát thủ đối đầu" || value === "sat thu doi dau" || value === "sát thu đối đầu" || value === "sát thủ doi dau") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "IP Man" || value === "ip man" || value === "ipman" || value === "IPMAN") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "Ben Hur" || value === "ben hur" || value === "BEN HUR") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "Siêu imba" || value === "SIÊU IMBA" || value === "sieu imba" || value === "SIÊU imba") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "hạ cánh khẩn cấp" || value === "ha canh khan cap" || value === "haj canhs khaanr caaps" || value === "HẠ CÁNH KHẨN CẤP") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "giấc mộng anh hùng" || value === "GIẤC MỘNG ANH HÙNG" || value === "giac mong anh hung" || value === "giấc mộng anh hung") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "đế chế maya" || value === "de che maya" || value === "ddees chees maya" || value === "đê chê maya") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "tách biệt" || value === "tach biet" || value === "tachs bieetj" || value === "tách biet") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "lực lượng đặc biệt" || value === "luc luong dac biet" || value === "luwcj luwowngj ddawcj bieetj" || value === "lực lượng dac biet") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "special forcces" || value === "specialforcces") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "chiến binh thép" || value === "chien binh thep" || value === "chiến binh thep" || value === "chiến binh theps") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");
    } else if (value === "điệp viên báp thù" || value === "diep vien bao thu" || value === "điệp viên bap thu" || value === "diep vien báo thù") {
        location.href = ('../Dự án modul 1/21 Huong ben hur/index.html');
        alert("Chúc bạn xem phim vui vẻ:))");



    }
}





















let list = JSON.parse(localStorage.getItem('films'));
// console.log(list);

list = list.reduce((groups, item) => {
    const group = (groups[item.category] || []);
    group.push(item);
    groups[item.category] = group;
    return groups;
}, {});
console.log(list);

let template = `
<div class="main_small-slide">
    <p>Bộ Phim Hot</p>
    <div class="list-film">
        <div class="list-film-main">
            <div class="item-film">
                <img src="./assets/css/img/film/cu-roi-tu-than.jpg" alt="cu-roi-tu-than" style="width:220px ;height:330px">
                <a class="item-film__link" href="#">Cú Rơi Tử Thần</a>
            </div>
            <div class="item-film">
                <img src="./assets/css/img/film/ha-canh-khan-cap.jpg" alt="ha-canh-khan-cap" style="width:220px ;height:330px">
                <a class="item-film__link" href="#">Hạ Cánh Khẩn Cấp</a>
            </div>
            <div class="item-film">
                <img src="./assets/css/img/film/quoai-thu.jpg" alt="quaithua" style="width:220px ;height:330px">
                <a class="item-film__link" href="#">Quái Thú</a>
            </div>
            <div class="item-film">
                <img src="./assets/css/img/film/sat-thu-doi-dau.jpg" alt="satthudoidau" style="width:220px ;height:330px">
                <a class="item-film__link" href="#">Sát Thủ Đối Đầu</a>
            </div>
            <div class="item-film">
                <img src="./assets/css/img/film/Ip-Man-2008.jpg" alt="cu-roi-tu-than" style="width:220px ;height:330px">
                <a class="item-film__link1" href="#">IP Man</a>
            </div>
        </div>
    </div>
</div>
`;


let oneFilmTemplate = `
<div class="item-film">
    <img src="./assets/css/img/film/cu-roi-tu-than.jpg" alt="cu-roi-tu-than" style="width:220px ;height:330px">
    <a class="item-film__link" href="#">Cú Rơi Tử Thần</a>
</div>
`;


let main = document.getElementsByClassName("main")[0];
console.log(main);
for (let key in list) {
    main.innerHTML += `
    <div class="main_small-slide">
        <p>${key}</p>
        <div class="list-film">
            <div class="list-film-main">
                ${list[key].map((e) => `
                    <div class="item-film">
                        <img src="${e.image}" style="width:220px ;height:330px">
                        <a class="item-film__link" href="${e.url}">${e.name}</a>
                    </div>
                `)}
            </div>
        </div>
    </div>
    `;

}