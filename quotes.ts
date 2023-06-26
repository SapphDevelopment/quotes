import { categories, Quote } from "./interfaces.js";

const quote: Quote[] = [
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: categories.inspiration,
    tags: ["time", "life", "individuality"],
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
    category: categories.inspiration,
    tags: ["imagination", "knowledge"],
  },
  {
    text: "I will never stop trying. Because when you find the one, you never give up.",
    author: "Crazy Stupid Love",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I never want to stop making memories with you.",
    author: "Pierre Jeanty",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "And in her smile I see something more beautiful than the stars.",
    author: "Beth Revis​, Across the Universe",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I knew the second I met you that there was something about you I needed. Turns out it wasn’t something about you at all. It was just you.",
    author: "Jamie McGuire",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Life is the flower for which love is the honey.",
    author: "Victor Hugo",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "All that you are is all that I’ll ever need.",
    author: "Ed Sheeran​, Tenerife Sea",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I don't know any other way of loving.",
    author: "Pablo Neruda",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I love you as one loves certain dark things, secretly, between the shadow and the soul.",
    author: "Pablo Neruda",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I love how she makes me feel like anything is possible, or like life is worth it.",
    author: "500 Days of Summer",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Death cannot stop true love. All it can do is delay it for a while.",
    author: "The Princess Bride",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I want all of you, forever, you and me, every day.",
    author: "Nicholas Sparks, The Notebook",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "What do you want? You want the moon? Just say the word and I'll throw a lasso around it and pull it down.",
    author: "It's A Wonderful Life",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "You make me want to be a better man.",
    author: "As Good As It Gets",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I knew it the very first time I touched her. It was like coming home.",
    author: "Sleepless in Seattle",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Love isn’t something you find. Love is something that finds you.",
    author: "Loretta Young",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "It would be a privilege to have my heart broken by you.",
    author: "The Fault In Our Stars",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "It seems right now that all I’ve ever done in my life is making my way here to you.",
    author: "The Bridges of Madison County",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "You are my heart, my life, my one and only thought.",
    author: "Sir Arthur Conan Doyle",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "I love that you are the last person I want to talk to before I go to sleep at night.",
    author: "When Harry Met Sally",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Take love, multiply it by infinity and take it to the depths of forever, and you still have only a glimpse of how I feel for you.",
    author: "Meet Joe Black",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "With the whole world crumbling, we pick this time to fall in love.",
    author: "Ilsa in Casablanca",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
    author: "Leo Tolstoy, Anna Karenina",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "You are my dearest one. My reason for life.",
    author: "Ian McEwan, Atonement",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Whatever our souls are made of, his and mine are the same.",
    author: "Emily Brontë, Wuthering Heights",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "If I loved you less, I might be able to talk about it more.",
    author: "Jane Austen, Emma",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Being deeply loved by someone gives you strength while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
    author: "Oscar Wilde",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "To be fully seen by somebody, then, and be loved anyhow — this is a human offering that can border on miraculous.",
    author: "Elizabeth Gilbert",
    category: categories.happy,
    tags: ["happy", "love"],
  },
  {
    text: "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
    author: "Unknown",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
    author: "Helen Keller",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Of all forms of caution, caution in love is perhaps the most fatal to true happiness.",
    author: "Bertrand Russell, The Conquest of Happiness",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Loved you yesterday, love you still, always have, always will.",
    author: "Elaine Davis",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "To love well is the task in all meaningful relationships, not just romantic bonds.",
    author: "bell hooks, All About Love: New Visions",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people’s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes.",
    author: "1 Corinthians 13:4-7",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love takes off the masks we fear we cannot live without and know we cannot live within.",
    author: "James Baldwin, The Fire Next Time",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "All’s fair in love and basketball.",
    author: "Quincy, Love and Basketball",
    category: categories.love,
    tags: ["love", "romance", "basketball"],
  },
  {
    text: "We loved with a love that was more than love.",
    author: "Edgar Allen Poe",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love isn’t something you find. Love is something that finds you.",
    author: "Loretta Young",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is a juice with many tastes. Some bitter, others sweet. A wine which has few vineyards.",
    author: "Justice, Poetic Justice",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "The practice of love offers no place of safety. We risk loss, hurt, pain. We risk being acted upon by forces outside our control.",
    author: "bell hooks, All About Love: New Visions",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "One is loved because one is loved. No reason is needed for loving.",
    author: "Paulo Coelho, The Alchemist",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is shown more in deeds than in words.",
    author: "Saint Ignatius",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is that condition in which the happiness of another person is essential to your own.",
    author: "Robert A. Heinlein, Stranger in a Strange Land",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    author: "The Holy Bible: King James Version",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.",
    author: "Leo Tolstoy, Anna Karenina",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is like the wind, you can't see it but you can feel it.",
    author: "Nicholas Sparks, A Walk to Remember",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "In love there are two things: bodies and words.",
    author: "Joyce Carol Oates",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Continue to share your heart with people even if it has been broken.",
    author: "Amy Poehler",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is such a powerful force. It’s there for everyone to embrace-that kind of unconditional love for all of humankind. That is the kind of love that impels people to go into the community and try to change conditions for others, to take risks for what they believe in.",
    author: "Coretta Scott King",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "To love is to recognize yourself in another.",
    author: "Eckhart Tolle",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.",
    author: "Elizabeth Gilbert",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love isn't something natural. Rather it requires discipline, concentration, patience, faith, and the overcoming of narcissism. It isn't a feeling, it is a practice.",
    author: "Eric Fromm",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "There is always some madness in love. But there is also always some reason in madness.",
    author: "Friedrich Nietzsche",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "There's all kinds of reasons that you fall in love with one person rather than another: Timing is important. Proximity is important. Mystery is important.",
    author: "Helen Fisher",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Passion makes the world go 'round. Love just makes it a safer place.",
    author: "Ice-T",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I believe in love. I think it just hits you and pulls the rug out from underneath you and, like a baby, demands your attention every minute of the day.",
    author: "Jodi Picoult",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "When you find that one that's right for you, you feel like they were put there for you, you never want to be apart.",
    author: "Joe Manganiello",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "When you're lucky enough to meet your one person, then life takes a turn for the best. It can't get better than that.",
    author: "John Krasinski",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.",
    author: "Julia Roberts",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love has nothing to do with what you are expecting to get — only with what you are expecting to give — which is everything.",
    author: "Katharine Hepburn",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Where there is great love, there are always miracles.",
    author: "Willa Cather",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "In real love, you want the other person's good. In romantic love, you want the other person.",
    author: "Margaret Anderson",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Have enough courage to trust love one more time and always one more time.",
    author: "Maya Angelou",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "True love is singing karaoke Under Pressure and letting the other person sing the Freddie Mercury part.",
    author: "Mindy Kaling",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Where we love is home – home that our feet may leave, but not our hearts.",
    author: "Oliver Wendell Holmes Sr.",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
    author: "Oprah Winfrey",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Roy Croft",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I'm just a big believer in 'you must love yourself before you can love anybody else' and I think for me that breeds the most inspired relationships.",
    author: "Scarlett Johansson",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "When you are missing someone, time seems to move slower, and when I'm falling in love with someone, time seems to be moving faster.",
    author: "Taylor Swift",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You found parts of me I didn't know existed and in you I found a love I no longer believed was real.",
    author: "Unknown",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love makes your soul crawl out from its hiding place.",
    author: "Zora Neale Hurston",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "There is only one happiness in this life, to love and be loved.",
    author: "George Sand",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
    author: "Leo Christopher",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love does not dominate; it cultivates.",
    author: "Johann Wolfgang von Goethe",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
    author: "Henry Miller",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "It is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them.",
    author: "Agatha Christie",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is the whole thing. We are only pieces.",
    author: "Rumi",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "True love comes quietly, without banners or flashing lights. If you hear bells, get your ears checked.",
    author: "Erich Segal",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Life is the flower for which love is the honey.",
    author: "Victor Hugo",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You always gain by giving love.",
    author: "Reese Witherspoon​",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "All that you are is all that I’ll ever need.",
    author: "Ed Sheeran",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I love her, and that’s the beginning and end of everything.",
    author: "F. Scott Fitzgerald ​​",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love recognizes no barriers.",
    author: "Maya Angelou​",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "We are most alive when we're in love.",
    author: "John Updike",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "The heart has its reasons of which reason knows nothing.",
    author: "Blaise Pascal",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is friendship that has caught fire.",
    author: "Ann Landers",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love yourself first and everything falls into line.",
    author: "Lucille Ball",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You can't blame gravity for falling in love.",
    author: "Albert Einstein",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "If you find someone you love in your life, then hang on to that love.",
    author: "Princess Diana",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I think I'd miss you even if we never met.",
    author: "The Wedding Date",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I fell in love the way you fall asleep: slowly, and then all at once.",
    author: 'John Green, "The Fault in Our Stars"',
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: 'A simple "I love you" means more than money.',
    author: "Frank Sinatra",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Everything I do, I do it for you.",
    author: "Bryan Adams",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You don't marry someone you can live with — you marry someone you cannot live without.",
    author: "Unknown",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I want all of you, forever, you and me, every day.",
    author: 'Nicholas Sparks, "The Notebook"',
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "To me, you are perfect.",
    author: "Love Actually",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
    author: "Winnie the Pooh",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "True love stories never have endings.",
    author: "Richard Bach",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "There's nothing that I wouldn't do to make you feel my love.",
    author: "Bob Dylan",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "'Tis better to have loved and lost, than never to have loved at all.",
    author: "Alfred, Lord Tennyson",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is something sent from heaven to worry the hell out of you.",
    author: "Dolly Parton",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "To be brave is to love someone unconditionally, without expecting anything in return.",
    author: "Madonna",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You know you're in love when you can't fall asleep because the reality is finally better than your dreams.",
    author: "Dr. Seuss",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I love being married. It's so great to find one special person you want to annoy for the rest of your life.",
    author: "Rita Rudner",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "You should be kissed and often, and by someone who knows how.",
    author: "Gone With the Wind",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "That's why they call them crushes. If they were easy, they'd call them something else.",
    author: "Sixteen Candles",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I like you very much. Just as you are.",
    author: "Bridget Jones's Diary",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Personally, I love a great love story.",
    author: "Meghan Markle",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is the flower; you've got to let it grow.",
    author: "John Lennon",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Maybe I don’t know that much but I know this much is true, I was blessed because I was loved by you.",
    author: "Celine Dion",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    author: "When Harry Met Sally",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love loves to love love.",
    author: "James Joyce",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Nobody has ever measured, not even poets, how much the heart can hold.",
    author: "Zelda Fitzgerald",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love is an endless act of forgiveness.",
    author: "Beyoncé",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "All you need is love. But a little chocolate now and then doesn't hurt.",
    author: "Charles M. Schulz",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "First and foremost, self-love, and then give love away.",
    author: "Katy Perry",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "The smile is the beginning of love.",
    author: "Mother Teresa",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Some love stories aren't epic novels. Some are short stories, but that doesn't make them any less filled with love.",
    author: "Sex and the City",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "All you need is love.",
    author: "The Beatles",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "Love was made for me and you.",
    author: "Nat King Cole",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "I’d never lived before your love.",
    author: "Kelly Clarkson",
    category: categories.love,
    tags: ["love", "romance"],
  },
  {
    text: "At the touch of love everyone becomes a poet.",
    author: "Plato",
    category: categories.love,
    tags: ["love", "romance"],
  },
  // {
  //   text: "TEXT",
  //   author: "AUHTOR",
  //   category: categories.love,
  //   tags: ["love", "romance"],
  // },
  // Quote 100 - For Ducko is contiune adding these love quotes...
];
