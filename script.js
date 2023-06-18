function handleAuthGoogle(response) {
    const credential = response.credential;
    // Decode the JWT token
    const decodedToken = jwt_decode(credential);
    // Extract the user email from the decoded token
    console.log(decodedToken);
    const userEmail = decodedToken.email;
    // Use the userEmail as needed (e.g., send it in an email)
    console.log(userEmail);
}
