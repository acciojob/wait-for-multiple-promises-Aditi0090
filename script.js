document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

    function createPromise(index) {
        let time = (Math.random() * 2 + 1).toFixed(3); 
        return new Promise((resolve) => {
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    // Create 3 promises
    let promises = [createPromise(1), createPromise(2), createPromise(3)];

    Promise.all(promises).then((results) => {
        output.innerHTML = "";

        let maxTime = 0;

        results.forEach((result) => {
            maxTime = Math.max(maxTime, parseFloat(result.time));
            let row = `<tr><td>Promise ${result.index}</td><td>${result.time}</td></tr>`;
            output.innerHTML += row;
        });

       
        output.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
    });
});
