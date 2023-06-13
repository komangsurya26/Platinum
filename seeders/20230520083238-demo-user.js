"use strict";

const { error } = require('console');

/** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert(
//       "Users",
//       [
//         {
//           firstName: "John",
//           lastName: "Doe",
//           email: "example@example.com",
//           password: "komang",
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//       ],

//UNTUK INSERT COLOM

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.sequelize.transaction(t => {
//       return Promise.all([
//         queryInterface.addColumn('Users', 'phoneNumber', {
//           type: Sequelize.DataTypes.STRING
//         }, { transaction: t }),
//       ]);
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.sequelize.transaction(t => {
//       return Promise.all([
//         queryInterface.removeColumn('Users', 'phoneNumber', { transaction: t }),
//         queryInterface.removeColumn('Users', 'favoriteColor', { transaction: t })
//       ]);
//     });
//   }
// };

//UNTUK UPDATE DATA

// module.exports={
//   async up (queryInterface,sequelize){
//     await queryInterface.bulkUpdate ("Users",{
//       phoneNumber: "0813657632"
//     },{
//       id:[2],
//     }
//   )
//   .then(u => {
//     console.log('ok')
//   })
//   .catch(e => {
//     console.error(error)
//   })
//   }
// };