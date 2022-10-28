import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";


export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.Text}> Visual website optimizer</Text>
            <StatusBar style="auto" />

            <View style={styles.inputView}>

                <TextInput
                    style={styles.TextInput}
                    placeholder="username"
                    placeholderTextColor="gray"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>



            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkslategrey",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:35,
    },
    Text: {

        textAlign: "center",
        color: "white",
        fontSize:31,
marginBottom:150,

    },



    inputView: {
        backgroundColor: "black",

        width: "90%",
        height: 45,
        marginBottom: 20,

        alignItems: "left",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        alignItems: "left",
    },

    loginBtn: {
        width: "90%",

        height: 50,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "brown",
    },
});