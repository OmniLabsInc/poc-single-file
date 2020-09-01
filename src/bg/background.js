function messageHandler(message, sender, sendResponse) {
  console.log('message', message, sender)
  if (message.type === `MESSAGE_FROM_MAIN_FRAME`) {
    chrome.tabs.executeScript(sender.tab.id, {
      code: `
for (const input of document.getElementsByTagName('input')) {
  Object.assign(input.style, { background: 'green' })
}
chrome.runtime.sendMessage({ type: 'MESSAGE_FROM_ALL_FRAMES' })
      `,
      allFrames: true,
    })
  }
}
chrome.runtime.onMessage.addListener(messageHandler)
