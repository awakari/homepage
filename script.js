function handleCredentialResponse(response) {
    const credential = response.credential;
    alert(credential)
}

function renderSignInButton() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.attachClickHandler('auth-google', {}, handleCredentialResponse);
}

function loadGoogleAuth() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID',
        }).then(renderSignInButton);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('auth-google').addEventListener('click', loadGoogleAuth);
})
