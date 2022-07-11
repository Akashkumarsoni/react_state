import React, { Component } from "react";
import { Listing } from "./Listing";
import "./App.css";

export class SuggBox extends Component {
  state = {
    inp: "",
    listofsugg: [
        'Agra',
        'Allahabad',
        'Aligarh',
        'Ambedkar Nagar',
        'Auraiya',
        'Azamgarh',
        'Barabanki',
        'Budaun',
        'Bagpat',
        'Bahraich',
        'Bijnor',
        'Ballia',
        'Banda',
        'Balrampur',
        'Bareilly',
        'Basti',
        'Bulandshahr',
        'Chandauli',
        'Chhatrapati Shahuji Maharaj Nagar',
        'Chitrakoot',
        'Deoria',
        'Etah',
        'Kanshi Ram Nagar',
        'Etawah',
        'Firozabad',
        'Farrukhabad',
        'Fatehpur',
        'Faizabad',
        'Gautam Buddh Nagar',
        'Gonda',
        'Ghazipur',
        'Gorakhpur',
        'Ghaziabad',
        'Hamirpur',
        'Hardoi',
        'Mahamaya Nagar',
        'Jhansi',
        'Jalaun',
        'Jyotiba Phule Nagar',
        'Jaunpur district',
        'Ramabai Nagar (Kanpur Dehat)',
        'Kannauj',
        'Kanpur',
        'Kaushambi',
        'Kushinagar',
        'Lalitpur',
        'Lakhimpur Kheri',
        'Lucknow',
        'Mau',
        'Meerut',
        'Maharajganj',
        'Mahoba',
        'Mirzapur',
        'Moradabad',
        'Mainpuri',
        'Mathura',
        'Muzaffarnagar',
        'Panchsheel Nagar district (Hapur)',
        'Pilibhit',
        'Shamli',
        'Pratapgarh',
        'Rampur',
        'Raebareli',
        'Saharanpur',
        'Sitapur',
        'Shahjahanpur',
        'Sant Kabir Nagar',
        'Siddharthnagar',
        'Sonbhadra',
        'Sant Ravidas Nagar',
        'Sultanpur',
        'Shravasti',
        'Unnao',
        'Varanasi',
]
  };
 
  capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  inputHandler = (e) => {
    this.setState({
      inp: e.target.value,
    });
    this.sugg();
  };

  render() {
    return (
      <div>
        <h2>Enter name of city of UP</h2>
        <input className="inptsugg" onChange={this.inputHandler} />
        {this.state.listofsugg.map((i) => {
    var k =this.capitalizeFirstLetter(this.state.inp);
    if (k === i.slice(0, this.state.inp.length)) {
      return <Listing k={Math.random()} lists={i} />;
    }
  })}
      </div>
    );
  }
}

export default SuggBox;
