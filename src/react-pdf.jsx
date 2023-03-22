import React from "react";

import { Page, Document, StyleSheet } from "@react-pdf/renderer";

import ViewBox from "./view_box";

import Table from "./Table";

const styles = StyleSheet.create({

    page: {

        width: "100%",
      
        fontSize: 11,
      
        flexDirection: "column",

        padding: "0 15px"
    
    }
    
});

const ReactPdf = ({ data }) => (

    <Document>
        
        <Page size="A4" style={styles.page}>

            <ViewBox />
            
            <Table data={data} />
            
        </Page>
        
    </Document>
    
);

export default ReactPdf;