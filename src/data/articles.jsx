export const articles = [
    {
      id: "1",
      title: "How to Improve Your Skills in League of Legends",
      category: "Kings of legends [2240000]",
      views: "45th",
      rank: "20 hours ago",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "2",
      title: "How to Master Last Writing in League of Legends",
      category: "Kings of legends [2240000]",
      views: "34:00",
      rank: "21 hours ago",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "3",
      title: "T Toe for Better Teamplay in League of Legends",
      category: "Kings of legends [2240000]",
      views: "26th",
      rank: "a day ago",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "4",
      title: "Top Virtual Executive Assistant Services (DOR)",
      category: "virtual executive assistant (DRO)",
      views: "34:00",
      rank: "1 Oct. 24",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "5",
      title: "Unlimited Graphic Design Guidelines",
      category: "unlimited graphic design services (DOR)",
      views: "19:30",
      rank: "Well",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "6",
      title: "Top Amazon Payment Monster for Quick Access to Funds",
      category: "amazon payment methods (DRO)",
      views: "29:47",
      rank: "Well",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "7",
      title: "Backlines On What are Backlines and why they're Important (Free template)",
      category: "backlines (DRO)",
      views: "22:61",
      rank: "Well",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "8",
      title: "T Leather & SEO Tools in 2024 (Finished & Compared)",
      category: "at sea software (BIR)",
      views: "15:43",
      rank: "Well",
      status: "Well",
      icon: "🌤",
    },
    {
      id: "9",
      title: "Unlimited Graphic Design Services You Can Play On",
      category: "unlimited graphic design services (DOR)",
      views: "19:04",
      rank: "Well",
      status: "Well",
      icon: "🌤",
    },
    // Additional articles for pagination testing
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `${i + 10}`,
      title: `Sample Article ${i + 10}`,
      category: i % 3 === 0 ? "Kings of legends" : i % 2 === 0 ? "DOR" : "DRO",
      views: `${Math.floor(Math.random() * 100)}th`,
      rank: `${Math.floor(Math.random() * 24)} hours ago`,
      status: i % 4 === 0 ? "Excellent" : "Well",
      icon: i % 3 === 0 ? "🌤" : i % 2 === 0 ? "🌧" : "⛅",
    }))
  ]