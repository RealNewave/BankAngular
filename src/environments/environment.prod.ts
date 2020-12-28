export const environment = {
  production: true,
  apiUrl: window["env"]["apiUrl"] || "http://eventsourcing.devex:8080",
  debug: window["env"]["debug"] || false
};
