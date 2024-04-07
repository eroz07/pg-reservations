var productAssignment = require('../data/product_assignment.json');
var productCharges = require('../data/product_charges.json');

const getAllProducts = () => {
  const reservations = productAssignmentToMap();
  const charges = productChargesToMap();

  let results = [];
  Object.keys(reservations).forEach(key => {
    const reservation = reservations[key];
    reservation.forEach(res => {
      const productCharges = charges[res.id];
      results.push({...res, productCharges})
    })
  })

  return results.reduce(function(res, obj) {
    const value = (res[obj.reservation_uuid] = res[obj.reservation_uuid] || [])
    if(obj.productCharges) value.push({name: obj.name, ...obj.productCharges[0]});
    return res;
  }, {})
  // const products = productAssignment.map(pa => {
  //   const productCharges = productChargesByAssignmentId[pa.id];
  //   return {...pa, productCharges}
  // })
  
}

const getProduct = (key) => {
  const reservations = productAssignmentToMap();
  const charges = productChargesToMap();

  let results = [];
  Object.keys(reservations).filter((res) => res === key).forEach(key => {
    const reservation = reservations[key];
    reservation.forEach(res => {
      const productCharges = charges[res.id];
      results.push({...res, productCharges})
    })
  })

  return results.reduce(function(res, obj) {
    const value = (res[obj.reservation_uuid] = res[obj.reservation_uuid] || [])
    if(obj.productCharges) value.push({name: obj.name, ...obj.productCharges[0]});
    return res;
  }, {})
  // const products = productAssignment.map(pa => {
  //   const productCharges = productChargesByAssignmentId[pa.id];
  //   return {...pa, productCharges}
  // })
  
}

const productAssignmentToMap = () => {
  const productAssignments = productAssignment.reduce(function(results, assignment) {
    (results[assignment.reservation_uuid] = results[assignment.reservation_uuid] || []).push(assignment);
    return results;
  }, {})
  return productAssignments;
}

const productChargesToMap = () =>
{
  const productChargesByProductAssignmentId = productCharges.reduce(function(results, charge) {
    (results[charge.special_product_assignment_id] = results[charge.special_product_assignment_id] || []).push(charge);
    return results;
  }, {})
  return productChargesByProductAssignmentId;
}

module.exports = {
  getAllProducts,
  getProduct
}