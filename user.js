const express = require('express');
const router = express.Router();

router.get('/crud',(req,res,)=>{
    res.send('system restfull api')
    
})
router.get('/crud/:nama',(req,res)=>{
    let namaOrang = req.params.nama;
    res.send('selamat datang '+ namaOrang)
})
router.post('/crud',(req,res)=>{
    let id = req.body.id;
    let namaOrang = req.body.nama
    let jurusan = req.body.jurusan
    res.send('ID : '+ id +', nama : '+ namaOrang + 'jurusan : '+ jurusan)
})
router.put('/crud/:id',(req,res)=>{
    let id = req.params.id 
    res.send('ID telah di update'+ id )
})
router.delete('/crud/:nama',(req,res)=>{
    let namaOrang = req.params.nama;
    res.send('siswa yang bernama '+namaOrang +' telah di hapus dari system')
})

module.exports = router;