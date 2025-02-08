$(document).ready(function () {
    $("#calculate-btn").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total-cost").text(`$${total.toFixed(2)}`);
    });
});
