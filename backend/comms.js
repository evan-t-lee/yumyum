const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

function genToken(identity, room) {
    // Used when generating any kind of Access Token
    const twilioAccountSid = 'ACccd4d44e99be1dc5318cf5b6d41a76c3';
    const twilioApiKey = 'SK80b12df3272c0717d566351113bf75e9';
    const twilioApiSecret = 'sYsw14biO4LFQ665m1BbYYQVJqAFQBM8';

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
    token.identity = 'alice';

    // Create a Video grant which enables a client to use Video 
    // and limits access to the specified Room (DailyStandup)
    const videoGrant = new VideoGrant({
        room: 'DailyStandup'
    });

    // const videoToken = (identity, room, config) => {
    //     let videoGrant;
    //     if (typeof room !== 'undefined') {
    //       videoGrant = new VideoGrant({ room });
    //     } else {
    //       videoGrant = new VideoGrant();
    //     }
    //     const token = generateToken(config);
    //     token.addGrant(videoGrant);
    //     token.identity = identity;
    //     return token;
    // };

    // Add the grant to the token
    token.addGrant(videoGrant);

    // Serialize the token to a JWT string
    console.log(token.toJwt());
    return token.toJwt(); 
}
