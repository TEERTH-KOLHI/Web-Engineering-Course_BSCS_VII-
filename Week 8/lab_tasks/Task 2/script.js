function generateInvitations(guests, ...additionalDetails) {
    // Iterate over each guest object
    return guests.map(guest => {
      // Construct the invitation message for the guest
      let message = `Dear ${guest.name},\nYou are invited to the party!`;
  
      // Include any additional details provided
      if (additionalDetails.length > 0) {
        message += '\n' + additionalDetails.join('\n');
      }
  
      // Return the invitation message
      return message;
    });
  }
  
  // Example usage:
  const guests = [
    { name: 'Alice', age: 30, rsvp: 'Yes' },
    { name: 'Bob', age: 25, rsvp: 'No' },
    { name: 'Charlie', age: 40, rsvp: 'Maybe' }
  ];
  
  const invitations = generateInvitations(guests, 'Date: Saturday, April 20th', 'Time: 7:00 PM', 'Location: 123 Main Street');
  console.log(invitations);
  