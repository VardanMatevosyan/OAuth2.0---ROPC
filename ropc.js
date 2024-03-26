var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "http://auth0.com/oauth/grant-type/password-realm");
urlencoded.append("client_id", "YOUR_CLIENT_ID");
urlencoded.append("username", "YOUR_USERNAME_HERE");
urlencoded.append("password", "YOUR_PASSWORD_HERE");
urlencoded.append("scope", "openid email offline_access profile");
urlencoded.append("state", "123qwe");
urlencoded.append("realm", "Username-Password-Authentication");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};


async function getToken() {
await fetch("https://YOUR_OAUTH_DOMAIN_HERE/oauth/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

