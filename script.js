const chaptersByBoardAndSubject = {
  cbse: {
    maths: [
      "Chapter 1: Real Numbers",
      "Chapter 2: Polynomials",
      "Chapter 3: Pair of Linear Equations in Two Variables",
      "Chapter 4: Quadratic Equations",
      "Chapter 5: Arithmetic Progressions",
      "Chapter 6: Triangles",
      "Chapter 7: Coordinate Geometry",
      "Chapter 8: Introduction to Trigonometry",
      "Chapter 9: Some Applications of Trigonometry",
      "Chapter 10: Circles",
      "Chapter 11: Areas Related to Circles",
      "Chapter 12: Surface Areas and Volumes",
      "Chapter 13: Statistics",
      "Chapter 14: Probability",
    ],
    science: [
      "Chapter 1: Chemical Reactions and Equations",
      "Chapter 2: Acids, Bases and Salts",
      "Chapter 3: Metals and Non-metals",
      "Chapter 4: Carbon and its Compounds",
      "Chapter 5: Life Processes",
      "Chapter 6: Control and Coordination",
      "Chapter 7: How do Organisms Reproduce?",
      "Chapter 8: Heredity",
      "Chapter 9: Light – Reflection and Refraction",
      "Chapter 10: The Human Eye and the Colourful World",
      "Chapter 11: Electricity",
      "Chapter 12: Magnetic Effects of Electric Current",
      "Chapter 13: Our Environment",
    ],
    "social-science": [
      "History: The Rise of Nationalism in Europe",
      "History: Nationalism in India",
      "History: The Making of a Global World",
      "History: Print Culture and the Modern World",
      "Geography: Resources and Development",
      "Geography: Forest and Wildlife Resources",
      "Geography: Water Resources",
      "Geography: Agriculture",
      "Geography: Minerals and Energy Resources",
      "Geography: Manufacturing Industries",
      "Geography: Lifelines of National Economy",
      "Political Science: Power Sharing",
      "Political Science: Federalism",
      "Political Science: Gender, Religion and Caste",
      "Political Science: Political Parties",
      "Political Science: Outcomes of Democracy",
      "Economics: Development",
      "Economics: Sectors of the Indian Economy",
      "Economics: Money and Credit",
      "Economics: Globalisation and the Indian Economy",
      "Economics: Consumer Rights",
    ],
    english: [
      "First Flight - Ch 1: A Letter to God",
      "First Flight - Ch 2: Nelson Mandela: Long Walk to Freedom",
      "First Flight - Ch 3: Two Stories about Flying",
      "First Flight - Ch 4: From the Diary of Anne Frank",
      "First Flight - Ch 5: Glimpses of India",
      "First Flight - Ch 6: Mijbil the Otter",
      "First Flight - Ch 7: Madam Rides the Bus",
      "First Flight - Ch 8: The Sermon at Benares",
      "First Flight - Ch 9: The Proposal",
      "Footprints Without Feet - Ch 1: A Triumph of Surgery",
      "Footprints Without Feet - Ch 2: The Thief's Story",
      "Footprints Without Feet - Ch 3: The Midnight Visitor",
      "Footprints Without Feet - Ch 4: A Question of Trust",
      "Footprints Without Feet - Ch 5: Footprints Without Feet",
      "Footprints Without Feet - Ch 6: The Making of a Scientist",
      "Footprints Without Feet - Ch 7: The Necklace",
      "Footprints Without Feet - Ch 8: Bholi",
      "Footprints Without Feet - Ch 9: The Book That Saved the Earth",
    ],
    hindi: [
      "क्षितिज भाग 2 - पद (सूरदास)",
      "क्षितिज भाग 2 - राम-लक्ष्मण-परशुराम संवाद",
      "क्षितिज भाग 2 - सवैया और कवित्त",
      "क्षितिज भाग 2 - आत्मकथ्य",
      "क्षितिज भाग 2 - उत्साह और अट नहीं रही है",
      "क्षितिज भाग 2 - यह दंतुरित मुस्कान और फसल",
      "क्षितिज भाग 2 - छाया मत छूना",
      "क्षितिज भाग 2 - कन्यादान",
      "क्षितिज भाग 2 - संगतकार",
      "कृतिका भाग 2 - नेताजी का चश्मा",
      "कृतिका भाग 2 - बालगोबिन भगत",
      "कृतिका भाग 2 - लखनवी अंदाज़",
      "कृतिका भाग 2 - मानवीय करुणा की दिव्य चमक",
      "कृतिका भाग 2 - एक कहानी यह भी",
      "कृतिका भाग 2 - नौबतखाने में इबादत",
    ],
  },
  bseb: {
    maths: [
      "Chapter 1: Real Numbers",
      "Chapter 2: Polynomials",
      "Chapter 3: Pair of Linear Equations in Two Variables",
      "Chapter 4: Quadratic Equations",
      "Chapter 5: Arithmetic Progressions",
      "Chapter 6: Triangles",
      "Chapter 7: Coordinate Geometry",
      "Chapter 8: Introduction to Trigonometry",
      "Chapter 9: Some Applications of Trigonometry",
      "Chapter 10: Circles",
      "Chapter 11: Constructions",
      "Chapter 12: Areas Related to Circles",
      "Chapter 13: Surface Areas and Volumes",
      "Chapter 14: Statistics",
      "Chapter 15: Probability",
    ],
    science: [
      "Chapter 1: Chemical Reactions and Equations",
      "Chapter 2: Acids, Bases and Salts",
      "Chapter 3: Metals and Non-metals",
      "Chapter 4: Carbon and its Compounds",
      "Chapter 5: Periodic Classification of Elements",
      "Chapter 6: Life Processes",
      "Chapter 7: Control and Coordination",
      "Chapter 8: How do Organisms Reproduce?",
      "Chapter 9: Heredity and Evolution",
      "Chapter 10: Light – Reflection and Refraction",
      "Chapter 11: The Human Eye and the Colourful World",
      "Chapter 12: Electricity",
      "Chapter 13: Magnetic Effects of Electric Current",
      "Chapter 14: Sources of Energy",
      "Chapter 15: Our Environment",
      "Chapter 16: Management of Natural Resources",
    ],
    "social-science": [
      "History: The Rise of Nationalism in Europe",
      "History: Socialism and Communism",
      "History: Nationalist Movement in Indo-China",
      "History: Nationalism in India",
      "History: Economy and Livelihood",
      "History: Urbanisation and Urban Life",
      "History: Trade and Globalisation",
      "History: Press, Culture and Nationalism",
      "Political Science: Power Sharing in Democracy",
      "Political Science: Working of Power Sharing",
      "Political Science: Competition and Struggle in Democracy",
      "Political Science: Achievements of Democracy",
      "Political Science: Challenges to Democracy",
      "Economics: Economy and History of its Development",
      "Economics: Income of State and Nation",
      "Economics: Money, Savings and Credit",
      "Economics: Our Financial Institutions",
      "Economics: Employment and Services",
      "Economics: Globalisation",
      "Economics: Consumer Awareness and Protection",
      "Geography: India - Resources and Utilisation",
      "Geography: Agriculture",
      "Geography: Manufacturing Industries",
      "Geography: Transport, Communication and Trade",
      "Geography: Bihar - Agriculture and Forest Resources",
      "Disaster Management: Natural Disasters and Management",
    ],
    english: [
      "Prose: The Pace for Living",
      "Prose: Me and the Ecology Bit",
      "Prose: Gillu",
      "Prose: What is Wrong with Indian Films",
      "Prose: Acceptance Speech",
      "Prose: Once Upon a Time",
      "Prose: The Unity of Indian Culture",
      "Prose: Little Girls Wiser Than Man",
      "Poetry: God Made the Country",
      "Poetry: Ode on Solitude",
      "Poetry: Polythene Bag",
      "Poetry: Thinner Than a Crescent",
      "Poetry: The Empty Heart",
      "Poetry: Koel",
      "Poetry: The Sleeping Porter",
      "Poetry: Martha",
    ],
    hindi: [
      "गोधूलि भाग 2 - श्रम विभाजन और जाति प्रथा",
      "गोधूलि भाग 2 - विष के दाँत",
      "गोधूलि भाग 2 - भारत से हम क्या सीखें",
      "गोधूलि भाग 2 - नाखून क्यों बढ़ते हैं",
      "गोधूलि भाग 2 - नागरी लिपि",
      "गोधूलि भाग 2 - बहादुर",
      "गोधूलि भाग 2 - परंपरा का मूल्यांकन",
      "गोधूलि भाग 2 - जीत जीत मैं निरखत हूँ",
      "गोधूलि भाग 2 - अविनियो",
      "गोधूलि भाग 2 - मछली",
      "गोधूलि भाग 2 - नौबतखाने में इबादत",
      "गोधूलि भाग 2 - शिक्षा और संस्कृति",
      "वर्णिका भाग 2 - दही वाली मंगम्मा",
      "वर्णिका भाग 2 - ढहते विश्वास",
      "वर्णिका भाग 2 - माँ",
      "वर्णिका भाग 2 - नगर",
      "वर्णिका भाग 2 - धरती कब तक घूमेगी",
    ],
  },
};
const form = document.getElementById("ai-generation-form");
const boardSelect = document.getElementById("board");
const subjectSelect = document.getElementById("subject");
const chapterSelect = document.getElementById("chapters");
const mediumRadios = document.getElementsByName("medium");
const typeRevision = document.getElementById("revision-type");

