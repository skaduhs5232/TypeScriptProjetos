const teaste = () => {
  console.log("teste");
};

teaste();

const fasoma = (n: number[]) => {
  let s = 0;
  n.forEach((e) => {
    s += e;
  });
  return s;
};

console.log(fasoma([1, 2, 3, 4, 5, 6]));
