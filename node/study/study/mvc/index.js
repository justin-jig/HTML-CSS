const express = require('express');
const app = express();
const PORT = 8000;

/** view enign */
app.set("view engine", 'ejs');
app.set('views', './views');

/** body paser */
app.use(express.urlencoded({extends:true}));
app.use(express.json());

/** 임시 데이터 */

const comments = [
    {
        id : 1,
        userId : 'hellowId',
        date:'2020-08-10',
        comment : '반갑습니다.'
    },
    {
        id : 2,
        userId : 'hellowId2',
        date:'2022-08-04',
        comment : '반갑습니다.'
    },
    {
        id : 3,
        userId : 'hellowId3',
        date:'2023-01-04',
        comment : '행복하세여.'
    },
    {
        id : 4,
        userId : 'hellowId4',
        date:'2021-08-04',
        comment : '좋은저녁되세요.'
    }

]

app.get('/', (req, res) => {
    res.render('index');
})

//GET /commnets
app.get('/comments', (req,res) =>{
    res.render('comments',{ commentInfos:comments})
})

//GET /comment/:id
app.get('/comment:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id;
    console.log();
    res.render('comment', {commentInfo : comments[commentId - 1]});
})

//* 맨 마지막에 선언
app.get( '*' , (req,res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
})