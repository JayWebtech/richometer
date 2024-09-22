"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { toPng } from "html-to-image";
import { LuLoader2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";
import useWindowDimensions from "@/components/useWindowDimension";

function page() {
  const questions = [
    {
      question: "If you found $100 on the ground, what's your first move?",
      options: [
        "Buy a yacht… or a toy version",
        "Invest in the latest 'Get Rich Quick' scheme",
        "Give it to your dog for safekeeping",
        "Celebrate by eating instant noodles",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if your favorite socks got a hole?",
      options: [
        "Cry about the loss",
        "Sew a fancy patch on it",
        "Sell them as vintage art",
        "Start a sock puppet side hustle",
      ],
      correctAnswer: 3,
    },
    {
      question: "What's your go-to strategy for becoming a millionaire?",
      options: [
        "Start a TikTok dance challenge",
        "Invent a combination spoon-fork-knife",
        "Sell invisible NFTs",
        "Play Monopoly for training",
      ],
      correctAnswer: 2,
    },
    {
      question: "What's your dream job?",
      options: [
        "Professional Netflix binger",
        "CEO of a lemonade stand",
        "Full-time meme curator",
        "Luxury nap tester",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your ideal side hustle?",
      options: [
        "Dog yoga instructor",
        "Professional avocado toast critic",
        "Couch potato consultant",
        "Crypto fortune teller",
      ],
      correctAnswer: 3,
    },
    {
      question: "How would you invest $10?",
      options: [
        "Buy 10 lottery tickets",
        "Donate to the 'Save the Unicorns' foundation",
        "Start a 'Ban Mondays' petition",
        "Buy as many ice creams as possible",
      ],
      correctAnswer: 2,
    },
    {
      question: "What would you name your yacht?",
      options: [
        "S.S. Broke",
        "Money Magnet",
        "The Floating Tax Deduction",
        "Seas the Day",
      ],
      correctAnswer: 1,
    },
    {
      question: "If your pet could talk, what would they complain about?",
      options: [
        "Your lack of snacks",
        "Your bad jokes",
        "Your obsession with cat videos",
        "Your taste in music",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your first purchase after winning the lottery?",
      options: [
        "A golden toilet",
        "A lifetime supply of pizza",
        "A private jet (just for selfies)",
        "A pet penguin",
      ],
      correctAnswer: 2,
    },
    {
      question: "What would you do if you were invisible for a day?",
      options: [
        "Sneak into Area 51",
        "Spy on my boss",
        "Steal all the snacks",
        "Walk around and freak people out",
      ],
      correctAnswer: 3,
    },
    {
      question: "What would be your first move as a billionaire?",
      options: [
        "Buy an island",
        "Sleep for 48 hours straight",
        "Host a giant pizza party",
        "Hire someone to open doors for you",
      ],
      correctAnswer: 1,
    },
    {
      question: "What's your spirit animal?",
      options: [
        "Sloth (for maximum laziness)",
        "Unicorn (because, duh)",
        "Raccoon (trash panda life)",
        "Shark (always moving)",
      ],
      correctAnswer: 0,
    },
    {
      question: "How would you react if you found out your boss is a robot?",
      options: [
        "Challenge them to a dance-off",
        "Pull out the batteries",
        "Ask if they need a software update",
        "Bow down to our robot overlords",
      ],
      correctAnswer: 2,
    },
    {
      question: "What's the most important thing to pack for a trip?",
      options: [
        "A snack stash",
        "My phone charger",
        "A selfie stick",
        "Extra socks",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you name your pet dragon?",
      options: ["Sparky", "Flame-bro", "Wingardium Leviosa", "Burnie"],
      correctAnswer: 3,
    },
    {
      question: "What's your plan for world domination?",
      options: [
        "Take over all Wi-Fi networks",
        "Control the world's pizza supply",
        "Buy Twitter and ban everyone",
        "Outsource everything to penguins",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your biggest fear?",
      options: [
        "Running out of snacks",
        "Public speaking",
        "A zombie apocalypse",
        "Monday mornings",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your favorite form of procrastination?",
      options: [
        "Scrolling through memes",
        "Watching cat videos",
        "Rearranging my room for the 5th time",
        "Daydreaming about winning the lottery",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you had $1 billion for one day?",
      options: [
        "Buy a lifetime supply of chocolate",
        "Build a castle made of Legos",
        "Travel the world in a private jet",
        "Fund a space mission to Mars",
      ],
      correctAnswer: 2,
    },
    {
      question: "How do you plan on making your first million?",
      options: [
        "Inventing a new kind of chair",
        "Investing in invisible NFTs",
        "Starting a dog fashion line",
        "Becoming a professional napper",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s the best way to spend a rainy day?",
      options: [
        "Binge-watch TV shows",
        "Build a fort out of blankets",
        "Bake cookies and eat them all",
        "Write a novel about a talking dog",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would be your superhero name?",
      options: [
        "Captain Procrastination",
        "The Snack Avenger",
        "Nap Man",
        "The Meme Machine",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you could talk to animals?",
      options: [
        "Ask birds for stock market tips",
        "Ask cats why they’re so judgy",
        "Convince dogs to start a revolution",
        "Ask cows if they like being milked",
      ],
      correctAnswer: 1,
    },
    {
      question: "If you could time travel, where would you go?",
      options: [
        "The future to see my billionaire self",
        "The past to invest in Apple stocks",
        "The 80s for the fashion",
        "To the dinosaurs (just for fun)",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your strategy for surviving a zombie apocalypse?",
      options: [
        "Run and hide in Costco",
        "Blend in by acting like a zombie",
        "Convince the zombies to become vegetarians",
        "Start a zombie-themed TikTok",
      ],
      correctAnswer: 2,
    },
    {
      question: "What would you do with unlimited Wi-Fi?",
      options: [
        "Download every movie ever",
        "Host a 24/7 livestream of my life",
        "Control all social media",
        "Start an empire of memes",
      ],
      correctAnswer: 3,
    },
    {
      question: "What's your biggest guilty pleasure?",
      options: [
        "Eating cake for breakfast",
        "Binge-watching reality TV",
        "Spending too much on delivery food",
        "Sleeping until noon",
      ],
      correctAnswer: 0,
    },
    {
      question: "If you could turn into any animal, what would you be?",
      options: [
        "A sloth (for maximum chill)",
        "A lion (because roar)",
        "A dolphin (for the ocean vibes)",
        "An eagle (for the views)",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your dream vacation destination?",
      options: [
        "A private island",
        "A cozy cabin in the woods",
        "A space station orbiting Earth",
        "A beach resort with unlimited ice cream",
      ],
      correctAnswer: 3,
    },
    {
      question: "What would you do if you won a year's supply of pizza?",
      options: [
        "Host a pizza party every week",
        "Sell slices on the black market",
        "Try every possible pizza topping",
        "Build a pizza pyramid",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your go-to karaoke song?",
      options: [
        "Bohemian Rhapsody",
        "I Will Survive",
        "Eye of the Tiger",
        "Baby Shark",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would you do if you were president for a day?",
      options: [
        "Make napping a national sport",
        "Replace taxes with high-fives",
        "Give everyone free pizza",
        "Declare every Monday a holiday",
      ],
      correctAnswer: 3,
    },
    {
      question: "What's your secret to financial success?",
      options: [
        "Magic 8-ball",
        "Fortune cookies",
        "Consulting your pet hamster",
        "Following your horoscope",
      ],
      correctAnswer: 2,
    },
    {
      question: "How do you plan to retire early?",
      options: [
        "Win a reality TV show",
        "Invent a time machine",
        "Become a professional napper",
        "Find a genie in a bottle",
      ],
      correctAnswer: 3,
    },
    {
      question: "What's your financial motto?",
      options: [
        "YOLO (You Only Live Once)",
        "Save like a squirrel",
        "Spend like there's no tomorrow",
        "Invest in chocolate",
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you handle financial stress?",
      options: [
        "Meditate with your pet rock",
        "Dance it out",
        "Eat a tub of ice cream",
        "Write a letter to Santa",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your idea of a perfect weekend?",
      options: [
        "Reading financial news",
        "Shopping spree",
        "Netflix marathon",
        "Planning your next big business idea",
      ],
      correctAnswer: 3,
    },
    {
      question: "How do you feel about budgeting?",
      options: [
        "It's my superpower",
        "It's a necessary evil",
        "What's a budget?",
        "I prefer to live in the moment",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "If you were given $1,000 to start a business, what would you do first?",
      options: [
        "Write a business plan",
        "Buy a cool office chair",
        "Spend it all on marketing",
        "Panic and buy snacks",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your favorite way to save money?",
      options: [
        "Coupons and discounts",
        "Piggy bank",
        "Asking for a raise",
        "Wishing upon a star",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you handle unexpected expenses?",
      options: [
        "Emergency fund to the rescue",
        "Credit card, here I come",
        "Call mom and dad",
        "Ignore and hope it goes away",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your dream job?",
      options: [
        "CEO of a tech company",
        "Professional napper",
        "Travel blogger",
        "Lottery winner",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about investing in the stock market?",
      options: [
        "It's thrilling",
        "It's confusing",
        "It's risky",
        "It's for rich people",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your approach to financial planning?",
      options: [
        "Detailed spreadsheets",
        "Wing it and hope for the best",
        "Consult a financial advisor",
        "Ask friends for advice",
      ],
      correctAnswer: 0,
    },
    {
      question: "If you could have one superpower, what would it be?",
      options: [
        "Predicting stock market trends",
        "Unlimited shopping sprees",
        "Never needing sleep",
        "Turning anything into gold",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your reaction to a surprise bonus at work?",
      options: [
        "Invest it immediately",
        "Plan a vacation",
        "Buy that gadget you've been eyeing",
        "Save it for a rainy day",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about credit cards?",
      options: [
        "Love the rewards",
        "Necessary evil",
        "Avoid them like the plague",
        "Max them out and hope for the best",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your strategy for retirement?",
      options: [
        "Start saving early",
        "Win the lottery",
        "Work forever",
        "Rely on social security",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you celebrate financial milestones?",
      options: [
        "Invest in more assets",
        "Throw a party",
        "Treat yourself to something nice",
        "Post about it on social media",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your biggest financial fear?",
      options: [
        "Losing all my investments",
        "Running out of money",
        "Unexpected medical bills",
        "Not being able to afford coffee",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your favorite financial advice?",
      options: [
        "Save early, save often",
        "Spend less than you earn",
        "Invest in yourself",
        "Buy low, sell high",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about loans?",
      options: [
        "Necessary for big purchases",
        "Avoid them at all costs",
        "Only if the interest rate is low",
        "Loans? No thanks!",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your approach to saving for a big purchase?",
      options: [
        "Save a little each month",
        "Use a separate savings account",
        "Cut back on other expenses",
        "Wait for a windfall",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about financial goals?",
      options: [
        "Essential for success",
        "Nice to have",
        "Too much pressure",
        "I prefer to go with the flow",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your favorite way to earn extra money?",
      options: [
        "Freelancing",
        "Selling old stuff",
        "Taking surveys",
        "Starting a side business",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about financial apps?",
      options: [
        "Very useful",
        "Nice to have",
        "Too complicated",
        "I prefer pen and paper",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your approach to paying off debt?",
      options: [
        "Pay more than the minimum",
        "Focus on high-interest debt first",
        "Consolidate your debt",
        "Ignore it and hope it goes away",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about financial education?",
      options: [
        "Very important",
        "Nice to have",
        "Too boring",
        "I prefer to learn by doing",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your favorite way to invest?",
      options: ["Stocks", "Real estate", "Mutual funds", "Cryptocurrency"],
      correctAnswer: 0,
    },
    {
      question: "How do you feel about financial advisors?",
      options: [
        "Very helpful",
        "Nice to have",
        "Too expensive",
        "I prefer to do it myself",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your favorite way to celebrate payday?",
      options: [
        "Buy all the snacks",
        "Throw a dance party for one",
        "Take a bubble bath",
        "Treat myself to a fancy coffee",
      ],
      correctAnswer: 0,
    },
    {
      question: "What superhero power would you choose?",
      options: [
        "Invisibility (to steal snacks)",
        "Super speed (to avoid responsibilities)",
        "Teleportation (to skip traffic)",
        "Talking to animals (for wisdom)",
      ],
      correctAnswer: 1,
    },
    {
      question: "What's the most ridiculous thing you've bought?",
      options: [
        "A pet rock",
        "A self-stirring mug",
        "An inflatable dinosaur costume",
        "A lifetime supply of bubble wrap",
      ],
      correctAnswer: 2,
    },
    {
      question: "What would you do with a time machine?",
      options: [
        "Stop myself from embarrassing moments",
        "Meet my future self for advice",
        "Witness historical events in pajamas",
        "Visit the dinosaurs for selfies",
      ],
      correctAnswer: 1,
    },
    {
      question: "How would you describe your cooking skills?",
      options: [
        "I can microwave like a pro",
        "I set off the smoke alarm every time",
        "I'm a master of instant ramen",
        "Gordon Ramsay would cry tears of joy",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your dream car?",
      options: [
        "A flying car",
        "A cozy couch on wheels",
        "A tank (for extra safety)",
        "A self-driving pizza delivery car",
      ],
      correctAnswer: 1,
    },
    {
      question: "What's the best way to make money?",
      options: [
        "Invent something nobody needs",
        "Win the lottery (easy, right?)",
        "Become a professional sleeper",
        "Start a 'sell your socks' business",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your favorite conspiracy theory?",
      options: [
        "Birds are government drones",
        "The moon is made of cheese",
        "Time travelers are already here",
        "Cats are secretly plotting world domination",
      ],
      correctAnswer: 3,
    },
    {
      question: "What would you do if you could read minds?",
      options: [
        "Win every argument",
        "Help my friends avoid bad decisions",
        "Join a mind-reading club",
        "Realize how weird everyone is",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "How would you celebrate your birthday if you were a millionaire?",
      options: [
        "Rent out an amusement park",
        "Throw a huge costume party",
        "Go skydiving with friends",
        "Have a personal chef cook for me",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would you do with a genie?",
      options: [
        "Ask for infinite wishes",
        "Wish for world peace (and pizza)",
        "Wish for the ability to nap anywhere",
        "Challenge them to a trivia game",
      ],
      correctAnswer: 1,
    },
    {
      question: "What's your strategy for dealing with stress?",
      options: [
        "Eat my weight in snacks",
        "Binge-watch funny cat videos",
        "Take a nap (obviously)",
        "Dance like nobody's watching",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your secret talent?",
      options: [
        "Imitating animal sounds",
        "Balancing random objects",
        "Eating pizza in record time",
        "Making puns that make people groan",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you were given a pet dinosaur?",
      options: [
        "Train it to fetch snacks",
        "Start a dinosaur-themed YouTube channel",
        "Challenge it to a race",
        "Name it after a famous movie character",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "If you could live in any fictional universe, where would you choose?",
      options: [
        "Hogwarts (magical education)",
        "The Shire (perfect for hobbits)",
        "A galaxy far, far away (space adventures)",
        "A cartoon world (everything is funnier)",
      ],
      correctAnswer: 1,
    },
    {
      question: "What's your strategy for a surprise party?",
      options: [
        "Hide and eat all the snacks",
        "Jump out and scare everyone",
        "Plan an epic dance-off",
        "Bring an embarrassing slideshow",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your dream job in a fantasy world?",
      options: [
        "Dragon tamer",
        "Wand maker",
        "Professional wizard (with style)",
        "Time traveler",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would you do if you could communicate with aliens?",
      options: [
        "Ask for advanced technology",
        "Make friends and start a band",
        "Learn about their snacks",
        "Challenge them to a dance battle",
      ],
      correctAnswer: 1,
    },
    {
      question: "How would you survive a zombie apocalypse?",
      options: [
        "Build a fortress out of pizza boxes",
        "Negotiate with zombies for snacks",
        "Form a team of snack enthusiasts",
        "Lead a zombie dance-off",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s the weirdest thing you've ever eaten?",
      options: [
        "Chocolate-covered insects",
        "Pickles with peanut butter",
        "Spicy ice cream",
        "Sushi made by a friend",
      ],
      correctAnswer: 1,
    },
    {
      question: "If you could invent a holiday, what would it celebrate?",
      options: [
        "National Nap Day",
        "Chocolate Cake Appreciation Day",
        "International Dance Like No One's Watching Day",
        "Pet Appreciation Day",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your favorite childhood cartoon?",
      options: [
        "Tom and Jerry",
        "Scooby-Doo",
        "The Powerpuff Girls",
        "Looney Tunes",
      ],
      correctAnswer: 1,
    },
    {
      question: "How would you describe your sense of fashion?",
      options: [
        "Comfy and cozy",
        "Fashionably late (always)",
        "I wear what’s on the floor",
        "Trendy with a hint of chaos",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "If you could have dinner with any fictional character, who would it be?",
      options: [
        "Sherlock Holmes (for the mysteries)",
        "Darth Vader (for the drama)",
        "Harry Potter (for the magic)",
        "SpongeBob (for the laughs)",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite snack to binge on during movie nights?",
      options: [
        "Popcorn (classic)",
        "Chocolate bars",
        "Gummy bears",
        "Nachos with cheese",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your strategy for dealing with awkward situations?",
      options: [
        "Make a joke (even if it's bad)",
        "Pretend to check my phone",
        "Dance it out",
        "Smile and nod",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "If you could switch lives with anyone for a day, who would it be?",
      options: [
        "A celebrity",
        "A pet (no responsibilities)",
        "A superhero",
        "A billionaire",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would be your ultimate comfort food?",
      options: [
        "Mac and cheese",
        "Pizza with all the toppings",
        "Chocolate chip cookies",
        "Ice cream sundaes",
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you feel about Mondays?",
      options: [
        "They're the worst",
        "A chance for a fresh start",
        "Time to plan the week ahead",
        "Every day is like a Monday",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your go-to karaoke song?",
      options: [
        "Livin' on a Prayer",
        "Shake It Off",
        "Don't Stop Believin'",
        "I Will Survive",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "If you could be any cartoon character for a day, who would you be?",
      options: [
        "SpongeBob SquarePants",
        "Bugs Bunny",
        "Pikachu",
        "Mickey Mouse",
      ],
      correctAnswer: 0,
    },
    {
      question: "What's your ideal weekend activity?",
      options: [
        "Binge-watching my favorite shows",
        "Hiking in nature",
        "Going to a concert",
        "Catching up on sleep",
      ],
      correctAnswer: 1,
    },
    {
      question: "If you could have any animal as a pet, what would it be?",
      options: ["A dragon", "A unicorn", "A sloth", "A talking parrot"],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite way to relax?",
      options: [
        "Reading a book",
        "Taking a long bath",
        "Going for a walk",
        "Meditating with snacks",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would be your weapon of choice in a food fight?",
      options: [
        "A pie",
        "A water balloon",
        "A slingshot with gummy bears",
        "A giant fork",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you prefer to travel?",
      options: [
        "On a magic carpet",
        "By teleportation",
        "In a bubble (for comfort)",
        "In style with snacks",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your ultimate guilty pleasure?",
      options: [
        "Reality TV shows",
        "Eating dessert for breakfast",
        "Shopping for things I don't need",
        "Listening to cheesy pop music",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your spirit animal?",
      options: [
        "A sloth (lazy and lovable)",
        "A dolphin (playful and smart)",
        "A cat (mysterious and independent)",
        "A unicorn (magical and rare)",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you found a hidden treasure?",
      options: [
        "Share it with friends",
        "Buy everything on my wishlist",
        "Hide it and never tell anyone",
        "Start a treasure-hunting business",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your favorite childhood memory?",
      options: [
        "Building forts with blankets",
        "Getting a pet",
        "Going to amusement parks",
        "Eating ice cream every day",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your biggest dream?",
      options: [
        "To travel the world",
        "To start a business",
        "To live in a treehouse",
        "To own a pizza shop",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would you do if you were invisible for a day?",
      options: [
        "Sneak into a concert",
        "Eavesdrop on conversations",
        "Pull pranks on friends",
        "Get free snacks everywhere",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite season?",
      options: [
        "Summer (beach time)",
        "Fall (pumpkin spice everything)",
        "Winter (hot cocoa)",
        "Spring (flowers everywhere)",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "If you could invent a new flavor of ice cream, what would it be?",
      options: [
        "Chocolate-covered potato chips",
        "Sriracha and vanilla",
        "Pickle-flavored",
        "Cotton candy with a twist",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s the best prank you've ever pulled?",
      options: [
        "Fake spider on a friend's desk",
        "Switched the salt and sugar",
        "Dressed up as a statue",
        "Pulled the classic 'whoopee cushion' move",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your ultimate goal in life?",
      options: [
        "To be happy",
        "To make a difference",
        "To eat snacks every day",
        "To travel without limits",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would be your theme song?",
      options: [
        "Eye of the Tiger",
        "Happy by Pharrell",
        "Can't Stop the Feeling",
        "Let It Go",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you could have any superpower for a day?",
      options: [
        "Fly over the city",
        "Read minds of my friends",
        "Turn invisible and sneak snacks",
        "Super strength to lift heavy things",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite way to exercise?",
      options: [
        "Dancing around my living room",
        "Taking long walks (to the fridge)",
        "Yoga (with snacks)",
        "Running away from responsibilities",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your favorite holiday?",
      options: [
        "Halloween (candy galore)",
        "Thanksgiving (food coma)",
        "Christmas (presents and joy)",
        "New Year's (new beginnings)",
      ],
      correctAnswer: 1,
    },
    {
      question: "How would you describe your weekend plans?",
      options: [
        "Chill and relax",
        "Adventure and exploration",
        "Binge-watching shows",
        "Eating snacks while doing nothing",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your favorite dessert?",
      options: ["Chocolate cake", "Ice cream", "Cookies", "All of the above!"],
      correctAnswer: 3,
    },
    {
      question: "What would you do if you could talk to your pet?",
      options: [
        "Ask them what they think of me",
        "Find out their secret life",
        "Learn their favorite snacks",
        "Train them to do funny tricks",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your ideal pizza topping?",
      options: [
        "Extra cheese",
        "Pepperoni",
        "Pineapple (controversial!)",
        "Veggies (gotta be healthy!)",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your idea of a perfect day?",
      options: [
        "Sunbathing on the beach",
        "Exploring a new city",
        "Playing video games all day",
        "Eating all my favorite foods",
      ],
      correctAnswer: 2,
    },
    {
      question: "How do you feel about spiders?",
      options: [
        "Cute and fluffy!",
        "Scary and creepy!",
        "I love them, they eat bugs!",
        "I’m indifferent",
      ],
      correctAnswer: 0,
    },
    {
      question: "If you could live anywhere in the world, where would it be?",
      options: [
        "A cozy cabin in the woods",
        "A beach house",
        "A castle in Europe",
        "A high-tech apartment",
      ],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you won the lottery?",
      options: [
        "Travel the world",
        "Buy everything I've ever wanted",
        "Invest in fun projects",
        "Donate to charity (but also buy snacks)",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your biggest fear?",
      options: [
        "Public speaking",
        "Spiders",
        "Being stuck in traffic",
        "Running out of snacks",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "If you could have dinner with any historical figure, who would it be?",
      options: [
        "Albert Einstein",
        "Cleopatra",
        "William Shakespeare",
        "Benjamin Franklin",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite thing to do on a rainy day?",
      options: [
        "Watch movies with popcorn",
        "Read a good book",
        "Take a cozy nap",
        "Build a fort with blankets",
      ],
      correctAnswer: 2,
    },
    {
      question: "What would be your ultimate dream vacation?",
      options: [
        "Exploring the Maldives",
        "A road trip across the country",
        "Visiting a theme park",
        "Camping under the stars",
      ],
      correctAnswer: 0,
    },
    {
      question: "What would you do if you could teleport anywhere?",
      options: [
        "Visit friends around the world",
        "Go to an amusement park every day",
        "Teleport to the fridge",
        "Visit famous landmarks",
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you like to start your day?",
      options: [
        "With coffee and breakfast",
        "A good stretch",
        "Listening to music",
        "Checking my phone for memes",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "If you could choose any mythical creature as a pet, what would it be?",
      options: ["A dragon", "A phoenix", "A unicorn", "A griffin"],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite joke?",
      options: [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call cheese that isn't yours? Nacho cheese!",
        "Why did the bicycle fall over? Because it was two-tired!",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "If you could have a never-ending supply of one thing, what would it be?",
      options: ["Chocolate", "Coffee", "Books", "Snacks"],
      correctAnswer: 3,
    },
    {
      question: "What’s your go-to karaoke song?",
      options: [
        "I Will Survive",
        "Bohemian Rhapsody",
        "Shake It Off",
        "Livin' on a Prayer",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite board game?",
      options: ["Monopoly", "Scrabble", "Catan", "Twister"],
      correctAnswer: 2,
    },
    {
      question: "What’s your favorite way to show kindness?",
      options: [
        "Giving compliments",
        "Helping others with tasks",
        "Sharing snacks",
        "Sending positive messages",
      ],
      correctAnswer: 2,
    },
    {
      question: "What’s your hidden talent?",
      options: [
        "Juggling",
        "Singing in the shower",
        "Drawing",
        "Making people laugh",
      ],
      correctAnswer: 3,
    },
    {
      question: "What’s your favorite form of art?",
      options: ["Painting", "Photography", "Sculpting", "Dance"],
      correctAnswer: 0,
    },
    {
      question: "If you could have any job for a day, what would it be?",
      options: [
        "A chef",
        "An astronaut",
        "A professional gamer",
        "A travel blogger",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite fictional world?",
      options: ["Hogwarts", "Narnia", "Middle-earth", "Wakanda"],
      correctAnswer: 0,
    },
    {
      question: "What’s your go-to comfort food?",
      options: ["Pizza", "Mac and cheese", "Chocolate", "Ice cream"],
      correctAnswer: 3,
    },
    {
      question: "What would you do if you could freeze time?",
      options: [
        "Take a long nap",
        "Finish all my favorite shows",
        "Eat all my favorite snacks",
        "Spend more time with loved ones",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite app on your phone?",
      options: ["Social media", "Games", "Music streaming", "Food delivery"],
      correctAnswer: 0,
    },
    {
      question: "What’s your favorite way to celebrate your birthday?",
      options: [
        "Throwing a big party",
        "Having a quiet dinner with friends",
        "Going on an adventure",
        "Treating myself to something special",
      ],
      correctAnswer: 3,
    },
    {
      question: "What’s your favorite type of music?",
      options: ["Pop", "Rock", "Hip-hop", "Classical"],
      correctAnswer: 1,
    },
    {
      question: "What would you do if you could go back in time?",
      options: [
        "Visit my younger self",
        "Change a mistake",
        "Meet a historical figure",
        "Relive a happy moment",
      ],
      correctAnswer: 3,
    },
    {
      question: "What’s your favorite way to express yourself?",
      options: ["Writing", "Drawing", "Dancing", "Talking to friends"],
      correctAnswer: 2,
    },
    {
      question: "What’s your dream pet?",
      options: [
        "A talking dog",
        "A cat that does tricks",
        "A hamster that can play fetch",
        "An owl that can give advice",
      ],
      correctAnswer: 0,
    },
    {
      question: "If you could master any skill instantly, what would it be?",
      options: [
        "Playing an instrument",
        "Cooking gourmet meals",
        "Speaking multiple languages",
        "Drawing perfectly",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite way to spend time with friends?",
      options: [
        "Going out for dinner",
        "Playing video games",
        "Having a movie night",
        "Doing something adventurous",
      ],
      correctAnswer: 2,
    },
    {
      question: "What would you do if you could be any character in a movie?",
      options: [
        "The hero saving the day",
        "The quirky sidekick",
        "The wise mentor",
        "The villain with a twist",
      ],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite kind of weather?",
      options: [
        "Sunny and warm",
        "Rainy and cozy",
        "Snowy and magical",
        "Windy and refreshing",
      ],
      correctAnswer: 3,
    },
    {
      question: "What’s your ultimate breakfast choice?",
      options: [
        "Pancakes with syrup",
        "Avocado toast",
        "Smoothie bowl",
        "Breakfast burrito",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "If you could create your own holiday, what would it celebrate?",
      options: [
        "Snacks and treats",
        "Friendship and kindness",
        "Creativity and imagination",
        "Travel and adventure",
      ],
      correctAnswer: 0,
    },
    {
      question: "What’s your favorite snack?",
      options: ["Chips", "Chocolate", "Popcorn", "Fruit"],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite form of exercise?",
      options: ["Dancing", "Yoga", "Running", "Hiking"],
      correctAnswer: 2,
    },
    {
      question: "What’s your ideal way to spend a Sunday?",
      options: [
        "Relaxing at home",
        "Exploring a new place",
        "Catching up on sleep",
        "Baking something delicious",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "If you could only eat one type of cuisine for the rest of your life, what would it be?",
      options: ["Italian", "Mexican", "Japanese", "Indian"],
      correctAnswer: 0,
    },
    {
      question: "What’s your favorite thing about yourself?",
      options: [
        "My sense of humor",
        "My creativity",
        "My kindness",
        "My determination",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "If you could change one thing about the world, what would it be?",
      options: [
        "End poverty",
        "Cure diseases",
        "Eliminate hate",
        "Protect the environment",
      ],
      correctAnswer: 3,
    },
    {
      question: "What’s your favorite thing to do in nature?",
      options: ["Hiking", "Camping", "Birdwatching", "Stargazing"],
      correctAnswer: 0,
    },
    {
      question: "What’s your favorite kind of movie?",
      options: ["Action", "Comedy", "Drama", "Horror"],
      correctAnswer: 1,
    },
    {
      question: "What’s your favorite quote?",
      options: [
        "Carpe Diem",
        "To be or not to be",
        "The journey of a thousand miles begins with a single step",
        "Do what you love, love what you do",
      ],
      correctAnswer: 2,
    },
    {
      question: "If you could have any one wish granted, what would it be?",
      options: [
        "World peace",
        "Unlimited wishes",
        "A lifetime supply of chocolate",
        "Happiness for my loved ones",
      ],
      correctAnswer: 3,
    },
  ];
  const roastMessages = [
    "Oops! You might want to consider a career in extreme couponing instead… Your get-rich strategies need a serious upgrade!",
    "Oops! Looks like your get-rich strategies are as empty as your bank account! Time to rethink that approach!",
    "Oops! At this rate, your future looks more like a 'How Not to Get Rich' seminar! Better luck next time!",
    "Oops! You might want to consider a career in competitive sleeping because your get-rich strategies are going nowhere fast!",
    "Oops! Your financial plan is about as solid as a paper boat in a hurricane! Time to rethink your strategy!",
    "Oops! Unless you plan to marry a millionaire, you might want to rethink those strategies—like, yesterday!",
    "Oops! Your financial plan is like a diet plan that includes a cake every day—totally unrealistic!",
    "Oops! Your get-rich strategies are more like a “how to stay broke” manual! Time for a rewrite!",
    "Oops! You'd make more money if you just put your wallet on eBay!",
    "Oops! Your idea of investing is probably throwing pennies in a wishing well!",
    "Oops! With strategies like these, you’d struggle to make a penny from a pound!",
    "Oops! You’re more likely to find gold at the end of a rainbow than strike it rich with those tactics!",
    "Oops! Your hustle is as convincing as a cat trying to bark!",
    "Oops! If laziness were an Olympic sport, you’d win gold—hands down!",
    "Oops! Let me tell you a simple Joke - 'No worries, your life is a joke already' ",
  ];
  const positiveRoastMessages = [
    "Wow, you crushed it! But let's be honest, your bank account probably still needs a wake-up call!",
    "Congrats! You're so good at this, you might just have to start charging for your wisdom—if only your wallet agreed!",
    "You're destined for riches, but don’t forget: even millionaires have to dodge the occasional tax collector!",
    "Great job! With those skills, you could sell ice to an eskimo… but only if you remember to bring the ice!",
    "You’re on the fast track to wealth, but remember, even rich folks still ask, “Where did all my money go?”",
    "Congratulations! You’re so savvy, your future money may just hire a financial advisor!",
    "Bravo! You’ve unlocked the secrets of riches! Now, just avoid spending it all on avocado toast!",
    "Amazing score! Just remember, with great wealth comes great responsibility… and even greater shopping lists!",
    "Look at you, future millionaire! Just don’t forget your roots when you’re buying that private island!",
    "You’re so good at this, I’m starting to wonder if you have a secret money tree!",
    "Congrats! With skills like that, you might just start a new trend called 'wealth whispering'!",
    "Fantastic score! Just remember, with great wealth comes great WiFi bills for all those online shopping sprees!",
    "You’ve got the Midas touch! Just make sure to keep an eye on those ‘golden’ investment opportunities!",
    "Bravo! You’re one step closer to being the person who pays for dinner but still manages to forget their wallet!",
    "You’re so savvy, even your calculator is taking notes! Just don’t forget to count your blessings!",
    "Congratulations! Your future is looking bright, just like those sunglasses you’ll need to wear on your yacht!",
  ];
  const { width, height } = useWindowDimensions();

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [roastMessage, setRoastMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions);
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  const handleNextQuestion = (selectedOptionIndex) => {
    if (selectedOptionIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 20);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      if (score < 80) {
        const randomIndex = Math.floor(Math.random() * roastMessages.length);
        setRoastMessage(roastMessages[randomIndex]);
      } else {
        const randomIndex = Math.floor(
          Math.random() * positiveRoastMessages.length
        );
        setRoastMessage(positiveRoastMessages[randomIndex]);
        setIsExploding(true);
        setTimeout(() => {
          setIsExploding(false);
        }, 3000);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setIsExploding(false);
    const shuffledQuestions = shuffleArray(questions);
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleDownload = () => {
    if (userName == "") {
      alert("Please enter your name");
      return;
    }
    const certificate = document.getElementById("certificate");
    certificate.style.display = "block";

    toPng(certificate)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Richometer_Certificate.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to generate certificate:", err);
      })
      .finally(() => {
        certificate.style.display = "none";
      });
  };

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {isExploding && <Confetti width={width} height={height} />}
      <div className="my-10 ring-2 ring-gray-100 bg-white p-4 lg:p-10 rounded-xl">
        {!showResult ? (
          <>
            <div>
              <h2 className="text-2xl lg:text-4xl font-semibold mb-2">
                {quizQuestions[currentQuestion]?.question}
              </h2>
              <p className="text-lg text-primary mb-4">
                Question {currentQuestion + 1} / {quizQuestions.length}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {quizQuestions[currentQuestion]?.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleNextQuestion(index)}
                  className="w-full h-auto py-6 px-4 my-2 text-base lg:text-lg bg-primary text-white rounded-md focus:bg-primary answer-btn"
                >
                  {option}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Your Richometer Score!</h2>
            <p className="text-lg mb-8">
              You scored {score}% on the path to riches!
            </p>
            {score >= 80 ? (
              <>
                <div className="bg-green-100 p-4 rounded-xl text-green-700">
                  🏆 {roastMessage} 🏆
                </div>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="my-4"
                />
                <div
                  id="certificate"
                  className="hidden bg-white mt-8 ring-2 ring-primary rounded-xl p-20 w-[1000px]"
                >
                  <div className=" flex flex-col justify-center items-center text-center">
                    <div className="flex items-center">
                      <img src="/img/logo.png" className="w-[2em]" />
                      <span className="font-Millik text-3xl text-primary">
                        richometer
                      </span>
                    </div>
                    <h1 className="text-5xl font-Millik text-primary mt-5">
                      Certificate of Richness
                    </h1>
                    <p className="mt-4 text-xl">This certifies that</p>
                    <h2 className="text-3xl font-semibold mt-4">{userName}</h2>
                    <p className="mt-4 text-lg">
                      Have scored <strong>{score}%</strong> in the Richometer
                      quiz!
                    </p>
                    <p className="mt-6">
                      🎉 Congratulations! Your future is brighter than a
                      diamond-studded dollar bill! 💎
                      <br />
                      <strong>
                        {" "}
                        You can use this certificate to apply for a job at the
                        World Bank, or simply frame it as proof of your
                        exceptional quiz-taking skills.
                        <br />
                        Remember, with great knowledge comes great
                        responsibility—and maybe a lifetime supply of instant
                        noodles!
                        <br />
                        Just be careful not to show it off too much; you might
                        end up being recruited as a financial advisor for
                        aliens!
                      </strong>
                    </p>
                    <div className="my-5 flex flex-col justify-center text-center items-center">
                      <img src="/img/sign.png" className="w-[6em]" alt="" />
                      <p className="text-secondary font-semibold">
                        Jakosai, Founder Richometer
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleDownload}
                  className="mt-4 bg-primary text-white rounded-md mr-5 lg:w-auto w-full"
                >
                  Download Certificate
                </Button>
                <div id="container-3979a0af1ae179f684124b939478579e"></div>
              </>
            ) : (
              <>
                <div className="bg-red-100 p-4 rounded-xl text-red-700">
                  💸 {roastMessage}
                  💸
                </div>
                <div id="container-3979a0af1ae179f684124b939478579e"></div>
              </>
            )}
            <Button
              onClick={restartQuiz}
              className="mt-4 bg-primary text-white rounded-md lg:w-auto w-full"
            >
              Try Again
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default page;
