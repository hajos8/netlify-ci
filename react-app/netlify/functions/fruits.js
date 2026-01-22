export default async function (request, context) {
    console.log("Fruits function invoked");
    console.log("Request method:", request.method);
    console.log("Request headers:", request.headers);
    console.log("Request body:", request.body);

    return new Response(JSON.stringify(['Apple', 'Banana', 'Cherry']), { status: 200 });
}