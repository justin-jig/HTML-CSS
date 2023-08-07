const express = require('express');
const app = express();
const PORT = 8000;
const mysql2 = require('mysql2');

/** view engine */
app.set('view engine', 'ejs');

/** 청적 url 설정 */
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

/** body paser 설정 */
app.use(express.urlencoded({extends:true}));
app.use(express.json());

/** 라우터 분리 */
// const indexRouter = require('./routes');
// app.use('/', indexRouter);

// mysql 연결
const conn = mysql2.createConnection({
    host:'localhost', //DB가 설치된 호스트 IP 주소
    user:'justin', // DB 접속 유저 이름
    password:'', // DB접속 비밀번호
    database:'kdt' // DB이름
})

conn.connect((err) => {
    if (err) {
        console.log('error');
        return;
    }
    console.log('connect');
})

app.get('/', (req, res) => {
    res.render('index');
});

// GET /visitor 방명록 전체 보이기
app.get('/visitor' , (req, res) => {
    const query = 'SELECT * FROM visitor';
    conn.query(query,(err, rows) => {
        res.render('visitor', {data: rows});
    })
})

// POST /visitor 방명록 하나 생성
app.post('/visitor/write' , (req, res) => {
    const query = `INSERT INTO visitor (name,comment) VALUE ('${req.body.name}','${req.body.comment}')`;
    conn.query(query,(err, rows) => {
        console.log('rows', rows);
        res.send({id: rows.insertId, name: req.body.name, comment: req.body.comment});
    })
})

/**[404 ERROR] 맨 마지막 라우트로 선언 */
app.use('*', (req, res) => {
    res.render('404');
})
app.listen(PORT,() => {
    console.log(`http://localhost${PORT}`);
})

