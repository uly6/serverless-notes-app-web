import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({
    dsn:
      "https://2c1c65b9a4b44f8696d4618bfa74ed8a@o444420.ingest.sentry.io/5419295",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let err = error;
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  // Amplify’s Auth package doesn’t throw Error objects, it throws objects with a couple of properties, including the message
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    err = new Error(message);

    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(err, errorInfo);

  alert(message);
}
