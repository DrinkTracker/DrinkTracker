self.addEventListener('push', function(event) {
  const pushData = event.data.json();
  const title = pushData.title;
  const options = {
    body: pushData.body,
    icon: 'path/to/your/icon.png',
    badge: 'path/to/your/badge-icon.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
