export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descr: string;
    link: string;
    imgLink: string;
constructor(id: number,name: string,channel: string, seasons: number, descr: string,link: string,imgLink: string){
    this.id=id;
    this.name=name;
    this.channel=channel;
    this.seasons=seasons;
    this.descr=descr;
    this.link=link;
    this.imgLink=imgLink;
    }
}