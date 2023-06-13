const hello = (req, res) => {
    res.status(200).json({
      status: true,
      message: 'Hello World!',
    });
   };

const sum = (req, res) => {
  const { x, y} = req.body;
  const result = x + y;

  return res.status(200).json({
    status: true,
    message: "Parameters summarized!",
    data: { x: x, y: y, result: result}
  })
}
   
   module.exports = {
    hello,
    sum
   }
   