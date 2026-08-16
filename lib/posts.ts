export type Post = {
  id: string;
  authorName: string;
  authorTitle: string;
  avatarSeed: number; // i.pravatar.cc image id (1-70)
  timeAgo: string;
  text: string;
  image?: {
    seed: string; // picsum.photos seed
    label: string;
    aspect: number; // width / height
  };
  reactions: number;
  comments: number;
  reposts: number;
};

export const posts: Post[] = [
  {
    id: "1",
    authorName: "Amara Okafor",
    authorTitle: "Product Manager at Northwind Labs",
    avatarSeed: 47,
    timeAgo: "3h",
    text: "Shipped a feature this week that took three failed attempts to get right. The lesson wasn't technical — it was that we kept solving the problem we assumed users had instead of the one they actually reported. Talk to your users before you talk to your IDE.",
    reactions: 482,
    comments: 37,
    reposts: 12,
  },
  {
    id: "2",
    authorName: "Diego Fernandez",
    authorTitle: "Founder, buildstack.dev",
    avatarSeed: 33,
    timeAgo: "6h",
    text: "Our onboarding funnel chart from last quarter. Biggest drop-off wasn't signup, it was the first empty state. Redesigned it around a single obvious next action and conversion jumped 22%.",
    image: { seed: "onboarding-funnel-q2", label: "Onboarding funnel — Q2", aspect: 4 / 3 },
    reactions: 918,
    comments: 64,
    reposts: 41,
  },
  {
    id: "3",
    authorName: "Priya Natarajan",
    authorTitle: "Senior Software Engineer at Crestline",
    avatarSeed: 25,
    timeAgo: "9h",
    text: "Unpopular opinion: most style guides fail not because the rules are wrong, but because nobody explains the reasoning. A rule with no rationale is just something to argue about at 2am on a Friday PR.",
    reactions: 256,
    comments: 89,
    reposts: 8,
  },
  {
    id: "4",
    authorName: "Marcus Chen",
    authorTitle: "Engineering Manager at Fieldstone",
    avatarSeed: 12,
    timeAgo: "12h",
    text: "Ran an internal workshop today on writing better incident postmortems. Slide that landed hardest: 'blameless' doesn't mean 'no accountability' — it means the system gets fixed, not the person.",
    image: { seed: "postmortem-workshop", label: "Postmortem workshop", aspect: 16 / 9 },
    reactions: 1204,
    comments: 152,
    reposts: 96,
  },
  {
    id: "5",
    authorName: "Sofia Álvarez",
    authorTitle: "UX Researcher",
    avatarSeed: 44,
    timeAgo: "1d",
    text: "Five years in research and the best insight I've gotten from a user interview this year was completely unprompted: 'I just want it to stop asking me things it should already know.' That's the whole roadmap right there.",
    reactions: 673,
    comments: 41,
    reposts: 23,
  },
  {
    id: "6",
    authorName: "Tomás Ribeiro",
    authorTitle: "Data Engineer at Harborlight",
    avatarSeed: 15,
    timeAgo: "1d",
    text: "Migrated our nightly batch pipeline to an incremental model. 6 hour runtime down to 40 minutes.",
    image: { seed: "pipeline-runtime", label: "Pipeline runtime, before/after", aspect: 1 },
    reactions: 340,
    comments: 19,
    reposts: 15,
  },
  {
    id: "7",
    authorName: "Grace Kim",
    authorTitle: "VP of Design at Alderwood",
    avatarSeed: 5,
    timeAgo: "2d",
    text: "Hiring designers for the last decade and the strongest signal has never been the polish of the portfolio. It's whether they can tell me what they'd do differently now. Growth shows up as hindsight, not perfection.",
    reactions: 2140,
    comments: 203,
    reposts: 187,
  },
  {
    id: "8",
    authorName: "Ibrahim Al-Sayed",
    authorTitle: "Site Reliability Engineer",
    avatarSeed: 52,
    timeAgo: "2d",
    text: "Wrote a short internal doc on our on-call philosophy. Core rule: if a page happens twice for the same reason, the second time is an engineering failure, not a staffing one.",
    reactions: 512,
    comments: 47,
    reposts: 29,
  },
  {
    id: "9",
    authorName: "Elena Petrova",
    authorTitle: "Marketing Lead at Northwind Labs",
    avatarSeed: 29,
    timeAgo: "3d",
    text: "Campaign retrospective slide worth sharing: we cut spend 30% and grew qualified leads 18% by killing every channel we couldn't attribute, not by finding a new one.",
    image: { seed: "campaign-attribution", label: "Campaign attribution recap", aspect: 3 / 4 },
    reactions: 389,
    comments: 26,
    reposts: 11,
  },
  {
    id: "10",
    authorName: "Jonah Whitfield",
    authorTitle: "Staff Engineer at Crestline",
    avatarSeed: 8,
    timeAgo: "3d",
    text: "Code review comment I left today that I want to remember: 'This is correct. Is it the simplest thing that is correct?' Half the time the answer is no, and that's a fine reason to ask.",
    reactions: 1567,
    comments: 118,
    reposts: 74,
  },
  {
    id: "11",
    authorName: "Ana Beatriz Souza",
    authorTitle: "Product Designer",
    avatarSeed: 37,
    timeAgo: "4d",
    text: "Prototype from this week's design sprint. We tested three navigation patterns and the winner wasn't the one any of us expected going in — always run the test.",
    image: { seed: "nav-pattern-prototype", label: "Nav pattern prototype", aspect: 16 / 10 },
    reactions: 745,
    comments: 53,
    reposts: 22,
  },
  {
    id: "12",
    authorName: "Liam O'Connor",
    authorTitle: "CTO at buildstack.dev",
    avatarSeed: 22,
    timeAgo: "5d",
    text: "Three years ago we were a team of two arguing about frameworks in a coffee shop. Yesterday we passed 50,000 users. Grateful for everyone who took a chance on something unfinished.",
    reactions: 3420,
    comments: 261,
    reposts: 145,
  },
];
