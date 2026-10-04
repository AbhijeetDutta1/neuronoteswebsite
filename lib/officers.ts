export interface Officer {
  id: number;
  name: string;
  role: string;
  // e.g. "3rd year Biopsychology Major, Music Minor"
  studies?: string;
  // e.g. "Pre-Med"
  track?: string;
  // One string per paragraph
  bio: string[];
  // Path under /public, e.g. "/images/officers/jane.jpg"
  image?: string;
}

export const officers: Officer[] = [
  {
    id: 1,
    name: "Ella Chamie",
    role: "Co-President",
    studies: "3rd year Biopsychology Major, Architecture Minor",
    track: "Pre-Med",
    bio: [
      "I started NeuroNotes to bring together music and healthcare, two things I’ve always loved. Seeing how memory loss can impact individuals and their loved ones inspired me to create NeuroNotes. This organization brings music, connection, and Alzheimer’s awareness all in one.",
      "Through NeuroNotes, I help organize band shows, recitals, general meetings, and collaborations. Music and the brain have such a powerful connection and bringing that out makes a meaningful difference.",
      "You can usually find me running, playing piano, drawing graphics for the Daily Nexus, or making matcha lattes. I’m also passionate about neuroscience, memory, and understanding how the brain works!",
    ],
    image: "/images/officers/ella-chamie.jpg",
  },
  {
    id: 2,
    name: "Christine Safri",
    role: "Co-President",
    studies: "3rd year Biopsychology Major, Music Minor",
    track: "Pre-Med",
    bio: [
      "I am one of the co-presidents of NeuroNotes! I started this club in hopes of providing a familiar outlet to those lost in the confusion and anxieties of Alzheimer’s disease and other dementia. Having experienced the impacts of dementia on a loved one and being limited in contact by Covid, extending the language of music to greater causes has been an incredible way for me to give back to my community and families affected like my own.",
      "As co-president, I organize monthly music recitals at local senior homes, manage a team of undergraduate officers, musicians, and volunteers, and handle fundraising events supporting our club and the Alzheimer’s Association.",
      "Outside of NeuroNotes, I am passionate about playing and learning piano, education and tutoring, hot yoga, and baking!",
    ],
    image: "/images/officers/christine-safri.jpg",
  },
  {
    id: 5,
    name: "Georgia Matthews",
    role: "Social Media Co-Chair",
    studies: "3rd year Molecular and Cellular Biology Major",
    bio: [
      "As the co-social media/marketing officer for the club, my duties include creating posts for our social media platforms to promote our recitals and meetings, and to keep our online community informed and updated on how our club is striving to make a difference and how people can get involved.",
      "I am in the club because I am passionate about bringing people in all parts of our community, from students to seniors, together through music. I am driven to make a difference and raise awareness in the ongoing fight against Alzheimer’s, other neurodegenerative diseases, and mental health in general!",
      "My passions include being out in nature: going for walks, hiking or simply going to the beach. I’m also passionate about music; I play classical guitar, enjoy going to concerts, and listening to music while crafting.",
    ],
    image: "/images/officers/georgia-matthews.jpg",
  },
  {
    id: 6,
    name: "Zoe Harradine",
    role: "Social Media Co-Chair",
    studies: "3rd year Biology Major",
    track: "Pre-Nursing",
    bio: [
      "As Social Media Co-Chair for NeuroNotes, I create engaging content for our Instagram and TikTok to promote our events, including recitals, meetings, band performances, and more. I love finding creative ways to keep our community connected, share what NeuroNotes is all about, and get students excited to participate in our events.",
      "I joined NeuroNotes because my great-grandfather passed away from Alzheimer's disease, making the club's mission especially meaningful to me. I believe NeuroNotes is a wonderful way to support Alzheimer's research while spreading awareness throughout the UCSB and Isla Vista communities. I also believe music has a unique ability to bring people together and evoke meaningful memories, making it such an important part of our lives.",
      "Outside of NeuroNotes, I enjoy making matcha, cooking new recipes, playing soccer, hiking, and going to concerts.",
    ],
    image: "/images/officers/zoe-harradine.jpg",
  },
  {
    id: 3,
    name: "Dominic Grizelj",
    role: "Treasurer",
    studies: "3rd year Molecular and Cellular Biology Major",
    track: "Pre-Med",
    bio: [
      "As Treasurer, I manage the club's finances, including our bank account and fundraising proceeds, and help allocate our funds toward donations to the Alzheimer's Association.",
      "I joined NeuroNotes because I am passionate about raising awareness of Alzheimer's disease and helping students at UCSB and in the community become more knowledgeable about Alzheimer's and other neurodegenerative diseases. I also love sharing my passion for music and connecting with seniors in our community through musical performances. Music can be a meaningful way to connect with others and has been studied for its role in supporting memory and well-being.",
      "Outside of NeuroNotes, I enjoy playing piano, running, crocheting, playing chess, and reading.",
    ],
    image: "/images/officers/dominic-grizelj.jpg",
  },
  {
    id: 4,
    name: "Jacob Gouker",
    role: "Music Outreach",
    studies: "3rd year Biopsychology Major",
    track: "Pre-Med",
    bio: [
      "My responsibilities include recruiting musicians for senior home recitals and reaching out to bands for fundraising shows.",
      "I joined the club because I’m passionate about playing music and using it as a way to give back to our community.",
      "Outside of the club, I play guitar in a band in Isla Vista, and I enjoy reading and knitting.",
    ],
    image: "/images/officers/jacob-gouker.jpg",
  },
];
