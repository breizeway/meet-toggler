const turnOffMicButton = document.querySelector('[aria-label="Turn off microphone (⌘ + d)"]')
const turnOnMicButton = document.querySelector('[aria-label="Turn on microphone (⌘ + d)"]')
const turnOffCamButton = document.querySelector('[aria-label="Turn off camera (⌘ + e)"]')
const turnOnCamButton = document.querySelector('[aria-label="Turn on camera (⌘ + e)"]')

switch (request.command) {
    case 'toggleMicrophone':
        if (turnOffMicButton !== null) turnOffMicButton.click();
        else turnOnMicButton.click()
        break;
    case 'toggleCamera':
        if (turnOffCamButton !== null) turnOffCamButton.click();
        else turnOnCamButton.click()
        break;
    default:
        break;
}
