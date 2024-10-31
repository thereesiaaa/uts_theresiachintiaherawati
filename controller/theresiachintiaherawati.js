const pariwisata = require ("../model/pariwisata");

const createpariwisata= (req,res)=>{
    const pariwisata = new pariwisata ({
         nama_pariwisata : req.body.nama_pariwisata,
    alamat : req.body.alamat,
    pengunjung : req.body.pengunjung
    });
   
};
const readwisata= (req,res)=>{
    pariwisata.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get Data Wisata",
            theresiachintiaherawati : documents
        });
    });
};
const deletepariwisata= (req,res) =>{
    pariwisata.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message: "pariwisata berhasil diahpus",
            result : result
        });
    });
};
const updatepariwisata = (req,res)=>{
    
    const wisata = new wisata({
        _id : req.params.id,
        nama_pariwisata : req.body.nama_pariwisata,
        alamat : req.body.alamat,
        pengunjung : req.body.pengunjung
    });
};

