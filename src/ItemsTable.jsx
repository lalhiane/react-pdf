import React from "react";

import { View, StyleSheet } from "@react-pdf/renderer";

import TableRow from "./TableRow";

const styles = StyleSheet.create({

    table: {

        display: "table", 

        width: "100%", 

        borderStyle: "solid", 

        borderWidth: 1, 

        borderRightWidth: 0,
        
        borderBottomWidth: 0,

        borderColor: "#333"

    },
    
});

const ItemsTable = ({ data }) => (

    <View style={styles.table}>
        
        {/*<TableHeader />*/}
        
        <TableRow items={data.items} />
        
        {/*<TableFooter items={data.items} />*/}
        
    </View>
    
);

export default ItemsTable;