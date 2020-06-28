const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
    
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gembella, Jardim América",
//         "N° 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ] 

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log('Cadastrado com sucesso')
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)


    // db.run(`DELETE FROM places WHERE id = ?`, [5], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log('Registro deletado com sucesso')
    // })

    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log(rows)
    // })
    // db.run(`ALTER TABLE places RENAME COLUMN adress2 TO address2`, function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log('deu certo')
    // })
})

module.exports = db