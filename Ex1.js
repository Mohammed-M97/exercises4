// A Needle in the Haystack
function findNeedle(haystack) {
  /* return "found the needle at position " + haystack.indexOf("needle"); */

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return i;
    }
  }
}

console.log(
  findNeedle(["hey", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
