// const mysql2 = require('mysql2');


// const conn = mysql2.createConnection({
//     host:'localhost', //DB가 설치된 호스트 IP 주소
//     user:'justin', // DB 접속 유저 이름
//     password:'', // DB접속 비밀번호
//     database:'kdt' // DB이름
// })



// (임시) DB로부터 방명록 데이터를 받아옴
exports.getVigitors = () => {
    return [
        { id:1, name:'홍길동', comment : '내가 왔다.'},
        { id:2, name:'이찬혁', comment : '으라차차'},
    ]

}