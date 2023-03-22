import React, { Fragment } from "react";

import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

import ReactPdf from "./react-pdf";

const data = {

  id: "5df3180a09ea16dc4b95f910",

  items: [
  
    {

      td_1: "",

      td_2: "",

      td_3: "",

      td_4: "Solde initial",

      td_5: "0",

    },
  
    {

      td_1: "Date",

      td_2: "Produit",

      td_3: "Quantité",

      td_4: "Prix Unitaire",

      td_5: "Total",

    },

    {

      td_1: "2022-12-26",

      td_2: "UPERIO CO 50MG B28 COMP PELLI",

      td_3: "1",

      td_4: "405,00",

      td_5: "405,00",

    },

    {

      td_1: "2022-12-26",

      td_2: "UPERIO CO 50MG B28 COMP PELLI",

      td_3: "1",

      td_4: "405,00",

      td_5: "405,00",

    },

    {

      td_1: "2022-12-26",

      td_2: "UPERIO CO 50MG B28 COMP PELLI",

      td_3: "1",

      td_4: "405,00",

      td_5: "405,00",

    },

    {

      td_1: "2022-12-26",

      td_2: "UPERIO CO 50MG B28 COMP PELLI",

      td_3: "1",

      td_4: "405,00",

      td_5: "405,00",

    },

    {

      td_1: "2022-12-26",

      td_2: "UPERIO CO 50MG B28 COMP PELLI",

      td_3: "1",

      td_4: "405,00",

      td_5: "405,00",

    },

    {

      td_1: "",

      td_2: "",

      td_3: "",

      td_4: "Solde final",

      td_5: "574,77",

    },

  ],

};

const styles = StyleSheet.create({

  btn: {

    margin: "30px",

    padding: "10px 20px",

    backgroundColor: "#3F96FC",

    border: "none",

    borderRadius: "6px",

    color: "white",

    fontSize: 16,

    cursor: "pointer"

  }

})

function App() {

  return (
      
    <Fragment>

      <PDFDownloadLink document={<ReactPdf data={data} />} fileName="somename.pdf">

        <button style={styles.btn}>Imprimer</button>

      </PDFDownloadLink>
      
    </Fragment>
    
  );
  
}

export default App;
