const hello = (req, res) => {
    res.status(200).json({
      status: true,
      message: 'Hello World!',
    });
   };

const sum = (req, res) => {
  res.status(200).json({
    status: true,
    message: "Parameters summarized!",
    data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
  })
}
   
   module.exports = {
    hello, sum
   }