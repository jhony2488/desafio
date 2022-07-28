async function api(requestType: string, endpoint: string = "/", body: any) {
  let item: any[] = [];
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const myInit: any = { method: requestType, body };

  if ((requestType = "GET" || requestType == "get")) {
    const response = await fetch("http://localhost:3000" + endpoint).then((r) => r.json());
    item = response;
    return item;
  }
  await fetch("http://localhost:3000" + endpoint, myInit)
    .then((response: any) => {
      return response.data;
    })
    .catch((err) => {
      alert(err);
    });
  return item;
}

export default api;
