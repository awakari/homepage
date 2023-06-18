function handleAuthGoogle(response) {
    const credential = response.credential;
    const idToken = credential.id_token;
    // Decode the JWT token
    const decodedToken = jwt_decode(idToken);
    // Extract the user email from the decoded token
    const userEmail = decodedToken.email;
    // Use the userEmail as needed (e.g., send it in an email)
    console.log(userEmail);
}
