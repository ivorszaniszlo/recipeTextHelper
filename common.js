$(document).ready(function () {
    /* code snipet */
    if ($(".subtitle").is(':contains("SZPONZORÁLT")')) {
        $.get('/recipeIngredientsData.json', function (fileContent) {
            let data = JSON.parse(fileContent);
            let name = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i].imageName && data[i].imageUrl) {
                    name.push(data[i].imageName);

                    $(".recipe_ingredients").html(function (_, html) {
                        let pattern = name[i];
                        let regex = new RegExp(pattern, "g");
                        let url = data[i].imageUrl;
                        return html.replace(regex, `<img src = ${url} alt = ${pattern} title = ${pattern} >`);
                    });
                }
            }
        })
    }
});