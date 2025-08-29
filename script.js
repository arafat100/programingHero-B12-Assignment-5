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




// Select all call buttons
const callButtons = document.querySelectorAll(".call-click");
const callHistory = document.getElementById("callHistory");
const clearBtn = document.querySelector(".clear-btn");


for (const button of callButtons) {
    button.addEventListener("click", function () {


        const coinNumber = 20;
        const coinTotal = parseInt(document.getElementById("coin").innerText);

        if (coinTotal >= coinNumber) {


            const card = this.closest(".col-card");

            const serviceName = card.querySelector("h1").innerText;
            const serviceNumber = card.querySelector("h2").innerText;


            const entry = document.createElement("div");
            entry.className = "flex items-center justify-between gap-5 bg-[#FAFAFA] p-4 rounded shadow-sm mb-2";
            entry.innerHTML = `
          <div>
              <h1 class="font-bold">${serviceName}</h1>
              <p class="text-gray-600">${serviceNumber}</p>
          </div>
          <div class="text-gray-500 text-sm">
            Today ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </div>
        `;

            callHistory.appendChild(entry);

        }

    });
};


// Clear history button
clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
});



