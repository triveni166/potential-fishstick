function generate(){
    var quotes = {
        "-Swami Vivekananda": "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
        "-Rabindranath Tagore ":"Faith is the bird that feels the light when the dawn is still dark.",
        "- Gautama Buddha":"All that we are is the result of what we have thought. The mind is everything. What we think we become.",
        "- Abdul Kalam":"To succeed in your mission, you must have single-minded devotion to your goal.",
        "- Sardar Patel":"Even if we lose the wealth of thousands, and our life is sacrificed, we…should keep smiling and be cheerful keeping our faith in God and Truth."

    }
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()* authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;
}
