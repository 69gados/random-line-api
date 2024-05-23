async function getRandomLine() {
    const response = await fetch('frases.txt');
    const text = await response.text();
    const lines = text.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    return randomLine;
}

// This function will be called when the API endpoint is accessed
async function handleRequest(request) {
    const randomLine = await getRandomLine();
    const jsonResponse = JSON.stringify({ line: randomLine });
    return new Response(jsonResponse, {
        headers: { 'Content-Type': 'application/json' },
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});
