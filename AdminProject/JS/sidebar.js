//xử lý toggle bật tắt darkboard 
let body = document.querySelector('body');
let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelector('.toggle');
let modeSwitch = document.querySelector('.toggle-switch');

toggle.addEventListener('click', function(){
    sidebar.classList.toggle('close');

});

modeSwitch.addEventListener('click', function(){
    body.classList.toggle('dark');
    
});




// //lấy đường dẫn api gán vào 1 biến
// let api = `https://sheetdb.io/api/v1/2jqkuz5ezjc4q`;
// let api2 =`https://sheetdb.io/api/v1/2jqkuz5ezjc4q?sheet=blogs`
// //lấy thêm api thêm đuôi ?sheet = tên_sheet vào link api đầu

// //lấy dữ liệu 
// fetch(api).then(function(res){
// // response trả về dữ liệu dạng thô
// // console.log(res.json());
// //phương thức json để path dữ liệu sang dữ liệu đọc được

// return res.json();
// }).then(function(data){
//     console.log(data);
//     //đã lấy được data->tiến hành các thao tác in data ra html
// });

// //api2
// fetch(api2).then(function(res){
//     // response trả về dữ liệu dạng thô
//     // console.log(res.json());
//     //phương thức json để path dữ liệu sang dữ liệu đọc được
    
//     return res.json();
//     }).then(function(data){
//         console.log(data);
//         //đã lấy được data->tiến hành các thao tác in data ra html

        
//     });

// //Get(read)
// //POST(create);
// //push(update)
// //delete
// let data = {

//     id:'3',
//     names:'he',
//     content:'sadsdfff',
//     author: 'jsfjf',
//     created:'31/12/2022',
//     imgURL:'123'
// }

// //tạo mới dữ liệu
// // fetch(api2 ,  {  //biến được khai báo
// //   method: 'POST', // or 'PUT'
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// //   body: JSON.stringify(data),//Biến data thành kiểu chuỗi
// // }).then(function(res){ //tạo mới 1 bản ghi

// //     return res.json();
// //     //then đầu tiên xử lý dữ liệu
// // })
// // .then(function(data){
// // console.log(data);

// //Toàn bộ logic vd như thêm mới thành công 
// //thực hiện logic ở then sau

// //})
// //update
// let api2UpDate =`https://sheetdb.io/api/v1/2jqkuz5ezjc4q/id/1`;

// fetch(api2UpDate ,  {  //biến được khai báo
//   method: 'PUT', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({username:'jdsjkf'}),//Biến data thành kiểu chuỗi
// }).then(function(res){ //tạo mới 1 bản ghi

//     return res.json();
//     //then đầu tiên xử lý dữ liệu
// })
// .then(function(data){
// console.log(data);

// // Toàn bộ logic vd như thêm mới thành công 
// // thực hiện logic ở then sau

// })


// delete
// fetch(api2UpDate ,  {  //biến được khai báo
//     method: 'DELETE', // or 'PUT'
//     //Biến data thành kiểu chuỗi
//   }).then(function(res){ //tạo mới 1 bản ghi
  
//       return res.json();
//       //then đầu tiên xử lý dữ liệu
//   })
//   .then(function(data){
//   console.log(data);
  
//   // Toàn bộ logic vd như thêm mới thành công 
//   // thực hiện logic ở then sau
  
//   })
