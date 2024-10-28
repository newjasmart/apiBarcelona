import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent {
  countries = [
    {
      id: 2,
      continent_id: 1,
      name: "Poland",
      official_name: "Republic of Poland",
      fifa_name: "POL",
      iso2: "PL",
      iso3: "POL",
      latitude: "52.147850036621094",
      longitude: "19.37775993347168",
      borders: ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
      image_path: "https://cdn.sportmonks.com/images/countries/png/short/pl.png"
    },
    {
      id: 11,
      continent_id: 1,
      name: "Germany",
      official_name: "Federal Republic of Germany",
      fifa_name: "GER",
      iso2: "DE",
      iso3: "DEU",
      latitude: "51.20246505737305",
      longitude: "10.382203102111816",
      borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
      image_path: "https://cdn.sportmonks.com/images/countries/png/short/de.png"
    },
    {
      id: 17,
      continent_id: 1,
      name: "France",
      official_name: "French Republic",
      fifa_name: "FRA",
      iso2: "FR",
      iso3: "FRA",
      latitude: "46.63727951049805",
      longitude: "2.3382623195648193",
      borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
      image_path: "https://cdn.sportmonks.com/images/countries/png/short/fr.png"
    },
    {
      id: 20,
      continent_id: 1,
      name: "Portugal",
      official_name: "Portuguese Republic",
      fifa_name: "POR",
      iso2: "PT",
      iso3: "PRT",
      latitude: "39.64200973510742",
      longitude: "-8.009422302246094",
      borders: ["ESP"],
      image_path: "https://cdn.sportmonks.com/images/countries/png/short/pt.png"
    }
  ];
}