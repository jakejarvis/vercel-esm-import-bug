import fetch from "node-fetch";

export default async (req, res) => {
  const test = await fetch("https://httpbin.org/status/200");

  res.status(200).send(`fetch response status: ${test.status}`);
}
