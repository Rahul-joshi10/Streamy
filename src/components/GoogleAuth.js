import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '208328948796-ea67ifrn1hsk6hcblagsbiod14tvn1bt.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;