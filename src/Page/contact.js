import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alamat:
        "Jl.Swadya IV, Pd.Ranggon,Cipayung,Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta 13860",
      kontak: "Kontak Kami : 081312345678",
    };
  }
  render() {
    return (
      <div>
        <center>
          <h3> {this.state.alamat} </h3>
          <h4> {this.state.kontak} </h4>
        </center>
      </div>
    );
  }
}

export default Contact;
