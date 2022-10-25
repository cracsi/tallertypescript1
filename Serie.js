var Serie = (function () {
    function Serie(id, name, channel, seasons, descr, link, imgLink) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descr = descr;
        this.link = link;
        this.imgLink = imgLink;
    }
   return Serie;
    }());
export{Serie};
