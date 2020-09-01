function sendMessage() {
  chrome.runtime.sendMessage({
    type: `MESSAGE_FROM_MAIN_FRAME`,
  })
}

function addRedButton() {
  const button = document.createElement(`button`)
  button.innerText = `Click here to send a message to the background`
  Object.assign(button.style, {
    background: `red`,
    cursor: `pointer`,
    position: `fixed`,
    top: 0,
    left: 0,
    zIndex: 12345678,
  })
  button.onclick = sendMessage
  document.documentElement.insertBefore(button, document.body)
}

// when ready, add red button
if (document.readyState !== `complete`) {
  addRedButton()
} else {
  window.addEventListener(`DOMContentLoaded`, () => {
    addRedButton()
  })
}
