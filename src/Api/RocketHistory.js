const RocketHistoryApi = (params) => {
    var formdata = new FormData();
  
    var requestOptions = {
      method: "GET",
      //body: formdata,
      redirect: "follow",
    };
  
    fetch("https://api.spacexdata.com/v3/history", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  
  
  export default RocketHistoryApi;