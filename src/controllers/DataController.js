import { Router } from 'express';
import { DataService } from './../services';
const router = Router();

// Router Tampil Data
router.get("/detail", (req, res) => {
  DataService
    .findAllData()
    .then(data => {
      res.status(200).json({
        status: 200,
        data: data
      });
    })
    .catch(err => {
      res.status(400)
        .json({
          status: 400,
          message: err
        })
    })

});

// Router Menambah Data
router.post("/insert", (req, res) => {
  let data = {
  }
  DataService
    .createData()
    .then(data => {
      res.status(200).json({
        status: 200,
        data: data
      });
    })
    .catch(err => {
      res.status(400)
        .json({
          status: 400,
          message: err
        })
    })

});

router.put("/ubah", (req, res) => {
  const data = {
  }
  console.log();
  DataService
    .updateData()
    .then(data => {
      res.status(200).json({
        status: 200,
        data: data
      });
    })
    .catch(err => {
      res.status(400)
        .json({
          status: 400,
          message: err
        })
    })

});

router.delete("/hapus", (req, res) => {
  let data = {
  }
  console.log();
  DataService
    .deleteAgama(data)
    .then(data => {
      res.status(200).json({
        status: 200,
        msg: "berhasil"
      });
    })
    .catch(err => {
      res.status(400)
        .json({
          status: 400,
          message: err
        })
    })

});
module.exports = router;