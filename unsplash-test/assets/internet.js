// *CHECK IF THE USER IS CONNECTED TO THE INTERNET

window.addEventListener('load', () => {
    let text = document.getElementById('net_indicator');
    if (!navigator.onLine) text.textContent = `You're Offline😢`;
});
