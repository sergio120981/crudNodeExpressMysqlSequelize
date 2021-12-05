const Sequelize=require('sequelize');
const catModel=require('./models/categories');
const movModel=require('./models/movies');

const conn=new Sequelize('crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Category=catModel(conn, Sequelize);
const Movie=movModel(conn, Sequelize);

conn.sync({force:false})
    .then(()=>{
        console.log('tablas categoria y movie creada')
    });

module.exports={Category, Movie};