import { defineConfig } from "vite";
import contactHandler from "./api/contact.js";

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function contactDevMiddleware() {
  return {
    name: "contact-dev-middleware",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response) => {
        try {
          request.body = await readJsonBody(request);
          const vercelResponse = {
            setHeader: response.setHeader.bind(response),
            status(code) {
              response.statusCode = code;
              return this;
            },
            json(data) {
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify(data));
            }
          };

          contactHandler(request, vercelResponse);
        } catch {
          response.statusCode = 400;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ message: "Invalid JSON request body." }));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [contactDevMiddleware()]
});
