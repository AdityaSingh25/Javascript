function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);

  script.onload = function () {
    console.log("Loaded Script with SRC :" + src);
    callback(null, src); //error ki jagah null dedunga
  };

  script.onerror = function () {
    console.log("Error occured loading the script with src " + src);
    callback(new Error("Src got some error"));
  };
}

const hello = (error, src) => {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello script is loaded with src " + src);
};

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  function goodMorning(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCeo();
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
      function goodMorning(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCeo();
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
          function goodMorning(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCeo();
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
              function goodMorning(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCeo();
                  return;
                }

                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                  function goodMorning(error, src) {
                    if (error) {
                      console.log(error);
                      sendEmergencyMessageToCeo();
                      return;
                    }

                    loadScript(
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                      function goodMorning(error, src) {
                        if (error) {
                          console.log(error);
                          sendEmergencyMessageToCeo();
                          return;
                        }
                        loadScript(
                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                          function goodMorning(error, src) {
                            if (error) {
                              console.log(error);
                              sendEmergencyMessageToCeo();
                              return;
                            }
                            loadScript(
                              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                              function goodMorning(error, src) {
                                if (error) {
                                  console.log(error);
                                  sendEmergencyMessageToCeo();
                                  return;
                                }
                                loadScript(
                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                  function goodMorning(error, src) {
                                    if (error) {
                                      console.log(error);
                                      sendEmergencyMessageToCeo();
                                      return;
                                    }
                                    loadScript(
                                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                      function goodMorning(error, src) {
                                        if (error) {
                                          console.log(error);
                                          sendEmergencyMessageToCeo();
                                          return;
                                        }
                                        loadScript(
                                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                          function goodMorning(error, src) {
                                            if (error) {
                                              console.log(error);
                                              sendEmergencyMessageToCeo();
                                              return;
                                            }
                                            loadScript(
                                              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                              function goodMorning(error, src) {
                                                if (error) {
                                                  console.log(error);
                                                  sendEmergencyMessageToCeo();
                                                  return;
                                                }
                                                loadScript(
                                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                  function goodMorning(
                                                    error,
                                                    src
                                                  ) {
                                                    if (error) {
                                                      console.log(error);
                                                      sendEmergencyMessageToCeo();
                                                      return;
                                                    }
                                                    loadScript(
                                                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                      function goodMorning(
                                                        error,
                                                        src
                                                      ) {
                                                        if (error) {
                                                          console.log(error);
                                                          sendEmergencyMessageToCeo();
                                                          return;
                                                        }
                                                        loadScript(
                                                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                          function goodMorning(
                                                            error,
                                                            src
                                                          ) {
                                                            if (error) {
                                                              console.log(
                                                                error
                                                              );
                                                              sendEmergencyMessageToCeo();
                                                              return;
                                                            }
                                                            loadScript(
                                                              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                              function goodMorning(
                                                                error,
                                                                src
                                                              ) {
                                                                if (error) {
                                                                  console.log(
                                                                    error
                                                                  );
                                                                  sendEmergencyMessageToCeo();
                                                                  return;
                                                                }
                                                                loadScript(
                                                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                  function goodMorning(
                                                                    error,
                                                                    src
                                                                  ) {
                                                                    if (error) {
                                                                      console.log(
                                                                        error
                                                                      );
                                                                      sendEmergencyMessageToCeo();
                                                                      return;
                                                                    }
                                                                    loadScript(
                                                                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                      function goodMorning(
                                                                        error,
                                                                        src
                                                                      ) {
                                                                        if (
                                                                          error
                                                                        ) {
                                                                          console.log(
                                                                            error
                                                                          );
                                                                          sendEmergencyMessageToCeo();
                                                                          return;
                                                                        }
                                                                        loadScript(
                                                                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                          function goodMorning(
                                                                            error,
                                                                            src
                                                                          ) {
                                                                            if (
                                                                              error
                                                                            ) {
                                                                              console.log(
                                                                                error
                                                                              );
                                                                              sendEmergencyMessageToCeo();
                                                                              return;
                                                                            }
                                                                            loadScript(
                                                                              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                              function goodMorning(
                                                                                error,
                                                                                src
                                                                              ) {
                                                                                if (
                                                                                  error
                                                                                ) {
                                                                                  console.log(
                                                                                    error
                                                                                  );
                                                                                  sendEmergencyMessageToCeo();
                                                                                  return;
                                                                                }
                                                                                loadScript(
                                                                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                                  function goodMorning(
                                                                                    error,
                                                                                    src
                                                                                  ) {
                                                                                    if (
                                                                                      error
                                                                                    ) {
                                                                                      console.log(
                                                                                        error
                                                                                      );
                                                                                      sendEmergencyMessageToCeo();
                                                                                      return;
                                                                                    }
                                                                                    loadScript(
                                                                                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                                      function goodMorning(
                                                                                        error,
                                                                                        src
                                                                                      ) {
                                                                                        if (
                                                                                          error
                                                                                        ) {
                                                                                          console.log(
                                                                                            error
                                                                                          );
                                                                                          sendEmergencyMessageToCeo();
                                                                                          return;
                                                                                        }
                                                                                        loadScript(
                                                                                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                                          function goodMorning(
                                                                                            error,
                                                                                            src
                                                                                          ) {
                                                                                            if (
                                                                                              error
                                                                                            ) {
                                                                                              console.log(
                                                                                                error
                                                                                              );
                                                                                              sendEmergencyMessageToCeo();
                                                                                              return;
                                                                                            }
                                                                                            loadScript(
                                                                                              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                                              function goodMorning(
                                                                                                error,
                                                                                                src
                                                                                              ) {
                                                                                                if (
                                                                                                  error
                                                                                                ) {
                                                                                                  console.log(
                                                                                                    error
                                                                                                  );
                                                                                                  sendEmergencyMessageToCeo();
                                                                                                  return;
                                                                                                }
                                                                                                loadScript(
                                                                                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                                                  function goodMorning(
                                                                                                    error,
                                                                                                    src
                                                                                                  ) {
                                                                                                    if (
                                                                                                      error
                                                                                                    ) {
                                                                                                      console.log(
                                                                                                        error
                                                                                                      );
                                                                                                      sendEmergencyMessageToCeo();
                                                                                                      return;
                                                                                                    }
                                                                                                    loadScript(
                                                                                                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                                                                                                      function goodMorning(
                                                                                                        error,
                                                                                                        src
                                                                                                      ) {
                                                                                                        if (
                                                                                                          error
                                                                                                        ) {
                                                                                                          console.log(
                                                                                                            error
                                                                                                          );
                                                                                                          sendEmergencyMessageToCeo();
                                                                                                          return;
                                                                                                        }
                                                                                                      }
                                                                                                    );
                                                                                                  }
                                                                                                );
                                                                                              }
                                                                                            );
                                                                                          }
                                                                                        );
                                                                                      }
                                                                                    );
                                                                                  }
                                                                                );
                                                                              }
                                                                            );
                                                                          }
                                                                        );
                                                                      }
                                                                    );
                                                                  }
                                                                );
                                                              }
                                                            );
                                                          }
                                                        );
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
