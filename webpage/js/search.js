$('#search').keyup(function() 
{
    /*get JSON file*/
    $.getJSON('index.json',function(data) 
    {
        var searchField = $('#search').val();
        var myExp = new RegExp(searchField,'i');
        var output;

        $.each(data, function(key, val) 
        {
            if ((val.tweet_text.search(myExp) != -1)) 
            {
              output += '<ul>';
              output += '<li>'+ val.tweet_text +'</li>';
              output += '<li>url: '+ val.url +'</li>';
              output += '<li>hashtag: ' +val.hashtag + '</li>';
              output += '</ul>';
            }

            return key<10;
        });
        
        $('#show_tweet').html(output);
    });
});