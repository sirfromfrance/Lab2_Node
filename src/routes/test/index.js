function generateRandomText() {
    const loremIpsum = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
    ];
  
    // Generate a random number of words (between 3 and 6)
    const numberOfWords = Math.floor(Math.random() * 4) + 3;
  
    // Create pseudo Lorem Ipsum text by concatenating random words
    const pseudoLoremText = Array.from({ length: numberOfWords }, () => {
      const randomIndex = Math.floor(Math.random() * loremIpsum.length);
      return loremIpsum[randomIndex];
    }).join(" ");
  
    return {
      text: pseudoLoremText,
    };
  }
  
  function GET(req, res, url, payload) {
    const randomText = generateRandomText();
    res.end(
      JSON.stringify({
        randomText,
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