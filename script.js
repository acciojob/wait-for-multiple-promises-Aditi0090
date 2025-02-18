document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

    function createPromise(index) {
        let time = (Math.random() * 2 + 1).toFixed(3);
        return new Promise((resolve) => {
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    let promises = [createPromise(1), createPromise(2), createPromise(3)];

    Promise.all(promises).then((results) => {
        document.getElementById("loading").remove();

        let maxTime = 0;

        results.forEach((result) => {
            maxTime = Math.max(maxTime, parseFloat(result.time));
            output.innerHTML += `<tr><td>Promise ${result.index}</td><td>${result.time}</td></tr>`;
        });

        output.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
    });
});
