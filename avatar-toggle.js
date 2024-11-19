(() => {
  // Select the avatar image element and add a name display element
  const avatar = document.getElementById('avatar');
  const avatarNameDisplay = document.getElementById('avatar-name'); // Ensure this element exists

  // Define an array of avatars with images and their respective names
  const avatars = [
    { src: './assets/santa.png', name: 'Santa Claus' },
    { src: './assets/cookie.png', name: 'Cookie Man' },
    { src: './assets/bear.png', name: 'Teddy Bear' },
    { src: './assets/snowman.png', name: 'Snowman' },
    { src: './assets/reindeer.png', name: 'Reindeer' },
  ];

  let currentAvatarIndex = 0;

  // Optional: Add sound effect
  const clickSound = new Audio('./assets/click.mp3'); // Ensure this file exists

  // Function to update avatar and its name
  const updateAvatar = () => {
    const currentAvatar = avatars[currentAvatarIndex];
    avatar.src = currentAvatar.src; // Update avatar image
    avatarNameDisplay.textContent = currentAvatar.name; // Update avatar name
  };

  // Event listener to toggle avatar on click
  avatar.addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex + 1) % avatars.length; // Cycle through avatars
    updateAvatar(); // Update the display
    clickSound.play(); // Play click sound
  });

  // Initialize with the first avatar
  updateAvatar();
})();
