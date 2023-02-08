let api = `https://sheetdb.io/api/v1/zug978wxs2g61?sheet=blogs`;

console.log(api);

fetch(api).then(function (res) {
    // console.log(res.json());
    return res.json();
}).then(function(data) {
    console.log(data);
    //Đã lấy được data -> tiến hành các thao tác in data ra HTML
});

//GET (read)
// fetch(api).then(function (res) {
//     // console.log(res.json());
//     return res.json();
// }).then(function(data) {
//     console.log(data);
//     //Đã lấy được data -> tiến hành các thao tác in data ra HTML
//     innerHTML
// }); Test thôi
//POST (create)
//PUT (update)
//DELETE (delete)


// let data = {
//     id:"3",
//     name:"Hello",
//     content:"loremipsum20",
//     author:"Cuong",
//     createdAt:"31/11/2011",
//     imgURL:"12312313",
// };

// fetch(api, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// });



let data = {
    id:"3",
    name:"Hello",
    content:"loremipsum20",
    author:"Cuong",
    createdAt:"31/11/2011",
    imgURL:"12312313",
};

fetch(api, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
    // toàn bộ logic phía sau, ví dụ như
    //alert lên lầ thêm mới thành công
    //logic tại đây:
    //gọi ra thẻ HTML
    //.innerHTML
    //...
});




//Update:
let apiUpdate= `https://sheetdb.io/api/v1/zug978wxs2g61/id/1`;
let data2 = {username:"Viet Anh XZ",};

fetch(apiUpdate, {
    method: 'PUT', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data2),
}).then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
    // toàn bộ logic phía sau, ví dụ như
    //alert lên lầ thêm mới thành công
    //logic tại đây:
    //gọi ra thẻ HTML
    //.innerHTML
    //...
});


//Delete
let apiDelete= `https://sheetdb.io/api/v1/zug978wxs2g61/id/2`;

fetch(apiDelete, {
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data2),
}).then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
    // toàn bộ logic phía sau, ví dụ như
    //alert lên lầ thêm mới thành công
    //logic tại đây:
    //gọi ra thẻ HTML
    //.innerHTML
    //...
});