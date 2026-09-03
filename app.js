const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
<<<<<<< HEAD
        <h1>Hello from Node.js team hello team \\\\ </h1>
=======


>>>>>>> 02dc6245c05cbbf0333d3daa0ad7560ee2fd02f8
>>>>>>> de009aa85237db08226566eb3e4101db14df6fd5
>>>>>>> 8f01d89d64dc6b9c46cb87953618041ba85bb52a
        <p>Application deployed using GitHub Actions → AWS EC2</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});