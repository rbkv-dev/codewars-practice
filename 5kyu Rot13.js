let rot13 = (str) =>
  str.replace(/[a-zA-Z]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) + (s < "N" || s < "n" ? 13 : -13))
  );
