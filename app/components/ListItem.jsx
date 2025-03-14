import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';
import React from 'react';  
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../constants/colors';

const ListItem = ({title,subTitle,image,renderRightActions,onPress}) => {

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                
            
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        flexDirection:'row',
        alignItems:"center",
        marginLeft:1,
        padding:10,
    },
    imageContainer:{
       
        marginRight:10,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    title:{
        fontWeight:'500',
    },
    subTitle:{
        color:colors.medium,
    }
})

export default ListItem;