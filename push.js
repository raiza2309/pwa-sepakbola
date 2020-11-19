var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BCy4OswQXlu8vNiVkQ9X9BVcn8XPc-F63nq61Jz90JlbhTpYitAXqTOC3IqmVHo7eoSnua4BZ0qs_WGL1MzT8Ow",
   "privateKey": "fqCmh9rulqEreJ1stEc91YZ3NDhiPxgyjBJrgne9dD4"
};

 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)

var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/d4Yw07doLfk:APA91bHkIFWdin6qs1CvU4WjSvK6EwUfCYTdP1ytI9OpNHoaFKcgHRrP1TcpZIqALtFv1jZx8UG1qWayEnjQNA8wcpS13-KQJMzsY4aWGPiuhpTEj-SNTPvuvvQGcQLDpj84gj080uhK",
   "keys": {
       "p256dh": "BA+Q33P50Q69x9Qt0Go7bK4bLNumrQRjaSKSvsILaykFfMeV+SJmYci3AZgigr8nPPBpeTbQ87MYdR/wgzqZhRg=",
       "auth": "zLXYhXZtNkL6qZ8Etk8BMQ=="
   }
};
var payload = 'Lihat apa yang baru dari Aplikasi Informasi Sepak Bola!';

var options = {
   gcmAPIKey: '394832135',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);