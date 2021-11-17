const NotFound = (req, res) => {
  res.status(404).send("Path does not exist");
};

module.exports = NotFound;
