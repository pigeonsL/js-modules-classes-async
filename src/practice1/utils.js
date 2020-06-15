export default getURL;

function getURL(address, port, path) {
  return `${address}:${port}${path}`;
}
