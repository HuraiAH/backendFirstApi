const { default: mongoose, connect } = require("mongoose");
const Contact = require("./Contact");
//find all contacts
exports.getAllContacts = async (req, res) => {
  try {
    let data = await Contact.find();
    await res.status(200).json(data);
  } catch (error) {
    console.log("data not found");
  }
};
//find single contacts by id
exports.getSingleContactsById = async (req, res) => {
  try {
    let { id } = req.params;
    let singleData = await Contact.findById(id);
    res.json(singleData);

    console.log("data found");
  } catch (error) {
    console.log("data not found");
  }
};

// //find single contacts by UserName
// exports.getSingleContactsByUserName = async (req, res) => {
//   try {
//     let { userName } = req.params.userName;
//     let singleData = await Contact.getUser({ name: userName });
//     res.json(singleData);

//     console.log("data found");
//   } catch (error) {
//     console.log("data not found");
//   }
// };

// create new contact form req body
exports.createContacts = (req, res) => {
  let { name, email, phone } = req.body;
  let contact = new Contact({
    name,
    email,
    phone,
  });
  contact.save();
  console.log(contact);
  res.json(contact);
};
// update single contact by id
exports.updateSingleContactsById = async (req, res) => {
  try {
    let { id, nam } = req.params;
    let { name, email, phone } = req.body;
    let updatedData = await Contact.findOneAndUpdate(
      { _id: id, nam },
      { $set: { name, email, phone } },
      { new: true }
    );
    res.json(updatedData);
    console.log("data updated successful");
  } catch (error) {
    console.log("data not found");
  }
};
// // update single contact by userName
// exports.updateSingleContactsByUserName = async (req, res) => {};
// delete single contact by id
exports.deleteSingleContacts = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await Contact.findOneAndDelete({ _id: id });
    res.json(deletedData);
    console.log("data deleted successful");
  } catch (error) {
    console.log("data not found");
  }
};
// delete single contact by userName
exports.deleteSingleContactsByUserName = async (req, res) => {
  try {
    let { userName } = req.params.userName;
    let deletedData = await Contact.findOneAndDelete(userName);
    res.json(deletedData);
    console.log("data deleted successful");
  } catch (error) {
    console.log("data not found");
  }
};
