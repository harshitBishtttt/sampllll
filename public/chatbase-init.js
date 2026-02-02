(function () {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) window.chatbase.q = [];
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });
  }

  window.chatbase("registerTools", {
    search_fhir_patient: async (args) => {
      try {
        const { family = "", given = "", email = "", birthdate = "", gender = "" } = args;
        const query = new URLSearchParams({ family, given, email, birthdate, gender }).toString();
        debugger
        ggg=localStorage.getItem("authToken")
        console.count(ggg)
        token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY3NThlNTYzYzBiNjRhNzVmN2UzZGFlNDk0ZDM5NTk1YzE0MGVmOTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWhyYXNzaXN0LTIxMThjIiwiYXVkIjoiZWhyYXNzaXN0LTIxMThjIiwiYXV0aF90aW1lIjoxNzcwMDMzMDEwLCJ1c2VyX2lkIjoiUU9hZjhxYXNvNlNhdVQwUlBHdWxRUzE3ZWE5MyIsInN1YiI6IlFPYWY4cWFzbzZTYXVUMFJQR3VsUVMxN2VhOTMiLCJpYXQiOjE3NzAwMzMwMTAsImV4cCI6MTc3MDAzNjYxMCwiZW1haWwiOiJoYmlzdGhAbWFpbGluYXRvci5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiaGJpc3RoQG1haWxpbmF0b3IuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.juQbgONszAhLEJci_XDg27o2i3Ga0jxvyANkSigqn8OT2kwOpBgrRsMRnjeH32Ff0rY43RiymXFLwdBGga9nLJGe6WC6JlXvO76-AvPZ-6dBdDlqkDMU0nmecAWfPmAVNlX55umh3WCNrueSn6sZOSWgFG-87_WtEG3Vzd-QG7cWUg8eVIup3WKuwiMWf7tJuoBkoM8qd2cvy1fxTsM3wRWWUsz3wafsDyvoFt-dXNy3yAb19M7OIn6QDLS4scSVoztPRNWk3buykL78k-ILh90VNu-FzZ6VGvjeUt62xEoKBy9Ktwahyb8VYhiqHMLCOQN1r_jc1o3dXSM24uYq4g"
        const response = await fetch(
          `https://fhirassist.rsystems.com:481/baseR4/Patient?${query}`,
          {
            method: "GET",
            headers: {
              "Accept": "application/fhir+json",
              "Authorization": "Bearer " + ggg
            }
          }
        );

        if (!response.ok) throw new Error("Failed to fetch patient data");
        return { status: "success", data: await response.json() };
      } catch (error) {
        return { status: "error", error: error.message };
      }
    }
  });
})();
