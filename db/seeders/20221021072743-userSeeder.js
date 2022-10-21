'use strict';
/** @type {import('sequelize-cli').Migration} */

const {faker} = require('@faker-js/faker');


const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
      {
        userName : faker.internet.userName(),
        fullName : faker.name.fullName(),
        password : await bcrypt.hash('admin', 10) ,
        // password : await (async ()=>{ //NOTE - Juga Bisa
        //   try{
        //     return await bcrypt.hash('admin', 10) 
        //   }catch(e){

        //   }
        // })(),
        status : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
