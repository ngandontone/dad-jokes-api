document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  //   const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(`localhost:8000/api`);
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data;
  } catch (error) {
    console.log(error);
  }
}