boardSelect.addEventListener("change", function () {
  const selectedBoard = boardSelect.value;

  subjectSelect.disabled = false;
  subjectSelect.options[0].text = "Select Subject";

  subjectSelect.value = "";
  chapterSelect.disabled = true;
  chapterSelect.innerHTML =
    '<option value="" disabled selected>-- Choose Subject First --</option>';
});
subjectSelect.addEventListener("change", function () {
  const selectedBoard = boardSelect.value;
  const selectedSubject = subjectSelect.value;

  chapterSelect.disabled = false;
  chapterSelect.innerHTML = "";

  if (
    chaptersByBoardAndSubject[selectedBoard] &&
    chaptersByBoardAndSubject[selectedBoard][selectedSubject]
  ) {
    const chapters = chaptersByBoardAndSubject[selectedBoard][selectedSubject];
    chapters.forEach((chapter) => {
      const option = document.createElement("option");
      option.value = chapter;
      option.textContent = chapter;
      chapterSelect.appendChild(option);
    });
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedBoard = boardSelect.value;
  const selectedSubject = subjectSelect.value;
  const selectedChapter = chapterSelect.value;
  const selectedMedium = Array.from(mediumRadios).find(
    (radio) => radio.checked,
  )?.value;
  const selectedRevisionType = typeRevision.value;
  console.log(
    selectedBoard,
    selectedSubject,
    selectedChapter,
    selectedMedium,
    selectedRevisionType,
  );
});
