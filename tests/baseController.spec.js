const baseController = require('../controllers/baseController');

const mockRequest = (body = {}, params = {}, query = {}) => {
 return {
   body: body,
   params: params,
   query: query,
 }
}

const mockResponse = () => {
 const res = {};
 res.json = jest.fn().mockReturnValue(res);
 res.status = jest.fn().mockReturnValue(res);

 return res;
}

describe('Base Controller Hello Function', () => {
 test('res.json called with { status: true, message: "Hello World!" }', (done) => {
   const req = mockRequest();
   const res = mockResponse();

   baseController.hello(req, res);

   expect(res.status).toBeCalledWith(200);
   expect(res.json).toBeCalledWith({ status: true, message: "Hello World!" });
   done();
 });
});

describe('Base Controller Sum Function', () => {
  test('res.json called with { status: true, message: "Parameters summarized!", data: { x: x, y: y, result: x + y } }', (done) => {
    const req = mockRequest({ x: 5, y: 10 });
    const res = mockResponse();
 
    baseController.sum(req, res);
 
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Parameters summarized!",
      data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
    });
    done();
  });
 });
 
