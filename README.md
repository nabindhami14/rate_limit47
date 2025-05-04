Rate limiting is a technique used to control the amount of incoming or outgoing traffic within a network. In this context, a network refers to the line of communication between a client (e.g., a web browser) and our server (e.g., an API).

**Rate limit** controls the number of requests that are sent to the server or an API. It protects the server against user misuse to maintain stability. **Throttle** is a more rigid method that stops the clients from requesting the server for a certain period, which allows the API to effectively manage incoming traffic. The key difference between rate limit and throttle lies in the level at which these techniques operate and their responses when limits are reached. **Rate limiting gently slows down clients, reminding them of the specified request limits, while throttling takes a more rigid approach, temporarily halting clients from making requests for a set period.**

**The [express-rate-limit](https://express-rate-limit.mintlify.app/overview) middleware is used to control the rate of incoming requests to an Express application.** `windowMs` defines the time in milliseconds during which the rate limit applies. For example, `windowMs: 15 _ 60 _ 1000` sets a 15-minute window. `max` specifies the maximum number of requests allowed from a single IP address within the time window. If requests exceed this defined limit then the rate limit will be triggered.

**A `req.rateLimit` property is added to all requests with the `limit`, `used`, and `remaining number` of requests and, if the store provides it, a `resetTime` Date object. These may be used in your application code to take additional actions or inform the user of their status. Note that used includes the `current` request, so it should always be > 0.**

```js
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
```

---

> [**Express rate limit and slow down**](https://developer.mozilla.org/en-US/blog/securing-apis-express-rate-limit-and-slow-down/)
