const startUpFields = {
  startUpName: {
    title: "Name of Startup",
  },
  industryName: {
    title:
      "Industry / Sector of your Startup ( fintech, healthcare, ed-tech, etc.)",
  },
  location: {
    title: "Location",
  },
  founderName: {
    title: "Name of Founder/Representative of Start-up*",
    subtitle: "Enter the name of any one person from your Startup",
  },
  email: {
    title: "Email ID*",
    subtitle: "E-mail ID of the person mentioned above.",
    type: "email",
  },
  contact: {
    title: "Contact Number",
    type: "number",
  },
  startUpPhase: {
    title: "Start-up Phase*",
    options: [
      "Currently in ideation",
      "Has been ideated thoroughly",
      "Prototype is in the making",
      "Prototype has been released",
      "Has received funding in the past",
    ],
    otherOption: true,
  },
  discription: {
    title: "Elaborate Description of the Startup",
  },
  hire: {
    title:
      "Will you be interested in hiring students of IIT Hyderabad for internsip/placements.",
  },
  help: {
    title: "What kind of help do you expect from E-cell IIT Hyderabad?*",
  },
  links: {
    title: "Website / LinkedIn / Social Media links",
  },
  hear: {
    title: "How did you ear about this event?",
  },
};

const VcFields = {
  name: {
    title: "Name Of VC",
  },
  contact: {
    title: "Contact Number",
    type: "number",
  },
  email: {
    title: "Email ID",
    subtitle: "E-mail ID of the person mentioned above.",
    type: "email",
  },
  purpose: {
    title:
      "Please Select The Purpose Of Connecting With IIT Hyderabad Startups*",
    subtitle:
      "Do mark all the relevant fields. If you have any other collaborative idea in mind, then please the other section.",
    options: ["Investment", , "Advisory", "Strategic Partnership"],
    otherOption: true,
  },
  stage: {
    title:
      "Please mark the startup stage you would be interested in connecting with*",
    subtitle: "Do mark all the relevant filed.",
    options: [
      "Idea stage",
      "Prototype stage",
      "MVP stage",
      "PoC stage",
      "Early traction stage",
      "Open to all the stages",
    ],
  },
  domain: {
    title:
      "Please mention the domain of a startup you would be interested in connecting with*",
    subtitle:
      "Please mark as many fields as possible. Add the missing domains in the other section to cover your interests",
    options: [
      "Healthcare",
      "Deeptech, AI, ML, Blockchain",
      "Food & Hospitality",
      "Consumer Goods",
      "Automobiles",
      "Enterprise Technology",
      "Banking and Financial Services",
      "Biotechnology & Pharma tech",
      "EduTech",
      "Agriculture",
      "Social Entrepreneurship",
      "I am open to every domain",
    ],
    otherOption: true,
  },
  expertise: {
    title:
      "Please briefly mention your domain expertise—for example, Healthcare, Pharma,Automobile, Deeptech, FMCG, etc.",
  },
  ideas: {
    title:
      "If You Are Interested In A Strategic Partnership, Please Describe Any Specific Partnership Ideas You Have In Mind.",
  },
  info: {
    title:
      "Please share any other information which might help us in finding relevant startups for you.",
    subtitle:
      "You can mention about your industry connections, ongoing projects, current startup investment portfolio, or any other similar information here.",
  },
  links: {
    title: "Website  / LinkedIn / Social Media links",
  },
};

export { startUpFields, VcFields };
