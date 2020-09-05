export default {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-uploads-7834",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://gcrfyf3bb3.execute-api.ap-southeast-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_IQUKecmOB",
    APP_CLIENT_ID: "2g7e01ejjjv0pjnmqdadhq8ujr",
    IDENTITY_POOL_ID: "ap-southeast-2:6506fa81-5a93-4b03-beef-c6165ea3d446",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51HNH9LKzChfojR1KGzxwbEdA69xNCwRtxbK7f84ojsOYKzLjvbUvQtfrQJTrxdNJVHzo1qXTQbx1FrTXahjLovVm00d8BA1rJy",
};
