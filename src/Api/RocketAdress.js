const RocketAddressApi = (params) => {
    var formdata = new FormData();
  
    var requestOptions = {
      method: "GET",
      //body: formdata,
      redirect: "follow",
    };
  
    fetch("https://api.spacexdata.com/v3/payloads", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  
  
  export default RocketAddressApi;