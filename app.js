const express = require('express')
const bp = require('body-parser')


const app = express()
app.use(bp.urlencoded({extended:false}))

app.get('/crud',(req,res,next)=>{
    res.send('system restfull api')
    next()
})

app.get('/crud/:nama',(req,res)=>{
    let namaOrang = req.params.nama;
    res.send('selamat datang '+ namaOrang)
})
app.post('/crud',(req,res)=>{
    let id = req.body.id;
    let namaOrang = req.body.nama
    let jurusan = req.body.jurusan
    res.send('ID : '+ id +', nama : '+ namaOrang + 'jurusan : '+ jurusan)
})
app.put('/crud/:id',(req,res)=>{
    let id = req.params.id 
    res.send('ID telah di update'+ id )
})
app.delete('/crud/:nama',(req,res)=>{
    let namaOrang = req.params.nama;
    res.send('siswa yang bernama '+namaOrang +' telah di hapus dari system')
})

app.listen(3000,()=>{
    console.log('server okee')
})