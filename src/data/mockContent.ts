
export const mockContent = {
  trending: [
    {
      id: "1",
      title: "The Witcher",
      imageUrl: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=2055&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2019,
      genres: ["Fantasy", "Action", "Adventure"]
    },
    {
      id: "2",
      title: "Stranger Things",
      imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-14",
      releaseYear: 2016,
      genres: ["Sci-Fi", "Horror", "Drama"]
    },
    {
      id: "3",
      title: "The Crown",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2016,
      genres: ["Drama", "History", "Biography"]
    },
    {
      id: "4",
      title: "Money Heist",
      imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2017,
      genres: ["Crime", "Drama", "Thriller"]
    },
    {
      id: "5",
      title: "Dark",
      imageUrl: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2017,
      genres: ["Sci-Fi", "Mystery", "Thriller"]
    },
    {
      id: "6",
      title: "Breaking Bad",
      imageUrl: "https://images.unsplash.com/photo-1508136520431-4e87a7ec8c76?q=80&w=1964&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2008,
      genres: ["Crime", "Drama", "Thriller"]
    },
    {
      id: "7",
      title: "Ozark",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2017,
      genres: ["Crime", "Drama", "Thriller"]
    }
  ],
  newReleases: [
    {
      id: "8",
      title: "The Queen's Gambit",
      imageUrl: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1958&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2020,
      genres: ["Drama"]
    },
    {
      id: "9",
      title: "Enola Holmes",
      imageUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1964&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "PG-13",
      duration: "2h 3m",
      releaseYear: 2020,
      genres: ["Adventure", "Crime", "Drama"]
    },
    {
      id: "10",
      title: "The Trial of the Chicago 7",
      imageUrl: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "R",
      duration: "2h 9m",
      releaseYear: 2020,
      genres: ["Drama", "History", "Thriller"]
    },
    {
      id: "11",
      title: "Rebecca",
      imageUrl: "https://images.unsplash.com/photo-1601513237763-371a0908e5de?q=80&w=1974&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "PG-13",
      duration: "2h 3m",
      releaseYear: 2020,
      genres: ["Drama", "Mystery", "Romance"]
    },
    {
      id: "12",
      title: "The Midnight Sky",
      imageUrl: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1974&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "PG-13",
      duration: "1h 58m",
      releaseYear: 2020,
      genres: ["Drama", "Fantasy", "Sci-Fi"]
    },
    {
      id: "13",
      title: "Hillbilly Elegy",
      imageUrl: "https://images.unsplash.com/photo-1466354424719-343280fe118b?q=80&w=2070&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "R",
      duration: "1h 57m",
      releaseYear: 2020,
      genres: ["Drama"]
    }
  ],
  continueWatching: [
    {
      id: "14",
      title: "The Umbrella Academy",
      imageUrl: "https://images.unsplash.com/photo-1550645612-83f5d594b671?q=80&w=2070&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-14",
      releaseYear: 2019,
      genres: ["Action", "Adventure", "Comedy"]
    },
    {
      id: "15",
      title: "The Irishman",
      imageUrl: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=1740&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "R",
      duration: "3h 29m",
      releaseYear: 2019,
      genres: ["Biography", "Crime", "Drama"]
    },
    {
      id: "16",
      title: "Narcos",
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2015,
      genres: ["Biography", "Crime", "Drama"]
    }
  ],
  topPicks: [
    {
      id: "17",
      title: "The Social Dilemma",
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1964&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "PG-13",
      duration: "1h 34m",
      releaseYear: 2020,
      genres: ["Documentary", "Drama"]
    },
    {
      id: "18",
      title: "Peaky Blinders",
      imageUrl: "https://images.unsplash.com/photo-1522403236043-29e6a0f10a41?q=80&w=1770&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2013,
      genres: ["Crime", "Drama"]
    },
    {
      id: "19",
      title: "The Last Dance",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109acd27d?q=80&w=2090&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2020,
      genres: ["Documentary", "Biography", "Sport"]
    },
    {
      id: "20",
      title: "Mindhunter",
      imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop",
      type: "series" as const,
      maturityRating: "TV-MA",
      releaseYear: 2017,
      genres: ["Crime", "Drama", "Thriller"]
    },
    {
      id: "21",
      title: "The Two Popes",
      imageUrl: "https://images.unsplash.com/photo-1431068799455-80bae0caf685?q=80&w=2070&auto=format&fit=crop",
      type: "movie" as const,
      maturityRating: "PG-13",
      duration: "2h 5m",
      releaseYear: 2019,
      genres: ["Biography", "Comedy", "Drama"]
    }
  ]
};
