var movies;
function display_movies(selected_movie) {
    var main = document.getElementById("main");
    main.innerHTML = "";
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].year == selected_movie.value) {
            var div1 = document.createElement("DIV");
            div1.className = "col-lg-4 col-md-6 col-sm-12 mt-3";
            var div2 = document.createElement("DIV");
            div2.className = "card";
            var div3 = document.createElement("DIV");
            div3.className = "card-body";
            div3.style.height = "32vw";
            var img = document.createElement("IMG");
            var tag_h3 = document.createElement("H3");
            tag_h3.className = "card-title";
            var tag_p1 = document.createElement("P");
            tag_p1.className = "card-text";
            var tag_p2 = document.createElement("P");
            tag_p2.className = "card-text";
            var tag_p3 = document.createElement("P");
            tag_p3.className = "card-text";
            var tag_p4 = document.createElement("P");
            tag_p4.className = "card-text";
            var tag_p5 = document.createElement("P");
            tag_p5.className = "card-text";
            var tag_p6 = document.createElement("P");
            tag_p6.className = "card-text";
            img.src = movies[i].info.image_url;
            img.className = "fluid card-img-top";
            tag_h3.innerHTML = movies[i].title;
            tag_p1.innerHTML = "Year:" + movies[i].year;
            tag_p2.innerHTML = "dirctors:" + movies[i].info.directors;
            tag_p3.innerHTML = "actors:" + movies[i].info.actors;
            tag_p4.innerHTML = "rating:" + movies[i].info.rating;
            tag_p5.innerHTML = "Genres:" + movies[i].info.genres;
            tag_p6.innerHTML = "plot:" + movies[i].info.plot;

            main.appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(tag_h3);
            div3.appendChild(tag_p1);
            div3.appendChild(tag_p2);
            div3.appendChild(tag_p3);
            div3.appendChild(tag_p4);
            div3.appendChild(tag_p5);
            div3.appendChild(tag_p6);
        }
    }
}
function show_movie(){
    var main = document.getElementById("main");
    for (var i = 0; i < movies.length; i++) {
        var div1 = document.createElement("DIV");
        div1.className = "col-lg-4 col-md-6 col-sm-12 mt-3";
        var div2 = document.createElement("DIV");
        div2.className = "card";
        var div3 = document.createElement("DIV");
        div3.className = "card-body";
        div3.style.height = "32vw";
        var img = document.createElement("IMG");
        var tag_h3 = document.createElement("H3");
        tag_h3.className = "card-title";
        var tag_p1 = document.createElement("P");
        tag_p1.className = "card-text";
        var tag_p2 = document.createElement("P");
        tag_p2.className = "card-text";
        var tag_p3 = document.createElement("P");
        tag_p3.className = "card-text";
        var tag_p4 = document.createElement("P");
        tag_p4.className = "card-text";
        var tag_p5 = document.createElement("P");
        tag_p5.className = "card-text";
        var tag_p6 = document.createElement("P");
        tag_p6.className = "card-text";
        img.src = movies[i].info.image_url;
        img.className = "fluid card-img-top";
        tag_h3.innerHTML = movies[i].title;
        tag_p1.innerHTML = "Year:" + movies[i].year;
        tag_p2.innerHTML = "dirctors:" + movies[i].info.directors;
        tag_p3.innerHTML = "actors:" + movies[i].info.actors;
        tag_p4.innerHTML = "rating:" + movies[i].info.rating;
        tag_p5.innerHTML = "Genres:" + movies[i].info.genres;
        tag_p6.innerHTML = "plot:" + movies[i].info.plot;

        main.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(tag_h3);
        div3.appendChild(tag_p1);
        div3.appendChild(tag_p2);
        div3.appendChild(tag_p3);
        div3.appendChild(tag_p4);
        div3.appendChild(tag_p5);
        div3.appendChild(tag_p6);
    }
}
function set_year(movies_string) {
    var year_tag = document.getElementById("years");
    const array = [];
    for (var i = 0; i < movies.length; i++) {
        array[i] = movies[i].year;
    }

    const uniqueSet = new Set(array);
    const backToArray = [...uniqueSet];
    backToArray.sort();

    for (var j = 0; j < backToArray.length; j++) {
        var option = document.createElement("OPTION");
        option.innerHTML = backToArray[j];
        option.value = backToArray[j];
        year_tag.appendChild(option);

    }
}

async function read_data(file) {
    let x = await fetch(file);
    let y = await x.text();
    movies = JSON.parse(y);
    show_movie();
    set_year(y);
}
read_data("https://github.com/mehrangholizade/JSON-File/blob/main/moviedata.json");