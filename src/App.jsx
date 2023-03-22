import React, { Fragment } from "react";

import { PDFViewer } from "@react-pdf/renderer";

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

function App() {

  return (
      
    <Fragment>
      
      <PDFViewer width="1000" height="600">
        
        <ReactPdf data={data} />
        
      </PDFViewer>
      
    </Fragment>
    
  );
  
}

export default App;
