import { TripStructure } from '../models/trips_structure';

export const EXAMPLE_TRIPS: TripStructure[] = [
    {
        id: 1,
        name: 'Weekend in Warsaw',
        destination: 'Warsaw',
        start_date: '01.01.2021',
        end_date: '31.01.2021',
        price: 1800,
        availableSeats: 5,
        maxSeats: 5,
        description: "The city rose to prominence in the late 16th century, when Sigismund III decided to move the Polish capital and his royal court from Kraków. The elegant architecture, grandeur and extensive boulevards earned Warsaw the nickname Paris of the North prior to the Second World War.",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Panorama_siekierkowski.jpg/1800px-Panorama_siekierkowski.jpg'
    },
    {
        id: 2,
        name: 'Torun\'s Pastries', 
        destination: 'Torun', 
        start_date: '01.02.2021', 
        end_date: '28.02.2021', 
        price: 750, 
        availableSeats: 10, 
        maxSeats: 10, 
        description: "Toruń is one of the oldest cities in Poland, with the first settlement dated back to the 8th century and later having been expanded in 1233 by the Teutonic Knights.", 
        img: 'https://bi.im-g.pl/im/33/db/17/z25016371V.jpg'
    },
    {
        id: 3,
        name: 'Zakopane for sports', 
        destination: 'Zakopane', 
        start_date: '01.04.2021', 
        end_date: '30.04.2021', 
        price: 1800, 
        availableSeats: 15, 
        maxSeats: 15, 
        description: "The earliest documents mentioning Zakopane date to the 17th century, describing a glade called Zakopisko. In 1676 it was a village of 43 inhabitants. In 1818 Zakopane was a small town that was still being developed.", 
        img: 'https://ocdn.eu/pulscms-transforms/1/imJk9kpTURBXy80MTZlNDUyZGU0ZjY3MDRhYzI3OGY3Y2I5YjM2MWY2Zi5qcGeTlQMAzKrNFUHNC_STBc0DFM0BvJMJpjlhN2Y1MwaBoTAB/zakopane-i-tatry-noca.jpg'
    },
    {
        id: 4,
        name: 'Truth about Kazimierz', 
        destination: 'Kazimierz The Great', 
        start_date: '01.05.2021', 
        end_date: '31.05.2021', 
        price: 450, 
        availableSeats: 20, 
        maxSeats: 20, 
        description: "Since its inception in the fourteenth century to the early nineteenth century, Kazimierz has been an independent city, a royal city of the Crown of the Polish Kingdom, a location south of the Old Town of Kraków, separated from it by a branch of the Vistula river. ", 
        img: 'https://krakow.pl/zalacznik/295939/4.jpg'
    },
    {
        id: 5,
        name: 'History of Cracow', 
        destination: 'Cracow', 
        start_date: '01.06.2021', 
        end_date: '30.06.2021', 
        price: 350, 
        availableSeats: 5, 
        maxSeats: 5, 
        description: "The city has grown from a Stone Age settlement to Poland's second-most-important city. It began as a hamlet on Wawel Hill and was reported as a busy trading centre of Central Europe in 965.", 
        img: 'https://meteor-turystyka.pl/images/places/0/28.jpg'
    },
    {
        id: 6,
        name: 'Sunny Baltic Sea', 
        destination: 'Kolobrzeg', 
        start_date: '01.07.2021', 
        end_date: '31.07.2021', 
        price: 950, 
        availableSeats: 35, 
        maxSeats: 35, 
        description: "During the Early Middle Ages, Slavic Pomeranians founded a settlement at the site of modern Budzistowo. Thietmar of Merseburg first mentioned the site as Salsa Cholbergiensis. Around the year 1000, when the city was part of Poland, it became seat of the Diocese of Kołobrzeg, one of five oldest Polish dioceses. ", 
        img: 'https://przegladbaltycki.pl/wp-content/uploads/2020/09/Kolobrzeg-molo.jpg'
    },
    {
        id: 7,
        name: 'Masuria on sails', 
        destination: 'Elk', 
        start_date: '01.08.2021', 
        end_date: '31.08.2021', 
        price: 300, 
        availableSeats: 10, 
        maxSeats: 10, 
        description: "By 1283, the last Sudovian Prussian leader, Skomand (Lithuanian: Skalmantas), capitulated to the Teutonic Knights in the area. After 1323, the northern part of the region was administered by the Komturship of Brandenburg, while the larger part with the later town belonged to Komturship Balga.", 
        img: 'https://pliki.portalsamorzadowy.pl/i/15/27/91/152791_r0_940.jpg'
    }
];