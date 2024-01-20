// Generate a random contact
function generateContact() {
    const names = ["John", "Jane", "Mike", "Emily"];
    const lastNames = ["Doe", "Smith", "Johnson", "Williams"];
    const emails = [
      "john@example.com",
      "jane@example.com",
      "mike@example.com",
      "emily@example.com",
    ];
  
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];
  
    return {
      name: randomName,
      lastName: randomLastName,
      email: randomEmail,
    };
  }
  
  function GET(req, res, url, payload) {
    const contactInfo = generateContact();
    res.end(
      JSON.stringify({
        contactInfo,
      })
    );
  }
  
  // Route for OPTIONS requests
  function OPTIONS(req, res, url, payload) {
    res.end(JSON.stringify({ name: "TEST" }));
  }
  
  // Route for POST requests
  function POST(req, res, url, payload) {
    res.end(JSON.stringify(payload));
  }
  
  export { GET, OPTIONS, POST };