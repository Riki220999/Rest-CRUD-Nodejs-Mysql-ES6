
import db from './../lib/db';

// Menampilkan Data
const findAllData = () => {
    return new Promise((resolve, reject) => {
        db.query("Isi Query ", (err, result) => {
            if (err) {
                reject(err.message);
            }
            resolve(result);
        })
    });
}

// Pembuatan Data
const createData = () => {
    return new Promise((resolve, reject) => {
        db.query("Isi query ", function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

// Edit Data
const updateData = () => {
    return new Promise((resolve, reject) => {
        db.query('Isi query ', function (err, results, fields) {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
}

// Menghapus data
const deleteData = () => {
    return new Promise((resolve, reject) => {
        db.query(" ", function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    findAllData: findAllData,
    createData: createData,
    updateData: updateData,
    deleteData: deleteData
}

