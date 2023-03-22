import React, { Fragment } from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({

    tableRow: {

        margin: "auto",
        
        flexDirection: "row", 
    
    },

    tableCol: {
        
        borderStyle: "solid", 
    
        borderWidth: 1, 
    
        borderLeftWidth: 0, 
    
        borderTopWidth: 0,

        borderColor: "#333"

    },

    tableCell: {

        padding: "15px 10px 10px",
    
        fontSize: 9,

        whiteSpace: "nowrap",

        lineHeight: "1.7",

        letterSpacing: "1px"

    }
    
});

const TableRow = ({ items }) => {

    const rows = items.map((item, i) => {

        return (

            <View style={styles.tableRow} key={Math.random()}>

                <View style={{
                    
                    ...styles.tableCol,
                    
                    width: "20%",
                    
                    borderRightWidth: i == 0 || i == items.length - 1 ? 0 : 1,

                    backgroundColor: (item.td_1) && (i == 1 || i == 0 || i == items.length - 1) ? "#ccc" : "white"

                }}>

                    <Text style={styles.tableCell}>{item.td_1}</Text>

                </View>

                <View style={{
                    
                    ...styles.tableCol,
                    
                    width: "30%",
                    
                    borderRightWidth: i == 0 || i == items.length - 1 ? 0 : 1,

                    backgroundColor: (item.td_2) && (i == 1 || i == 0 || i == items.length - 1) ? "#ccc" : "white"

                }}>

                    <Text style={styles.tableCell}>{item.td_2}</Text>

                </View>

                <View style={{
                    
                    ...styles.tableCol,
                    
                    width: "15%",

                    backgroundColor: (item.td_3) && (i == 1 || i == 0 || i == items.length - 1) ? "#ccc" : "white"

                }}>

                    <Text style={styles.tableCell}>{item.td_3}</Text>

                </View>

                <View style={{
                    
                    ...styles.tableCol,
                    
                    width: "20%",
                    
                    backgroundColor: (item.td_4) && (i == 1 || i == 0 || i == items.length - 1) ? "#ccc" : "white"

                }}>

                    <Text style={styles.tableCell}>{item.td_4}</Text>

                </View>

                <View style={{
                    
                    ...styles.tableCol,
                    
                    width: "15%",

                    backgroundColor: (item.td_5) && (i == 1 || i == 0 || i == items.length - 1) ? "#ccc" : "white"
                    
                }}>

                    <Text style={styles.tableCell}>{item.td_5}</Text>

                </View>

            </View>

        )

    });
    
    return <Fragment>{rows}</Fragment>;
    
};

export default TableRow;