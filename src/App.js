import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "./components/Autocomplete";
import MyMap from "./components/MyMap";


class App extends Component {
  constuctor(){
    this.state = {

    }
  }
  getCountries(){
    var countriesU = [
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Mehrauli Gurgaon Road, DLF City Phase 2, Near MG Road Metro Station, Gurugram, Haryana, 122008",
          "latitude": 28.480867,
          "longitude": 77.0802540000001,
          "eLoc": "B7S777",
          "entryLatitude": 28.47993771,
          "entryLongitude": 77.08063507,
          "placeName": "MGF Metropolitan Mall",
          "alternateName": "Metropolitan Mall,mgf Mall",
          "keywords": [
              "SHPMAL"
          ],
          "addressTokens": {},
          "p": 3,
          "orderIndex": 1
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Vishwakarma Road, Cyber Hub, DLF Cyber City, DLF City Phase 2, Gurugram, Haryana, 122008",
          "latitude": 28.4956090000001,
          "longitude": 77.0886,
          "eLoc": "42ATSC",
          "entryLatitude": 28.496087,
          "entryLongitude": 77.087813,
          "placeName": "DLF Cyber City",
          "alternateName": "",
          "keywords": [
              "SHPHUB"
          ],
          "addressTokens": {},
          "p": 3,
          "orderIndex": 2
      },
      {
          "type": "SUB_LOCALITY",
          "typeX": 6,
          "placeAddress": "Laxman Vihar, Gurugram, Haryana, 122006",
          "latitude": 28.483369,
          "longitude": 77.007841,
          "eLoc": "CR3J63",
          "entryLatitude": 0,
          "entryLongitude": 0,
          "placeName": "Phase 2",
          "alternateName": "",
          "keywords": [],
          "addressTokens": {},
          "p": 3433,
          "orderIndex": 3
      },
      {
          "type": "SUB_LOCALITY",
          "typeX": 6,
          "placeAddress": "Bhimgarh Kheri, Gurugram, Haryana, 122001",
          "latitude": 28.4862430000001,
          "longitude": 77.0138450000001,
          "eLoc": "5GL53F",
          "entryLatitude": 0,
          "entryLongitude": 0,
          "placeName": "Phase 2",
          "alternateName": "",
          "keywords": [],
          "addressTokens": {},
          "p": 10671,
          "orderIndex": 4
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Vishwakarma Road, Block C, DLF City Phase 2, Gurugram, Haryana, 122008",
          "latitude": 28.4875260000001,
          "longitude": 77.0929570000001,
          "eLoc": "LNTAZS",
          "entryLatitude": 28.48759,
          "entryLongitude": 77.093017,
          "placeName": "Phase 2 Rapid Metro Station",
          "alternateName": "Phase 2",
          "keywords": [
              "TRNMET"
          ],
          "addressTokens": {},
          "p": 4796,
          "orderIndex": 5
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Golf Course Road, Sector 28, Gurugram, Haryana, 122002",
          "latitude": 28.471351,
          "longitude": 77.0939190000001,
          "eLoc": "EN1IOU",
          "entryLatitude": 28.47135,
          "entryLongitude": 77.093873,
          "placeName": "Phase 1 Rapid Metro Station",
          "alternateName": "",
          "keywords": [
              "TRNMET"
          ],
          "addressTokens": {},
          "p": 6626,
          "orderIndex": 6
      },
      {
          "type": "LOCALITY",
          "typeX": 5,
          "placeAddress": "Gurugram, Haryana, 122008",
          "latitude": 28.4849350000001,
          "longitude": 77.0849630000001,
          "eLoc": "YY7C3E",
          "entryLatitude": 0,
          "entryLongitude": 0,
          "placeName": "DLF City Phase 2",
          "alternateName": "",
          "keywords": [],
          "addressTokens": {},
          "p": 702,
          "orderIndex": 7
      },
      {
          "type": "SUB_LOCALITY",
          "typeX": 6,
          "placeAddress": "DLF City Phase 2, Gurugram, Haryana, 122008",
          "latitude": 28.482677,
          "longitude": 77.0894640000001,
          "eLoc": "73J2F0",
          "entryLatitude": 0,
          "entryLongitude": 0,
          "placeName": "Block J",
          "alternateName": "",
          "keywords": [],
          "addressTokens": {},
          "p": 716,
          "orderIndex": 8
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Mehrauli Gurgaon Road, Block J, DLF City Phase 2, Gurugram, Haryana, 122008",
          "latitude": 28.4813560000001,
          "longitude": 77.092989,
          "eLoc": "2ACTC4",
          "entryLatitude": 28.481393,
          "entryLongitude": 77.093006,
          "placeName": "Sikanderpur Metro Station",
          "alternateName": "",
          "keywords": [
              "TRNMET"
          ],
          "addressTokens": {},
          "p": 730,
          "orderIndex": 10
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "1/2, Opposite Vivanta By Taj, Swami Vivakananda Road, MG Road, Old Madras Road, Bengaluru, Karnataka, 560008",
          "latitude": 12.9734490000001,
          "longitude": 77.620438,
          "eLoc": "Q2285V",
          "entryLatitude": 12.973932,
          "entryLongitude": 77.620066,
          "placeName": "1 MG Road Mall",
          "alternateName": "One Mg Road Mall,1 Mg Lido Mall",
          "keywords": [
              "SHPMAL"
          ],
          "addressTokens": {},
          "p": 841,
          "orderIndex": 1
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Mall Road, Gurugram, Haryana, 122002",
          "latitude": 28.4792170000001,
          "longitude": 77.0799640000001,
          "eLoc": "WMNJZO",
          "entryLatitude": 28.479318,
          "entryLongitude": 77.080064,
          "placeName": "MG Road Metro Station Gate No 1",
          "alternateName": "Syska Led Mg Road Metro Station Gate No 1",
          "keywords": [
              "COMGAT"
          ],
          "addressTokens": {},
          "p": 6903,
          "orderIndex": 2
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Residency Road, Bangalore Central Mall, Ashok Nagar, Bengaluru, Karnataka, 560025",
          "latitude": 12.9738330000001,
          "longitude": 77.6112210000001,
          "eLoc": "8J23DC",
          "entryLatitude": 12.973788,
          "entryLongitude": 77.611238,
          "placeName": "MG Road Bus Stop G2",
          "alternateName": "",
          "keywords": [
              "TRNBUS"
          ],
          "addressTokens": {},
          "p": 17843,
          "orderIndex": 3
      },
      {
          "type": "STREET",
          "typeX": 11,
          "placeAddress": "Treasure Island Mall, Kanchan Bagh, Indore, Madhya Pradesh, 452001",
          "latitude": 22.7217047515831,
          "longitude": 75.8783170084158,
          "eLoc": "YXZR2Y",
          "entryLatitude": 0,
          "entryLongitude": 0,
          "placeName": "MG Road",
          "alternateName": "Mahatama Ghandi Road",
          "keywords": [],
          "addressTokens": {},
          "p": 24000,
          "orderIndex": 4
      },
      {
          "type": "STREET",
          "typeX": 11,
          "placeAddress": "Mall Of Mysore, Indira Nagar, Ittigegud, Mysuru, Karnataka, 570010",
          "latitude": 12.2982294221106,
          "longitude": 76.663992,
          "eLoc": "Y8715Y",
          "entryLatitude": 0,
          "entryLongitude": 0,
          "placeName": "MG Road",
          "alternateName": "Chamundi Hill Road",
          "keywords": [],
          "addressTokens": {},
          "p": 24000,
          "orderIndex": 5
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "5th Floor, 1 MG Road Mall, Trinity Circle, 1/2 Swami Vivekananda Road, Opp Vivanta By Taj, Bengaluru, Karnataka, 560008",
          "latitude": 12.9734490000001,
          "longitude": 77.620438,
          "eLoc": "3SB0FE",
          "entryLatitude": 12.973932,
          "entryLongitude": 77.620066,
          "placeName": "Blimey",
          "alternateName": "",
          "keywords": [
              "FODPUB"
          ],
          "addressTokens": {},
          "p": 6174,
          "orderIndex": 6
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "5th Floor, Restaurant 3, 1 MG Road Mall, Trinity Circle, 1/2 Swami Vivekananda Road, Opp Vivanta By Taj, Bengaluru, Karnataka, 560008",
          "latitude": 12.9734490000001,
          "longitude": 77.620438,
          "eLoc": "PBZ10H",
          "entryLatitude": 12.973932,
          "entryLongitude": 77.620066,
          "placeName": "Fort Kochi",
          "alternateName": "",
          "keywords": [
              "FODCON"
          ],
          "addressTokens": {},
          "p": 6387,
          "orderIndex": 7
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Level5, 1/2, 1 MG Road Mall, Trinity Circle, Swami Vivekananda Road, Opposite Vivanta By Taj, Bengaluru, Karnataka, 560008",
          "latitude": 12.9734490000001,
          "longitude": 77.620438,
          "eLoc": "UQJGNJ",
          "entryLatitude": 12.973932,
          "entryLongitude": 77.620066,
          "placeName": "Mamma Mexicana",
          "alternateName": "",
          "keywords": [
              "FODCON"
          ],
          "addressTokens": {},
          "p": 6404,
          "orderIndex": 8
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "Shop No 24, 25, 26, Platina, Opposite Bristol Hotel, MG Road, Sector 28, Gurugram, Haryana, 122002",
          "latitude": 28.480287,
          "longitude": 77.093039,
          "eLoc": "BABTUY",
          "entryLatitude": 28.480099,
          "entryLongitude": 77.092294,
          "placeName": "Maruti Suzuki NEXA Pasco Automobiles",
          "alternateName": "Maruti Nexa,maruti Suzuki Nexa Mg Road",
          "keywords": [
              "SHPAUT"
          ],
          "addressTokens": {},
          "p": 6407,
          "orderIndex": 9
      },
      {
          "type": "POI",
          "typeX": 7,
          "placeAddress": "First Floor, R-2 And 3, 1 MG Road Mall, Trinity Circle, 1/2 Swami Vivekananda Road, Opp Vivanta By Taj, Bengaluru, Karnataka, 560008",
          "latitude": 12.973801,
          "longitude": 77.620348,
          "eLoc": "6O4FFF",
          "entryLatitude": 12.973953,
          "entryLongitude": 77.620055,
          "placeName": "Cha Bar",
          "alternateName": "",
          "keywords": [
              "FODCOF"
          ],
          "addressTokens": {},
          "p": 6407,
          "orderIndex": 10
      }
    ];
    var con = [];
    for(var i=0;i<countriesU.length;i++){
      con.push(countriesU[i]["placeAddress"]);
    }
    return con;
  }
  onInputClickSubmit(input){
    console.log(input)
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Autocomplete
        suggestions={ this.getCountries() }
        onClickSubmit = { this.onInputClickSubmit }/>
        </header>

      </div>
    );
  }
}

export default App;
