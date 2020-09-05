const dev = {
  STRIPE_KEY:
    "pk_test_51HNH9LKzChfojR1KGzxwbEdA69xNCwRtxbK7f84ojsOYKzLjvbUvQtfrQJTrxdNJVHzo1qXTQbx1FrTXahjLovVm00d8BA1rJy",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-67hjkljq7frk",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://o5clud4tjh.execute-api.ap-southeast-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_lOii7OTeQ",
    APP_CLIENT_ID: "12nh4e4r6b6qlv50bcvdsjm7do",
    IDENTITY_POOL_ID: "ap-southeast-2:2516bac8-3797-4bfd-ba0e-7c4544757035",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51HNH9LKzChfojR1KGzxwbEdA69xNCwRtxbK7f84ojsOYKzLjvbUvQtfrQJTrxdNJVHzo1qXTQbx1FrTXahjLovVm00d8BA1rJy",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1hpt543m41zao",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://uc7nykv64j.execute-api.ap-southeast-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_zzuQ3Dkt8",
    APP_CLIENT_ID: "4joplfkot8ot4frfifnmht4634",
    IDENTITY_POOL_ID: "ap-southeast-2:96b06f52-86cf-46ac-8c72-9db311cd390f",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
