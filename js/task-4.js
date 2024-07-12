function getShippingCost(country){
    const countryCredits = {
        'China' : 100,
        'Chile' : 250,
        'Australia' : 170,
        'Jamaica' : 120,
    }
    let message = "";
    switch(country){
        case "China":
            message = `Shipping to ${country} will cost ${countryCredits[country]} credits`;
            message = `Shipping to ${country} will cost ${countryCredits[country]} credits`;
            break;
        case "Chile":
            message = `Shipping to ${country} will cost ${countryCredits[country]} credits`
            break;
        case "Australia":
            message = `Shipping to ${country} will cost ${countryCredits[country]} credits`
            break;
        case "Jamaica":
            message = `Shipping to ${country} will cost ${countryCredits[country]} credits`
            break;
        default:
            message = "Sorry, there is no delivery to your country";
            break;
    }
    return message;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"