chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    const responseHeaders = details.responseHeaders.filter(
      header => !(header.name.toLowerCase() === 'x-frame-options')
    );
    
    // Also modify CSP if needed
    for (let i = 0; i < responseHeaders.length; i++) {
      if (responseHeaders[i].name.toLowerCase() === 'content-security-policy') {
        responseHeaders[i].value = responseHeaders[i].value
          .replace(/frame-ancestors [^;]+;?/, '')
          .replace(/frame-src [^;]+;?/, '');
      }
    }
    
    return { responseHeaders };
  },
  { urls: ["https://music.youtube.com/*"] },
  ["blocking", "responseHeaders", "extraHeaders"]
);
