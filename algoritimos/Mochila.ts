import * as fs from "fs";

interface Item {
  c: number;
  M: number;
  m: number;
}

function readInput(
  filename: string
): [number, number[], number[], number[], number] | null {
  try {
    const input = fs.readFileSync(filename, "utf-8").trim().split("\n");
    const n = parseInt(input[0]);
    const c = input[1].split(" ").map(Number);
    const M = input[2].split(" ").map(Number);
    const m = input[3].split(" ").map(Number);
    const W = parseInt(input[4]);
    return [n, c, M, m, W];
  } catch (error) {
    console.error("Erro ao ler o arquivo de entrada:", error);
    return null;
  }
}

function matrizSolver(
  n: number,
  c: number[],
  M: number[],
  m: number[],
  W: number
): number[] | null {
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(W + 1).fill(0)
  );
  const selected: number[][] = Array.from({ length: n + 1 }, () =>
    Array(W + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (m[i - 1] <= w && w <= M[i - 1]) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - m[i - 1]] + c[i - 1]);
        if (dp[i][w] === dp[i - 1][w - m[i - 1]] + c[i - 1]) {
          selected[i][w] = 1;
        }
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  if (dp[n][W] === 0) {
    console.log("Solução Inviável");
    return null;
  }

  const solution: number[] = Array(n).fill(0);
  let k = W;
  for (let i = n; i > 0; i--) {
    if (selected[i][k] === 1) {
      solution[i - 1] = 1;
      k -= m[i - 1];
    }
  }
  return solution;
}

function main() {
  const filename = "matriz.txt";
  const input = readInput(filename);
  if (input) {
    const [n, c, M, m, W] = input;
    const solution = matrizSolver(n, c, M, m, W);
    if (solution) {
      console.log("Solução:", solution.join(" "));
    }
  }
}

main();
