$("button").on("click", function () {
  let address = $("#addr-input").val();
  let minPrice = $("#min-p-input").val();
  let maxPrice = $("#max-p-input").val();
  let minRooms = $("#min-r-input").val();
  let maxRooms = $("#max-r-input").val();
  let immediate = $("#immed-y");

  let relevantApts = findRelevantApts(
    address,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    immediate
  );
  renderApts(relevantApts);

  if ($(".result").length === 0) {
    $(".message").empty();
    $(".message").append("No results found");
  }
});

const renderApts = function (apartments) {
  $("#results").empty();
  console.log(apartments);
  const source = $("#apartments-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template({ apartment: apartments });
  $("#results").append(newHTML);
};

renderApts(apartments);
