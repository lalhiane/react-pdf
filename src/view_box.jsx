import React from "react";

import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({

    box: {

        width: "100%",

        margin: "30px auto",

        backgroundColor: "#eee",

        padding: "10px",

        textAlign: "center",

        letterSpacing: "1px"
        
    },

    textBox: {

        paddingBottom: "10px",

    }
    
});

const ViewBox = () => (

    <View style={styles.box}>

        <Text style={styles.textBox}>Relevé client : LMATI GZAR</Text>

        <Text>De 2022-12-26 à 2023-02-28</Text>

    </View>
    
);

export default ViewBox;