module.exports = PROXY_CONFIG = [
  {
    context: [
      "/measurements-receiver",
    ],
    target: "http://10.93.8.191:8000",
    secure: false
  },
];

