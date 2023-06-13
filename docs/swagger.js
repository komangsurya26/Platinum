module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "E-Commerce", // short title.
    description: "Online Shop", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Yusuf", // your name
      email: "moehamadmaulanayusuf@gmail.com", // your email
      url: "binarianshop.com", // your website
    },
  },
  servers: [
    {
      url: "http://localhost:4000/todos", // url
      description: "Local server", // name
    },
  ],
  tags: [
    {
      name: "User CRUD Operation", // name of a tag
    },
  ],
  components: {
    schemas: {
      // todo model
      Register: {
        type: "object", // data type
        properties: {
          Email: {
            type: "string", // data-type
            description: "Insert Email", // desc
            example: "Ujangkasep@gmail.com", // example of an id
          },
          Password: {
            type: "string", // data-type
            description: "Require unique Password", // desc
            example: "UjangKasep12345", // example of a title
          },
        },
      },
    },
  },
  // method of operation
  paths: {
    "/register": {
      post: {
        tags: ["User CRUD Operation"], // operation's tag.
        description: "Get todos", // operation's desc.
        // operationId: "getTodos", // unique operation id.
        parameters: [], // expected params.
        requestBody: {
          description: "Update an existent user in the store",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Register",
              },
            },
          },
          required: true,
        },
        // expected responses
        responses: {
          // response code
          200: {
            description: "Sign Up Success", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Register", // Todo model
                },
              },
            },
          },
        },
      },
    },
    "/user/login": {
      post: {
        tags: ["User"],
        summary: "Logs user into the system",
        description: "",
        operationId: "loginUser",
        parameters: [
          {
            name: "username",
            in: "query",
            description: "The user name for login",
            required: false,
            schema: {
              type: "string",
            },
          },
          {
            name: "password",
            in: "query",
            description: "The password for login in clear text",
            required: false,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            headers: {
              "X-Rate-Limit": {
                description: "calls per hour allowed by the user",
                schema: {
                  type: "integer",
                  format: "int32",
                },
              },
              "X-Expires-After": {
                description: "date in UTC when token expires",
                schema: {
                  type: "string",
                  format: "date-time",
                },
              },
            },
            content: {
              "application/xml": {
                schema: {
                  type: "string",
                },
              },
              "application/json": {
                schema: {
                  type: "string",
                },
              },
            },
          },
          400: {
            description: "Invalid username/password supplied",
          },
        },
      },
    },
    "/api/verify-email/{token}": {
      get: {
        description: "",
        parameters: [
          {
            name: "token",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
  },
};
