db.inventory.find(); // --Fetch all documents

db.inventory.find({ qty: 100 });

db.inventory.find({ status: { $in: ["A", "D"] } });

//AND Operator

db.inventory.find({
  status: "A",
  qty: { $lt: 30 },
});


//OR Operator
db.inventory.find({$or:[{status:"A"},{qty:{$lt:30}}]})

//findOne only
db.inventory.findOne({status:"A"})