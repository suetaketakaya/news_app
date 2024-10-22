import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

/** 
 * @param{
 *  imageURL: 画像URL(string)
 * 　title:タイトル(string)
 *   author: ニュース提供元(string)
 *  onPress:タップした時のイベント
 * } props
 * @returns
*/

export const ListItem = (props) => {
  const sampleText = props.title
  return (
      <TouchableOpacity style = {styles.itemContainer} onPress={props.onPress}>
        <View style = {styles.leftContainer}>
        <Image
        style={{width:100, height:100}}
        source={{uri:props.imageURL}}
        />
      </View>
      <View style = {styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {sampleText}
        </Text>
        <Text style={styles.subtext} >{props.author}</Text>
      </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height:100,
    width:"100%",
    backgroundColor:"white",
    flexDirection:"row",
    marginVertical:5,
  },
  leftContainer:{
    width:100,
  },
  rightContainer:{
    flex:1,
    padding:10,
    justifyContent:"space-between"
  },
  text:{
    fontSize:16,
  },
  subtext:{
    fontSize:12,
    color:"gray",
  },
});
