import autocannon from "autocannon";

const run = () => {
  const instance = autocannon({
    url: "",
    method: "GET",
    headers: {
      "x-access-token":
        "",
      "client-id": "",
      Authorization:
        "",
    },
    connections: 10000,
    // pipelining: 10,
    duration: 20,
  });

  autocannon.track(instance, {
    renderProgressBar: true,
    renderResultsTable: true,
    // renderLatencyTable: true,
  });
};

run();
