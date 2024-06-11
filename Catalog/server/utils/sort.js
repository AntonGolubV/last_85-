function templ(string, smart) {
    for (let key in smart) {
        if (key == "images") {
            for (let item in smart[key]) {
                if (item == "header") {
                    string = string.replace(`{{${key}}}`, `${smart[key][item]}`);
                }
            }
        }
        if (key == "prices" && smart.prices) {
            string = string.replace(`{{${key}}}`, `${smart.prices.price_min.amount} BYN`);
        }

        if (key == "prices" && !smart.prices) {
            string = string.replace(`{{${key}}}`, `Нет в наличии`);
        }
        string = string.replace(`{{${key}}}`, `${smart[key]}`);
    }
    return string;
}