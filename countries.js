(function () {
   "use strict";
   var countries = [
      ["Islamic Republic of Afghanistan", "AF"],
      ["Republic of Albania", "AL"],
      ["People's Democratic Republic of Algeria", "AG"],
      ["Principality of Andorra", "AN"],
      ["Republic of Angola", "AO"],
      ["Antiqua and Barbuda", "AC"],
      ["Argentine Republic", "AR"],
      ["Republic of Armenia", "AM"],
      ["Commonwealth of Australia", "AS"],
      ["Republic of Austria", "AU"],
      ["Republic of Azerbaijan", "AJ"],
      ["Commonwealth of The Bahamas", "BF"],
      ["Kingdom of Bahrain", "BA"],
      ["People's Republic of Bangladesh", "BG"],
      ["Barbados", "BB"],
      ["Republic of Belarus", "BO"],
      ["Kingdom of Belgium", "BE"],
      ["Belize", "BH"],
      ["Republic of Benin", "BN"],
      ["Kingdom of Bhutan", "BT"],
      ["Plurinational State of Bolivia", "BL"],
      ["Bosnia and Herzegovina", "BK"],
      ["Republic of Botswana", "BC"],
      ["Federative Republic of Brazil", "BR"],
      ["Brunei Darussalam", "BX"],
      ["Republic of Bulgaria", "BU"],
      ["Burkina Faso", "UV"],
      ["Union of Burma", "BM"],
      ["Republic of Burundi", "BY"],
      ["Republic of Cabo Verde", "CV"],
      ["Kingdom of Cambodia", "CB"],
      ["Republic of Cameroon", "CM"],
      ["Canada", "CA"],
      ["Central African Republic", "CT"],
      ["Republic of Chad", "CD"],
      ["Republic of Chile", "CI"],
      ["People's Republic of China", "CH"],
      ["Republic of Colombia", "CO"],
      ["Union of the Comoros", "CN"],
      ["Republic of the Congo", "CF"],
      ["Democratic Republic of the Congo", "CG"],
      ["Republic of Costa Rica", "CS"],
      ["Republic of CÃ´te d'Ivoire", "IV"],
      ["Republic of Croatia", "HR"],
      ["Republic of Cuba", "CU"],
      ["Republic of Cyprus", "CY"],
      ["Czech Republic", "EZ"],
      ["Kingdom of Denmark", "DA"],
      ["Republic of Djibouti", "DJ"],
      ["Commonwealth of Dominica", "DO"],
      ["Dominican Republic", "DR"],
      ["Republic of Ecuador", "EC"],
      ["Arab Republic of Egypt", "EG"],
      ["Republic of El Salvador", "ES"],
      ["Republic of Equatorial Guinea", "EK"],
      ["State of Eritrea", "ER"],
      ["Republic of Estonia", "EN"],
      ["Federal Democratic Republic of Ethiopia", "ET"],
      ["Republic of Fiji", "FJ"],
      ["Republic of Finland", "FI"],
      ["French Republic", "FR"],
      ["Gabonese Republic", "GB"],
      ["Republic of The Gambia", "GA"],
      ["Georgia", "GG"],
      ["Federal Republic of Germany", "GM"],
      ["Republic of Ghana", "GH"],
      ["Hellenic Republic", "GR"],
      ["Grenada", "GJ"],
      ["Republic of Guatemala", "GT"],
      ["Republic of Guinea", "GV"],
      ["Republic of Guinea-Bissau", "PU"],
      ["Co-operative Republic of Guyana", "GY"],
      ["Republic of Haiti", "HA"],
      ["Holy See", "VT"],
      ["Republic of Honduras", "HO"],
      ["Hungary", "HU"],
      ["Republic of Iceland", "IC"],
      ["Republic of India", "IN"],
      ["Republic of Indonesia", "ID"],
      ["Islamic Republic of Iran", "IR"],
      ["Republic of Iraq", "IZ"],
      ["Ireland", "EI"],
      ["State of Israel", "IS"],
      ["Italian Republic", "IT"],
      ["Jamaica", "JM"],
      ["Japan", "JA"],
      ["Hashemite Kingdom of Jordan", "JO"],
      ["Republic of Kazakhstan", "KZ"],
      ["Republic of Kenya", "KE"],
      ["Republic of Kiribati", "KR"],
      ["Democratic People's Republic of Korea", "KN"],
      ["Republic of Korea", "KS"],
      ["Republic of Kosovo", "KV"],
      ["State of Kuwait", "KU"],
      ["Kyrgyz Republic", "KG"],
      ["Lao People's Democratic Republic", "LA"],
      ["Republic of Latvia", "LG"],
      ["Lebanese Republic", "LE"],
      ["Kingdom of Lesotho", "LT"],
      ["Republic of Liberia", "LI"],
      ["Libya", "LY"],
      ["Principality of Liechtenstein", "LS"],
      ["Republic of Lithuania", "LH"],
      ["Grand Duchy of Luxembourg", "LU"],
      ["Republic of Macedonia", "MK"],
      ["Republic of Madagascar", "MA"],
      ["Republic of Malawi", "MI"],
      ["Malaysia", "MY"],
      ["Republic of Maldives", "MV"],
      ["Republic of Mali", "ML"],
      ["Republic of Malta", "MT"],
      ["Republic of the Marshall Islands", "RM"],
      ["Islamic Republic of Mauritania", "MR"],
      ["Republic of Mauritius", "MP"],
      ["United Mexican States", "MX"],
      ["Federated States of Micronesia", "FM"],
      ["Republic of Moldova", "MD"],
      ["Principality of Monaco", "MN"],
      ["Mongolia", "MG"],
      ["Montenegro", "MJ"],
      ["Kingdom of Morocco", "MO"],
      ["Republic of Mozambique", "MZ"],
      ["Republic of Namibia", "WA"],
      ["Republic of Nauru", "NR"],
      ["Federal Democratic Republic of Nepal", "NP"],
      ["Kingdom of the Netherlands", "NL"],
      ["New Zealand", "NZ"],
      ["Republic of Nicaragua", "NU"],
      ["Republic of Niger", "NG"],
      ["Federal Republic of Nigeria", "NI"],
      ["Kingdom of Norway", "NO"],
      ["Sultanate of Oman", "MU"],
      ["Islamic Republic of Pakistan", "PK"],
      ["Republic of Palau", "PS"],
      ["Republic of Panama", "PM"],
      ["Independent State of Papua New Guinea", "PP"],
      ["Republic of Paraguay", "PA"],
      ["Republic of Peru", "PE"],
      ["Republic of the Philippines", "RP"],
      ["Republic of Poland", "PL"],
      ["Portuguese Republic", "PO"],
      ["State of Qatar", "QA"],
      ["Romania", "RO"],
      ["Russian Federation", "RS"],
      ["Republic of Rwanda", "RW"],
      ["Federation of Saint Kitts and Nevis", "SC"],
      ["Saint Lucia", "ST"],
      ["Saint Vincent and the Grenadines", "VC"],
      ["Independent State of Samoa", "WS"],
      ["Republic of San Marino", "SM"],
      ["Democratic Republic of Sao Tome and Principe", "TP"],
      ["Kingdom of Saudi Arabia", "SA"],
      ["Republic of Senegal", "SG"],
      ["Republic of Serbia", "RI"],
      ["Republic of Seychelles", "SE"],
      ["Republic of Sierra Leone", "SL"],
      ["Republic of Singapore", "SN"],
      ["Slovak Republic", "LO"],
      ["Republic of Slovenia", "SI"],
      ["Solomon Islands", "BP"],
      ["Federal Republic of Somalia", "SO"],
      ["Republic of South Africa", "SF"],
      ["Republic of South Sudan", "OD"],
      ["Kingdom of Spain", "SP"],
      ["Democratic Socialist Republic of Sri Lanka", "CE"],
      ["Republic of the Sudan", "SU"],
      ["Republic of Suriname", "NS"],
      ["Kingdom of Swaziland", "WZ"],
      ["Kingdom of Sweden", "SW"],
      ["Swiss Confederation", "SZ"],
      ["Syrian Arab Republic", "SY"],
      ["Republic of Tajikistan", "TI"],
      ["United Republic of Tanzania", "TZ"],
      ["Kingdom of Thailand", "TH"],
      ["Democratic Republic of Timor-Leste", "TT"],
      ["Togolese Republic", "TO"],
      ["Kingdom of Tonga", "TN"],
      ["Republic of Trinidad and Tobago", "TD"],
      ["Republic of Tunisia", "TS"],
      ["Republic of Turkey", "TU"],
      ["Turkmenistan", "TX"],
      ["Tuvalu", "TV"],
      ["Republic of Uganda", "UG"],
      ["Ukraine", "UP"],
      ["United Arab Emirates", "AE"],
      ["United Kingdom of Great Britain and Northern Ireland", "UK"],
      ["United States of America", "US"],
      ["Oriental Republic of Uruguay", "UY"],
      ["Republic of Uzbekistan", "UZ"],
      ["Republic of Vanuatu", "NH"],
      ["Bolivarian Republic of Venezuela", "VE"],
      ["Socialist Republic of Vietnam", "VM"],
      ["Republic of Yemen", "YM"],
      ["Republic of Zambia", "ZA"],
      ["Republic of Zimbabwe", "ZI"],
      ["Taiwan ", "TW"],
      ["Republic of Zimbabwe", "ZI"]
   ],
       countryContainer = document.querySelector("#countryDayWidget");

   function putStyleLink(countryContainer) {
      var linkStyle = document.createElement("link");

      linkStyle.href = "https://content.byui.edu/integ/gen/316e5ad6-51c9-483a-8ca5-dc1e077671fe/0/countries.css";
      linkStyle.type = "text/css";
      linkStyle.rel = "stylesheet";
      countryContainer.appendChild(linkStyle);
   }

   function getCountryIndex() {
      return Math.floor(Math.random() * countries.length);
   }

   function generateCountryName(countryContainer, number) {
      var country = document.createElement("h1"),
         countryText = document.createTextNode(countries[number][0]);

      country.appendChild(countryText);
      countryContainer.appendChild(country);
   }

   function generateFlag(container1, number) {
      var flagImg = document.createElement("img");
      flagImg.src = "https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/" + countries[number][1].toLowerCase() + "-lgflag.gif";
      flagImg.alt = countries[number][0] + " Flag";
      container1.appendChild(flagImg);
   }

   function picSrc(container1) {
      var picSrcPara = document.createElement("p"),
         picSrcLink = document.createElement("a"),
         picSrcText = document.createTextNode("Picture Source: "),
         worldFact = document.createTextNode("World Fact Book");
      picSrcLink.href = "https://www.cia.gov/library/publications/the-world-factbook/";
      picSrcLink.target = "_blank";
      picSrcLink.appendChild(worldFact);
      picSrcPara.appendChild(picSrcText);
      picSrcPara.appendChild(picSrcLink);
      container1.appendChild(picSrcPara);
   }

   function wolfram(container2, number) {
      var wolframAlphaPara = document.createElement("p"),
         wolframAlphaLink = document.createElement("a"),
         wolframAlphaText = document.createTextNode("WolframAlpha");

      wolframAlphaLink.href = "http://www.wolframalpha.com/input/?i=usa+vs.+" + countries[number][0];
      wolframAlphaLink.target = "_blank";

      wolframAlphaLink.appendChild(wolframAlphaText);
      wolframAlphaPara.appendChild(wolframAlphaLink);

      container2.appendChild(wolframAlphaPara);
   }

   function cia(container2, number) {
      var ciaPara = document.createElement("p"),
         ciaLink = document.createElement("a"),
         ciaText = document.createTextNode("CIA.gov");

      ciaLink.href = 'https://www.cia.gov/library/publications/the-world-factbook/geos/' + countries[number][1].toLowerCase() + '.html';
      ciaLink.target = "_blank";

      ciaLink.appendChild(ciaText);
      ciaPara.appendChild(ciaLink);

      container2.appendChild(ciaPara);
   }

   function newCountry(container2, countryContainer) {
      var newCountryPara = document.createElement("button"),
         newCountryText = document.createTextNode("Get a New Country");

      newCountryPara.id = "newCountryPara";
      newCountryPara.appendChild(newCountryText);

      container2.appendChild(newCountryPara);

      newCountryPara.onclick = function () {
         countryContainer.innerHTML = "";
         makeCountryDisplay(countryContainer, getCountryIndex());
      };
   }

   function makeCountryDisplay(countryContainer, number) {
      var sectionContain = document.createElement("section"),
          container1 = document.createElement("aside"),
          container2 = document.createElement("aside");

      putStyleLink(countryContainer);
      generateCountryName(countryContainer, number);
      generateFlag(container1, number);
      picSrc(container1);
      wolfram(container2, number);
      cia(container2, number);
      newCountry(container2, countryContainer);

      sectionContain.appendChild(container1);
      sectionContain.appendChild(container2);
      countryContainer.appendChild(sectionContain);
   }

   function start (func) {
      var number = func(),
         countryContainer = document.createElement("main");

      makeCountryDisplay(countryContainer, number);
      return countryContainer;
   }

   countryContainer.appendChild(start(getCountryIndex));

}());
