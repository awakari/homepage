function handleCredentialResponse(response) {
    const credential = response.credential;
    alert(credential)
}

function renderSignInButton() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.attachClickHandler('signin-button', {}, handleCredentialResponse);
}

function loadGoogleAuth() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID',
        }).then(renderSignInButton);
    });
}

document.getElementById('signin-button').addEventListener('click', loadGoogleAuth);
