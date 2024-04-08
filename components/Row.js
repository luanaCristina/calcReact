import {StyleSheet, View} from "react-native";

const Row = ({children}) => {
    return <View style = {style.container}>{children}</View>
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default Row;