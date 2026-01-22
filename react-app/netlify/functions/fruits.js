export default function (request, context) {
    console.log("Fruits function invoked");
    console.log("Request method:", request.method);
    console.log("Request headers:", request.headers);
    console.log("Request body:", request.body);

    return { statusCode: 200, body: JSON.stringify(['Apple', 'Banana', 'Cherry']) };
}