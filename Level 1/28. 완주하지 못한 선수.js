const solution = (participant, competition) => {
  participant.sort();
  competition.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== competition[i]) {
      return participant[i];
    }
  }
};
