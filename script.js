// Inject script into YouTube Music's iframe
const iframe = document.getElementById("player");
iframe.onload = () => {
  const script = `
    setInterval(() => {
      // Skip ads if "Skip Ad" button exists
      const skipBtn = document.querySelector(".ytp-ad-skip-button");
      if (skipBtn) skipBtn.click();
      
      // Mute/unblock ads (optional)
      const ad = document.querySelector(".video-ads");
      if (ad) ad.style.display = "none";
    }, 1000);
  `;
  iframe.contentWindow.postMessage({ script }, "*");
};
