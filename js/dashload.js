

function loadTokens() {
    const container = document.getElementById("tokenList");
    if (!container) return;
    const tokens = JSON.parse(localStorage.getItem("myTokens") || "[]");
    if (tokens.length === 0) {
        container.innerHTML = "<p>No tokens deployed yet.</p>";
        return;
    }
    container.innerHTML = "";
    tokens.forEach(token => {
        const card = document.createElement("div");
        card.className = "token-card";
        card.innerHTML = `
      <h3>${token.name} (${token.symbol})</h3>
      <p>Supply: ${token.supply}</p>
    <p>Address: <a href="${token.link}" target="_blank">${token.tokenAddress}</a></p>
    `;
        container.appendChild(card);
    });
}

function loadIcoTokens() {
    console.log(JSON.parse(localStorage.getItem("myIcoTokens") || "[]"))
    const container = document.getElementById("icoTokenList");
    if (!container) return;
    const tokens = JSON.parse(localStorage.getItem("myIcoTokens") || "[]");
    if (tokens.length === 0) {
        container.innerHTML = "<p>No ico token contracts deployed yet.</p>";
        return;
    }
    container.innerHTML = "";
    tokens.forEach(token => {
        const card = document.createElement("div");
        card.className = "token-card";
        card.innerHTML = `
      <h3>${token.name} (${token.symbol})</h3>
      <p>Supply: ${token.supply}</p>
      <p>Token Price: ${token.tokenPrice} $</p>
      <p>Duration : ${token.duration}  Days</p>
      <p>HardCap: ${token.capUsd} $</p>
      <p>Fund Wallet: ${token.fundWallet}</p>
    <p>Token Address: <a href="${token.link}" target="_blank">${token.tokenAddress}</a></p>
    <p>Crowdsale Address: <a href="${token.link2}" target="_blank">${token.crowdSaleAddres}</a></p>
    `;
        container.appendChild(card);
    });
}

window.addEventListener("load", loadTokens);
window.addEventListener("load", loadIcoTokens);