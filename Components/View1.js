import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const View1 = () => {
  return (
    <View >
      <View style={styles.Header}>
      <Text style={styles.HeaderText1} >Connie Fox</Text>
      <Text style={styles.HeaderText2}>Show Info</Text>
      </View>
      <Text style={styles.Name}>Nutritionist</Text>
      <Text style={styles.Message}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</Text>
      <Text style={styles.ExpertName}>Expertise Area </Text>
      <View style={styles.Details}>
        <Text style={styles.DetailsText}>Nutritionist</Text>
        <Text style={styles.DetailsText}>Nutritionist List</Text>
        <Text style={styles.DetailsText}>Healthy Food </Text>
        <Text style={styles.DetailsText}>Nutritionist</Text>
        <Text style={styles.DetailsText}>Nutritionist</Text>
        <Text style={styles.DetailsText}>Nutritionist List</Text>
        <Text style={styles.DetailsText}>Nutritionist List</Text>
        <Text style={styles.DetailsText}>Nutritionist List</Text>
        <Text style={styles.DetailsText}>Healthy  </Text>
      </View>
      <Text style={styles.DesName}>Details & Description</Text>
      <Text style={styles.Description}>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      </Text>
    </View>
  )
}

export default View1

const styles = StyleSheet.create({
  Header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:15
  },
  HeaderText1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#2a6aff'
  },
  HeaderText2:{
    fontSize:15,
    fontWeight:'bold'
  },
  Name:{
    fontSize:17,
    fontWeight:'bold',
    left:25,
    top:-13
  },
  Message:{
    marginHorizontal:45,
    borderTopWidth:1,
    borderTopColor:'gray',
    padding:5,
    borderBottomWidth:1,
    borderBottomColor:'gray'

  },
  ExpertName:{
    fontSize:17,
    fontWeight:'bold',
    left:20,
    top:10
  },
  Details:{
    flexDirection:'row',
    display:'flex',
    flexWrap:'wrap',
    top:10,
    left:25,
    width:390,
    right:10,

   

  },
  DetailsText:{
    fontSize:15,
    backgroundColor:'rgba(0,0,255,0.19)',
    margin:5,
    padding:5,
    borderRadius:10,
   
  },
  DesName:{
    fontSize:16,
    fontWeight:'bold',
    left:20,
    top:10
  },
  Description:{
    fontSize:15,
    left:20,
    top:10,
    width:370
  }

})
