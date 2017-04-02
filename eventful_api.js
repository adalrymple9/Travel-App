// these values for demo and testing only
// delete before merge -- begin
$("#qryLocation").val("Miami");
$("#qryCategory").val("Music");
$("#dateFrom").val("04/15/2017");
$("#dateThru").val("12/31/2017");
// delete before merge -- end


function getEventfulObjs(){
  // harvest the values from HTML
  // change ID names to match Andrea
  var qL = $("#qryLocation").val();
  var qC = $("#qryCategory").val();
  var d0 = [ $("#dateFrom").val(), $("#dateThru").val()];
  console.log(qL, qC, d0[0], d0[1]);
  //check if both dates are valid
  if (moment(d0[0], "MM/DD/YYYY").isValid() && moment(d0[1], "MM/DD/YYYY").isValid()) {
    console.log("dates are valid");
    //concate into Eventful string YYYYMMDD00-YYYYMMDD00
    //Eventful ignores the final two zeroes in the date strings
    var d1 = 
    (
      moment(d0[0], "MM/DD/YYYY").format("YYYYMMDD") + "00-" + 
      moment(d0[1], "MM/DD/YYYY").format("YYYYMMDD") + "00"
    ); 
      console.log(qL, qC, d1);
      //store query to Eventful DATA object
     var oArgs = {
        app_key: "RzH4FnhD29mKTN4g",
        q: qC,
        where: qL,
        "date": d1,
        "include": "tags,categories",
        sort_order: "popularity",
     };
     // call Eventful API with our query
     // passing date string for test display, can be removed
      queryEventfulAPI(oArgs, d1);     

  }
  else
  {
    //error condition, discuss how to handle
    console.log(d0 + " is invalid");
  }
}

function queryEventfulAPI(oArgs, d1)
{
   // the Eventful call
   EVDB.API.call("/events/search", oArgs, function(oData) {
      // evts is the complete object
      // for production, return evts?
      var evts = oData.events;
      console.log(oData);
      console.log(evts);
      // put the data into the HTML testing page
      $("#qtyResults").html
      (
        "You selected dates: " + d1 + "<br>" + 
        oData.total_items + " results,<br>Here's the first " + oData.page_size + " by popularity:<br>" +
        "============================================="
      );
      $("#myResults").empty();
      for (i=0; i<evts.event.length; i++) {
        var d = $("<div>");
        d.attr("style", "padding:5px 0px 5px");
        d.html(
          "title= "+evts.event[i].title+"<br>" +
          "venue= "+evts.event[i].venue_name+", "+ 
                    evts.event[i].venue_address + ", " +
                    evts.event[i].venue_address + ", " +
                    evts.event[i].city_name + "<br>" +
          " time= "+ evts.event[i].start_time
        );
        $("#myResults").append(d);
      }
    });
}