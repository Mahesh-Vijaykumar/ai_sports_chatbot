import { format } from 'date-fns';

const sampleEvents = [
  {
    id: '1',
    title: 'SJCIT Basketball vs. Rival University',
    date: new Date('2024-03-25T19:00:00'),
    location: 'SJCIT Main Arena',
    sport: 'Basketball',
    description: 'Home game against our biggest rivals!',
    ticketsAvailable: true,
    ticketPrice: 25,
  },
  {
    id: '2',
    title: 'SJCIT Cricket Championship',
    date: new Date('2024-04-02T14:00:00'),
    location: 'SJCIT Cricket Ground',
    sport: 'Cricket',
    description: 'Annual cricket championship finals',
    ticketsAvailable: true,
    ticketPrice: 20,
  },
  {
    id: '3',
    title: 'Inter-College Athletics Meet',
    date: new Date('2024-04-15T09:00:00'),
    location: 'SJCIT Sports Complex',
    sport: 'Athletics',
    description: 'Annual athletics competition',
    ticketsAvailable: true,
    ticketPrice: 15,
  }
];

const newsUpdates = [
  {
    title: 'SJCIT Basketball Team Reaches State Finals',
    date: new Date('2024-03-20'),
    content: 'Our basketball team has qualified for the state championships!'
  },
  {
    title: 'New Sports Complex Opening',
    date: new Date('2024-04-01'),
    content: 'SJCIT is inaugurating a state-of-the-art sports complex next month.'
  }
];

export const processMessage = (message: string, favoriteTeams: string[], favoriteSports: string[]) => {
  const lowerMessage = message.toLowerCase();

  // Schedule and Events
  if (lowerMessage.includes('schedule') || lowerMessage.includes('events')) {
    const relevantEvents = sampleEvents.filter(event => 
      favoriteTeams.length === 0 || favoriteSports.length === 0 ||
      favoriteTeams.includes(event.sport) || favoriteSports.includes(event.sport)
    );
    
    return `Upcoming SJCIT Sports Events:\n${relevantEvents.map(event => 
      `• ${event.title}\n  📅 ${format(event.date, 'PPP')}\n  📍 ${event.location}\n  💰 Tickets: $${event.ticketPrice}\n`
    ).join('\n')}`;
  }

  // News and Updates
  if (lowerMessage.includes('news') || lowerMessage.includes('updates')) {
    return `Latest SJCIT Sports News:\n${newsUpdates.map(news =>
      `📰 ${news.title}\n   ${format(news.date, 'PPP')}\n   ${news.content}`
    ).join('\n\n')}`;
  }

  // Facilities
  if (lowerMessage.includes('facilities')) {
    return "SJCIT Sports Facilities:\n" +
           "🏟️ Main Arena\n" +
           "   • State-of-the-art basketball court\n" +
           "   • Seating capacity: 2,000\n\n" +
           "🏊 Swimming Complex\n" +
           "   • Olympic-size pool\n" +
           "   • Training pool\n\n" +
           "🏃 Indoor Training Center\n" +
           "   • Modern gym equipment\n" +
           "   • Indoor running track\n\n" +
           "🎾 Outdoor Facilities\n" +
           "   • Tennis courts\n" +
           "   • Cricket ground\n" +
           "   • Athletic track";
  }

  // Tickets
  if (lowerMessage.includes('ticket')) {
    return "SJCIT Sports Event Tickets:\n\n" +
           "🎟️ How to Purchase:\n" +
           "1. Online: Visit tickets.sjcit.edu\n" +
           "2. Campus Box Office: Located at the Main Arena\n\n" +
           "💰 Pricing:\n" +
           "• Students: 50% off with valid ID\n" +
           "• Faculty: 25% off\n" +
           "• General admission: Varies by event\n\n" +
           "🎫 Season passes available for all sports!";
  }

  // Team Info
  if (lowerMessage.includes('team') || lowerMessage.includes('players') || lowerMessage.includes('coaches')) {
    return "SJCIT Sports Teams:\n\n" +
           "🏀 Basketball\n" +
           "• Head Coach: Dr. James Wilson\n" +
           "• Assistant Coach: Sarah Martinez\n\n" +
           "🏏 Cricket\n" +
           "• Head Coach: Rahul Sharma\n" +
           "• Team Captain: Arun Kumar\n\n" +
           "🏃 Athletics\n" +
           "• Head Coach: Michael Thompson\n" +
           "• Sprint Coach: Lisa Chen";
  }

  // Health Tips
  if (lowerMessage.includes('health') || lowerMessage.includes('fitness')) {
    return "SJCIT Sports Science Tips:\n\n" +
           "💪 Training Guidelines:\n" +
           "1. Warm up for 10-15 minutes before exercise\n" +
           "2. Stay hydrated (2-3 liters daily)\n" +
           "3. Get 7-8 hours of sleep\n\n" +
           "🥗 Nutrition Tips:\n" +
           "1. Eat balanced meals\n" +
           "2. Pre-workout snacks\n" +
           "3. Post-workout protein\n\n" +
           "🧘 Recovery:\n" +
           "1. Active recovery days\n" +
           "2. Proper stretching\n" +
           "3. Regular massage";
  }

  // Default response
  return "Welcome to SJCIT Sports Assistant! I can help you with:\n" +
         "• Sports schedules and events\n" +
         "• Facility information\n" +
         "• Ticket bookings\n" +
         "• Team and player details\n" +
         "• Fitness tips\n\n" +
         "What would you like to know about?";
};