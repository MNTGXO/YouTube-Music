// Fix any remaining issues in the page itself
document.addEventListener('DOMContentLoaded', function() {
  // Remove any client-side frame busting code
  if (window !== window.top) {
    window.stop();
    document.documentElement.innerHTML = '';
    
    // Recreate the page content in a way that works in an iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://music.youtube.com';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    document.documentElement.appendChild(iframe);
  }
});
