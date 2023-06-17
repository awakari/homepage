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
            client_id: '670591843914-e4vfiva92235duknmnrauflfe3qo326s.apps.googleusercontent.com',
        }).then(renderSignInButton);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('auth-google').addEventListener('click', loadGoogleAuth);
})
