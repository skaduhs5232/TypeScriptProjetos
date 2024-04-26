import * as fs from 'fs';

interface Item {
    c: number;
    M: number;
    m: number;
}

function readInput(filename: string): [number, number[], number[], number[], number] | null {
    try {
        const input = fs.readFileSync(filename, 'utf-8').trim().split('\n');
        const n = parseInt(input[0]);
        const c = input[1].split(' ').map(Number);
        const M = input[2].split(' ').map(Number);
        const m = input[3].split(' ').map(Number);
        const W = parseInt(input[4]);
        return [n, c, M, m, W];
    } catch (error) {
        console.error("Erro ao ler o arquivo de entrada:", error);
        return null;
    }
}

function knapsackSolver(n: number, c: number[], M: number[], m: number[], W: number): number[] | null {
    let bestSolution: number[] | null = null;
    let bestProfit = -1;

    function branchAndBound(currSolution: number[], currProfit: number, currWeight: number, idx: number) {
        if (idx === n) {
            if (currWeight <= W && currProfit > bestProfit) {
                bestSolution = currSolution.slice();
                bestProfit = currProfit;
            }
            return;
        }

        // Verifica se incluir o item excede o peso máximo
        if (currWeight + m[idx] <= W) {
            // Branch com item selecionado
            const newSolution = currSolution.slice();
            newSolution[idx] = 1;
            branchAndBound(newSolution, currProfit + c[idx], currWeight + m[idx], idx + 1);
        }

        // Branch com item não selecionado
        branchAndBound(currSolution.slice(), currProfit, currWeight, idx + 1);
    }

    branchAndBound(new Array(n).fill(0), 0, 0, 0);

    return bestSolution;
}

function main() {
    const filename = 'knapsack.txt';
    const input = readInput(filename);
    if (input) {
        const [n, c, M, m, W] = input;
        const solution = knapsackSolver(n, c, M, m, W);
        if (solution) {
            console.log("Solução:", solution.join(' '));
        } else {
            console.log("Solução Inviável");
        }
    }
}

main();
