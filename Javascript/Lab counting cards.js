

let count = 0;
function cc(card) {
  if ([2, 3, 4, 5, 6].includes(card)) {
    count += 1;
  } else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count -= 1;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}



