import { StyleSheet, SafeAreaView, Text , FlatList} from "react-native";
import { useSelector} from "react-redux"
import {ListItem} from "../components/ListItem"

export const ClipScreen = ({navigation}) => {
    const clips = useSelector((state) => state.user.clips);

    return(
        <SafeAreaView style={styles.cotainer}>
            {/* <Text>Clip Screen</Text> */}
            <FlatList
                data={clips}
                renderItem={({item}) => (
                    <ListItem
                    imageURL={item.urlToImage}
                    title={item.title}
                    author={item.author}
                    onPress={() => navigation.navigate("Article", {article: item})}

                    />
                )}

                keyExtractor = {(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    cotainer:{
        flex:1,
        backgroundColor:'#fff',
    },
});