import React, { useState, useEffect } from "react";
import queryString from "query-string";

const Auth = () => {
  const [code, setCode] = useState(null);
  const [tokens, setTokens] = useState(null);
  const cognitoUrl = `${process.env.REACT_APP_COGNITO_DOMAIN}/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&scope=email+openid+profile&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  useEffect(() => {
    const urlParams = queryString.parse(window.location.search);
    setCode(urlParams.code);

    if (code && !tokens) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "authorization_code");
      urlencoded.append("client_id", process.env.REACT_APP_CLIENT_ID);
      urlencoded.append("code", code);
      urlencoded.append("redirect_uri", process.env.REACT_APP_REDIRECT_URI);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch(
        `${process.env.REACT_APP_COGNITO_DOMAIN}/oauth2/token`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setTokens(result))
        .catch((error) => console.log("error", error));
    }

    tokens && console.log("TOKENS: ", tokens);
  }, [code, tokens]);

  if (!code) {
    return (
      <a href={cognitoUrl}>
        <button>Sign in</button>
      </a>
    );
  }
  if (!tokens) return <div>Signing you in</div>;
  return <div>Got tokens</div>;
};

export default Auth;
