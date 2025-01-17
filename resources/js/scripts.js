// Assign variables references of elements on the webpage:
const clear_button = document.getElementById("clear-button");
const mortgage_amount_input = document.getElementById("mortgage-amount-input");
const mortgage_term_input = document.getElementById("mortgage-term-input");
const interest_rate_input = document.getElementById("interest-rate-input");
const mortgage_amount_container = document.getElementById("mortgage-amount-container");
const mortgage_term_container = document.getElementById("mortgage-term-container");
const interest_rate_container = document.getElementById("interest-rate-container");
const mortgage_amount_highlight = document.getElementById("mortgage-amount-highlight");
const mortgage_term_highlight = document.getElementById("mortgage-term-highlight");
const interest_rate_highlight = document.getElementById("interest-rate-highlight");
const mortgage_amount_alert = document.getElementById("mortgage-amount-alert");
const mortgage_term_alert = document.getElementById("mortgage-term-alert");
const interest_rate_alert = document.getElementById("interest-rate-alert");
const radio_alert = document.getElementById("radio-alert");
const repayment_radio = document.getElementById("repayment-radio");
const interest_only_radio = document.getElementById("interest-only-radio");
const calculate_button = document.getElementById("calculate-button");
const static_container = document.getElementById("static-container");
const dynamic_container = document.getElementById("dynamic-container");
const monthly_payments_output = document.getElementById("monthly-repayments-output");
const total_repayment_output = document.getElementById("total-repayment-output");

calculate_button.addEventListener("click", (event) => {
	event.preventDefault();
	let mortgage_amount;
	let mortgage_term;
	let interest_rate;

	if (mortgage_amount_input.value.length == 0) {
		// Change container border to red:
		mortgage_amount_container.style.border = "1px solid hsl(4, 69%, 50%)";
		// Change the input highlight text color:
		mortgage_amount_highlight.style.color = "hsl(0, 0%, 100%)";
		// Change the input highlight background color:
		mortgage_amount_highlight.style.backgroundColor = "hsl(4, 69%, 50%)";
		// Display alert text:
		mortgage_amount_alert.style.display = "block";
	} else {
		// Revert container border to default:
		mortgage_amount_container.style.border = "1px solid hsl(203, 41%, 72%)";
		// Revert the input highlight text color to default:
		mortgage_amount_highlight.style.color = "hsl(200, 24%, 40%)";
		// Revert the input highlight background color to default:
		mortgage_amount_highlight.style.backgroundColor = "hsl(202, 86%, 94%)";
		// Remove alert text display:
		mortgage_amount_alert.style.display = "none";
		// Convert value type to integer & assign to local variable:
		mortgage_amount = parseInt(mortgage_amount_input.value);
		// console.log(typeof mortgage_amount);
	}

	if (mortgage_term_input.value.length == 0) {
		// Change container border to red:
		mortgage_term_container.style.border = "1px solid hsl(4, 69%, 50%)";
		// Change the input highlight text color:
		mortgage_term_highlight.style.color = "hsl(0, 0%, 100%)";
		// Change the input highlight background color:
		mortgage_term_highlight.style.backgroundColor = "hsl(4, 69%, 50%)";
		// Display alert text:
		mortgage_term_alert.style.display = "block";
		console.log("Empty MTI input!");
	} else {
		// Revert container border to default:
		mortgage_term_container.style.border = "1px solid hsl(203, 41%, 72%)";
		// Revert the input highlight text color to default:
		mortgage_term_highlight.style.color = "hsl(200, 24%, 40%)";
		// Revert the input highlight background color to default:
		mortgage_term_highlight.style.backgroundColor = "hsl(202, 86%, 94%)";
		// Remove alert text display:
		mortgage_term_alert.style.display = "none";
		// Convert value type to integer & assign to local variable:
		mortgage_term = parseInt(mortgage_term_input.value);
		// console.log(typeof mortgage_term);
	}

	if (interest_rate_input.value.length == 0) {
		// Change container border to red:
		interest_rate_container.style.border = "1px solid hsl(4, 69%, 50%)";
		// Change the input highlight text color:
		interest_rate_highlight.style.color = "hsl(0, 0%, 100%)";
		// Change the input highlight background color:
		interest_rate_highlight.style.backgroundColor = "hsl(4, 69%, 50%)";
		// Display alert text:
		interest_rate_alert.style.display = "block";
		console.log("Empty IRT input!");
	} else {
		// Revert container border to default:
		interest_rate_container.style.border = "1px solid hsl(203, 41%, 72%)";
		// Revert the input highlight text color to default:
		interest_rate_highlight.style.color = "hsl(200, 24%, 40%)";
		// Revert the input highlight background color to default:
		interest_rate_highlight.style.backgroundColor = "hsl(202, 86%, 94%)";
		// Remove alert text display:
		interest_rate_alert.style.display = "none";
		// Convert value type to integer & assign to local variable:
		interest_rate = parseInt(interest_rate_input.value);
		// console.log(typeof interest_rate);
	}
});
