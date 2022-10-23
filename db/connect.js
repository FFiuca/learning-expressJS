const { Sequelize } = require('sequelize')

const config = new Sequelize('coba_node2', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

const connect = async ()=>{
    try{
        await config.authenticate()

        console.log('sequelize connect')
    }catch(e){
        console.log('sequlize connect err', e)
    }
}

module.exports = {
    config: config,
    connect: connect
}