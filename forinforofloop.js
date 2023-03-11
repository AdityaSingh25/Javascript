const names = ["Youtube", "Facebook", "Netflix", "Instagram"];

for (const i of names) {
  console.log(i);
}

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
};

for (const n in symbols) {
  console.log(`Key is "${n}" and the value is "${symbols[n]}"`);
}
