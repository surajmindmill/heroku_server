// CHANGE THESE VALUES TO MATCH YOUR DEVELOPER ACCOUNT
exports.PAYPAL_APP_ID = "Ac6o20rMaEA1ff1c6g2dqY1df1ydGHruoLvoDNj3f34ZPfOMgPC1u-dZdrSllFO_k7b9gANYzEFSlr9a";
exports.PAYPAL_SECRET = "EML38HdZm2EGglEC_oZweP8nEe5TXo0eqf4CrSIKEUlJv0YabC1Y7mJABdWvBaTPfylbjNISrONf-vDN";

// If true, all calls to the PayPal Here API will go through this sample server. See the README for
// a discussion of this, but basically this is more secure and simpler to manage at the cost of relatively
// small additional latency (because calls come to your backend first, then to PayPal)
exports.CENTRAL_SERVER_MODE = true;

// Note that you need an entry in your hosts file for this
// and that it must match the returnUrl set on your app in
// PayPal Access
exports.MY_HOSTNAME = "https://environmental-enforcement.herokuapp.com";
exports.MY_PORT = 80;
exports.MY_APP_URL = "sdksampleapp://oauth";

// In case you want more info, modify this
exports.PAYPAL_SCOPES = "https://uri.paypal.com/services/paypalhere openid email phone profile address https://uri.paypal.com/services/paypalattributes/business";

// Live or stage?    This lets your sample server know which paypal service
// to connect to (live, sandbox, or a custom stage server)
//exports.PAYPAL_ACCESS_BASEURL = "https://www.paypal.com/webapps/";
exports.PAYPAL_ACCESS_BASEURL = "https://sandbox.paypal.com/webapps/";
