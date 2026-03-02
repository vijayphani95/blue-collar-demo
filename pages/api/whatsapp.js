export default function handler(req, res) {
  const message = req.body.Body || "Hello";

  const reply = `You said: ${message}`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(`
    <Response>
      <Message>${reply}</Message>
    </Response>
  `);
}
