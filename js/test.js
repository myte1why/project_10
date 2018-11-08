$(document).ready(function() {
   var apioptList = [{t : "iron man", y : "",plot :"short",r :"json"},
                    {t : "iron man 2", y : "",plot :"short",r :"json"},
                    {t : "iron man 3", y : "",plot :"short",r :"json"},
                    {t : "The Incredible Hulk", y : "",plot :"short",r :"json"},
                    {t : "Thor", y : "",plot :"short",r :"json"},
                    {t : "Captain America: The First Avenger", y : "",plot :"short",r :"json"},
                    {t : "The Avengers", y : "",plot :"short",r :"json"},
                    {t : "Thor: The Dark World", y : "",plot :"short",r :"json"},
                    {t : "Captain America: The Winter Soldier", y : "",plot :"short",r :"json"},
                    {t : "Guardians of the Galaxy", y : "",plot :"short",r :"json"},
                    {t : "Avengers: Age of Ultron", y : "",plot :"short",r :"json"},
                    {t : "Ant-Man", y : "",plot :"short",r :"json"},
                    {t : "Captain America: Civil War", y : "",plot :"short",r :"json"},
                    {t : "Doctor Strange", y : "",plot :"short",r :"json"},
                    {t : "Guardians of the Galaxy Vol. 2", y : "",plot :"short",r :"json"},
                    {t : "Spider-Man: Homecoming", y : "",plot :"short",r :"json"},
                    {t : "Thor: Ragnarok", y : "",plot :"short",r :"json"},
                    {t : "Black Panther", y : "",plot :"short",r :"json"},
                    {t : "Avengers: Infinity War", y : "",plot :"short",r :"json"}
                    ];



    var apilink     = 'http://www.omdbapi.com/?&apikey=8d84c350';
         function apifunction(data){
            var item = "<h2>" + data["Title"] + "</h2>";
            item += "<h3>DIRECTOR :" +data["Director"]+"</h3>";
            item += "<h3>CAST : "+ data["Actors"] + "</h3>";
            item += "<h3>Released : "+data["Released"]+"</h3>";
            item += "<h4>Plot :" + data["Plot"] + "</h4>";

            var poster = '<a class="photo_list" href="'+data['Poster']+'" data-lightbox="films" data-title="' + item + '"><img src="'+data['Poster']+'"></a>';
            console.log(data);
            $("#all").append(poster);
         }
         $.each(apioptList,function(i, value) {
             $.getJSON(apilink, apioptList[i], apifunction);
         });
    
}); //end document.ready
