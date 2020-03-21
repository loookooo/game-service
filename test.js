function K(N) {
    console.log(`-----${N}-----`)
    for (let i = 1; i <= N / 2; i++) {
        var n = Math.sqrt(Math.pow(i - 0.5, 2) + 2 * N) - i + 0.5;
        if (parseInt(n) == n) {
            // let s = 0;
            // for (let j = i; j <= n + i - 1; j++) {
            //     s = s + j;
            // }
            // console.log(`${i}到${n+i-1} = ${s}`);
            console.log(`${i}到${n+i-1} `);
            i++;
        }
    }
}
K(99999999);