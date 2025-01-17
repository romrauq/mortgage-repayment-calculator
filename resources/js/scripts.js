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

	// Validate and fetch mortgage amount:
	if (mortgage_amount_input.value.length == 0) {
		mortgage_amount_container.style.border = "1px solid hsl(4, 69%, 50%)";
		mortgage_amount_highlight.style.color = "hsl(0, 0%, 100%)";
		mortgage_amount_highlight.style.backgroundColor = "hsl(4, 69%, 50%)";
		mortgage_amount_alert.style.display = "block";
	} else {
		mortgage_amount_container.style.border = "1px solid hsl(203, 41%, 72%)";
		mortgage_amount_highlight.style.color = "hsl(200, 24%, 40%)";
		mortgage_amount_highlight.style.backgroundColor = "hsl(202, 86%, 94%)";
		mortgage_amount_alert.style.display = "none";
		mortgage_amount = parseFloat(mortgage_amount_input.value);
	}

	// Validate and fetch mortgage term
	if (mortgage_term_input.value.length == 0) {
		mortgage_term_container.style.border = "1px solid hsl(4, 69%, 50%)";
		mortgage_term_highlight.style.color = "hsl(0, 0%, 100%)";
		mortgage_term_highlight.style.backgroundColor = "hsl(4, 69%, 50%)";
		mortgage_term_alert.style.display = "block";
	} else {
		mortgage_term_container.style.border = "1px solid hsl(203, 41%, 72%)";
		mortgage_term_highlight.style.color = "hsl(200, 24%, 40%)";
		mortgage_term_highlight.style.backgroundColor = "hsl(202, 86%, 94%)";
		mortgage_term_alert.style.display = "none";
		mortgage_term = parseInt(mortgage_term_input.value);
	}

	// Validate and fetch interest rate
	if (interest_rate_input.value.length == 0) {
		interest_rate_container.style.border = "1px solid hsl(4, 69%, 50%)";
		interest_rate_highlight.style.color = "hsl(0, 0%, 100%)";
		interest_rate_highlight.style.backgroundColor = "hsl(4, 69%, 50%)";
		interest_rate_alert.style.display = "block";
	} else {
		interest_rate_container.style.border = "1px solid hsl(203, 41%, 72%)";
		interest_rate_highlight.style.color = "hsl(200, 24%, 40%)";
		interest_rate_highlight.style.backgroundColor = "hsl(202, 86%, 94%)";
		interest_rate_alert.style.display = "none";
		interest_rate = parseFloat(interest_rate_input.value);
	}

	// Perform calculations if all inputs are valid
	if (mortgage_amount && mortgage_term && interest_rate) {
		const monthly_interest_rate = interest_rate / 100 / 12; // Convert annual rate to monthly
		const total_payments = mortgage_term * 12; // Total number of monthly payments
		const monthly_payment =
			(mortgage_amount *
				(monthly_interest_rate * Math.pow(1 + monthly_interest_rate, total_payments))) /
			(Math.pow(1 + monthly_interest_rate, total_payments) - 1);
		const total_repayment = monthly_payment * total_payments;

		// Remove static container element within right column:
		static_container.style.display = "none";
		// Display dynamic container element within right column:
		dynamic_container.style.display = "block";
		// Update the output elements
		monthly_payments_output.textContent = Number(monthly_payment.toFixed(2)).toLocaleString(
			"en-US"
		);
		total_repayment_output.textContent = Number(total_repayment.toFixed(2)).toLocaleString(
			"en-US"
		);
	}
});
