// --- Show push notification ---
window.enableDeviceNotification = function(msgObj) {
  // Ask permission if needed
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      const title = msgObj.guest ? "Vendég üzenet" : msgObj.name || "Új üzenet";
      let body = (msgObj.msg || "").slice(0, 80);
      const n = new Notification(title, {
        body,
        icon: "/favicon.ico"
      });
      // Optionally add click handler
      setTimeout(()=>{n.close && n.close()}, 4500);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission){
        if(permission==="granted") window.enableDeviceNotification(msgObj);
      });
    }
  }
};
