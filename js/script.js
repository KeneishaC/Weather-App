console.log("It's Working!")

function handleGetData(event){
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#search").val()
  $.ajax({url: `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&appid=b061ad703af6f6685490fbf5960bd110`})
    .then(
      (data) => {
        console.log(data);
        $("#location").text(data.name)
        $("#temp").text(data.main.temp)
        $("#feelslike").text(data.main.feels_like)
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}
$('form').on("submit", handleGetData)

//button onclick="document.getElementById("search").value = ''">Clear input field</button
     