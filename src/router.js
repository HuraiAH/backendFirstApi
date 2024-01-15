const router = require("express").Router();

const {
  getAllContacts,
  getSingleContactsById,
  // getSingleContactsByUserName,
  createContacts,
  updateSingleContactsById,
  // updateSingleContactsByUserName,
  deleteSingleContacts,
  // deleteSingleContactsByUserName,
} = require("./controller");
router.get("/", getAllContacts);
router.post("/", createContacts);
router.get("/:id", getSingleContactsById);
// router.get("/:userName", getSingleContactsByUserName);
router.put("/:id", updateSingleContactsById);
// router.put("/:userName", updateSingleContactsByUserName);
router.delete("/:id", deleteSingleContacts);
// router.delete("/:userName", deleteSingleContactsByUserName);

module.exports = router;
