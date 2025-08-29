// heart
let heartCount = 0;
const heartClick = document.getElementsByClassName("heart-click");
for (let heart of heartClick) {
    heart.addEventListener("click", function (e) {
        e.preventDefault();
        heartCount++;
        document.getElementById("heart-sum").innerText = heartCount;

    })
}


// call
const callClick = document.getElementsByClassName("call-click");

for (const call of callClick) {
    call.addEventListener("click", function (e) {
        e.preventDefault();
        const coinNumber = 20;
        const coinTotal = parseInt(document.getElementById("coin").innerText);

        if (coinTotal >= coinNumber) {
            alert("calling national emergency service 999")
            const coinFinal = coinTotal - coinNumber;
            document.getElementById("coin").innerText = coinFinal;
            // call history
            const data = {
                name: "National Emergency Number",
                date: new Date().toLocaleTimeString()
            }
            callHistoryData.push(data)

            return
        }
        else {
            alert("insufficient coins.you need at least 20 coins to call")
        }
    });
}


// copy
const copyClick = document.getElementsByClassName("copy-click");
for (const copy of copyClick) {
    copy.addEventListener("click", function (e) {
        e.preventDefault();

        const coinNumber = 20;
        const coinTotal = parseInt(document.getElementById("coin").innerText);

        const coinFinal = coinTotal + coinNumber;
        document.getElementById("coin").innerText = coinFinal;
    });
}

// Call History
const callHistoryData = []





