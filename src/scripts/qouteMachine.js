let quotes = [
    {
      quote: "I loved you first",
      quoter: "Jesus IAmthatIAm",
    },
  
    {
      quote: "God is always present, He's here now.",
      quoter: "I. MaryAnne",
    },
  
    {
      quote: "Only God knows how best to help a man",
      quoter: "S. Mone",
    },
    {
      quote: "How be it, It shall come to pass",
      quoter: "E. Gloria",
    },
    {
      quote: "...part of the journey is the end.",
      quoter: "Tony",
    },
    {
      quote: " In the end, it's you and God.",
      quoter: " J. Rebecca",
    },
    {
      quote: " Insist on winning",
      quoter: "O. Stephanie ",
    },
    {
      quote:
        "...comes great power, comes great responsibilty / To whom much is given, much shall be required.",
      quoter: "SpiderMan / st. Luke 12:48b",
    },
  ];
  
  let magicNum = Math.floor(Math.random() * quotes.length);
 const quotesBox =  document.getElementById('qoute-box')
  
  for (let i = magicNum; i <= quotes.length; i++) {
    quotesBox.innerText = quotes[i].quote + "\n~" + quotes[i].quoter;
    quotesBox.classList += 'animate-fade-in font-semibold'
    break;
  }