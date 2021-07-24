import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
const data=[{
  id:"1",
  name:'30 Days of Health Food',
  img:'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305__340.jpg',
  date:'01.07.2021',
  price:'$30',
  des:'Healthy Eating',
},
{
  id:"2",
  name:'Healthy Foods',
  img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
  date:'01.07.2021',
  price:'$30',
  des:'Diet',
},
{
  id:"3",
  name:'30 Days of Health Food',
  img:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  date:'01.07.2021',
  price:'$30',
  des:'Healthy Eating',
},
{
  id:"4",
  name:'30 Days of Health Food',
  img:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  date:'01.07.2021',
  price:'$30',
  des:'Healthy Eating',
}
]
const View2 = () => {
  const renderItem=({item,index})=>{
    return(
      <View style={{padding:10}}>
 
        <Image
        source={{uri:item.img}}
        style={styles.ImageList}
        />
        <Text style={styles.ItemName}>{item.name}</Text>
        <View style={styles.ItemDes}>
          <Text style={styles.ItemDetails}>{item.date}. {item.price}</Text>
          <Text style={styles.DesCription}>{item.des}</Text>
        </View>
      </View>
    )
  }
  return (
    <View>
      <View style={styles.Header}>
      <Text style={styles.HeaderText}>Available Challenges</Text>
      <Text style={styles.HeaderText2}>/2</Text>
      </View>
      <FlatList 
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
    </View>
  )
}

export default View2

const styles = StyleSheet.create({
  HeaderText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
   
  },
  HeaderText2:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  },
  Header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:25,
    paddingVertical:15
  },
  ImageList:{
    width:350,
    height:190,
    resizeMode:'cover',
    borderRadius:30,
    position:'relative',
    zIndex:-100,
    left:20
   
  },
  ItemName:{
    left:40,
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    letterSpacing:-1,
    top:3
  },
  ItemDetails:{
    fontSize:15,
    left:-30,
    fontWeight:'bold',
    // color:'rgba(255,255,255,0.4)',
    top:3,
    color:'black'
  },
  ItemDes:{
    flexDirection:'row',
    alignItems:'center',
    left:69,
    
  },
  DesCription:{
    fontSize:13,
    fontWeight:'bold',
    padding:6,
    backgroundColor:"rgba(0,0,0,0.2)",
    borderRadius:20,
    top:3,
    left:50,
    color:'white'

  }

})
