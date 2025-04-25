import autocannon from "autocannon";

const run = () => {
  const instance = autocannon({
    url: "http://localhost:3000",
    method: "GET",
    connections: 500,
    pipelining: 10,
    duration: 20,
  });

  autocannon.track(instance, {
    renderProgressBar: true,
    renderResultsTable: true,
    // renderLatencyTable: true,
  });
};

run();
