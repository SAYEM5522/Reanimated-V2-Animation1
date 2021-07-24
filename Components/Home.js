import React from 'react'
import { StyleSheet, View,Text,StatusBar,FlatList,Image,Pressable } from 'react-native'
import Animated,{  Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import data from './Data'
const Home = () => {
  
  const Y = useSharedValue(0);
  const Y1 = useSharedValue(0);
  const Y2 = useSharedValue(0);
  const AnimatedIcon=Animated.createAnimatedComponent(AntDesign);
  const AnimatedText=Animated.createAnimatedComponent(Text);
  const navigaton=useNavigation();
  const config={
    mass:1,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:0.1,
    restSpeedThreshold:0.6
  }
  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      if(Y.value<-30){
      Y.value = withSpring(-430,config);
      }
      if(Y.value>-430&&Y.value<-380){
        Y.value=withSpring(0,config);
        Y1.value=withSpring(0,config);
        Y2.value=withSpring(0,config);
        }
      if(Y.value>-380){
        Y1.value=withSpring(210,config);
        Y2.value=withSpring(150,config);
       }

    },
  });

  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y1.value;
    },
    onActive: (event, ctx) => {
      Y1.value = ctx.startX + event.translationY;
      
    },
    onEnd: (_) => {
      if(Y1.value<-30){
        Y1.value = withSpring(-528,config);
        }
        if(Y1.value>-528&&Y1.value<-480){
          Y1.value=withSpring(0,config);
          }  
    },
  });
  const gestureHandler3 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y2.value;
    },
    onActive: (event, ctx) => {
      Y2.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      if(Y2.value<-30){
        Y2.value = withSpring(-630,config);
        }
        if(Y2.value>-630&&Y2.value<-580){
        Y2.value=withSpring(0,config);
        }  
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:interpolate(Y.value,[-100,-400],[350,420],Extrapolate.CLAMP),
      transform: [
        {
          translateY: Y.value,
        },
      ],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      width:interpolate(Y1.value,[-100,-400],[350,420],Extrapolate.CLAMP),
      transform: [
        {
          translateY: Y1.value,
        },
      ],
    };
  });
  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      width:interpolate(Y2.value,[-100,-400],[350,420],Extrapolate.CLAMP),
      transform: [
        {
          translateY: Y2.value,
        },
      ],
    };
  });
  const IconStyle=useAnimatedStyle(()=>{
    return{
      left:interpolate(Y.value,[0,-300],[-40,10],Extrapolate.CLAMP)
    }
  });
  const TextStyle=useAnimatedStyle(()=>{
    return{
      top:interpolate(Y.value,[0,-300],[0,27],Extrapolate.CLAMP),
    }
  });

  const renderItem=({item,index})=>{

   
    return(
      <View style={{top:50,alignItems:'center',padding:10}}>
        <Pressable onPress={()=>
      navigaton.push("Details",{
        itemId:item.id,
       
      })} >
        <Image
        
        source={{uri:item.image}}
        style={styles.Image}
        />
        </Pressable>
       
        <Text style={styles.ImageText}>{item.des}</Text>
      </View>
    )
  }

  return (
    <View style={{backgroundColor:"#2a6aff"}} >
      <StatusBar/>
      <View style={styles.HomeTop}>
      <Text numberOfLines={2} style={styles.Caption}>
        Search For Your Next Challenge
      </Text>
      </View>
      <PanGestureHandler
       activeOffsetX={[-30, 30]}
       activeOffsetY={[-20, 20]}
       onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.View1,animatedStyle]}>
     
      <AnimatedIcon style={[styles.Icon,IconStyle]} name="arrowleft" size={24} color="white" />
      <AnimatedText style={[styles.HeaderText,TextStyle]}>Top Technology </AnimatedText>
      <View>
      <FlatList 
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
      </View>
 
  
    </Animated.View>
    </PanGestureHandler>
    <PanGestureHandler onGestureEvent={gestureHandler2}>
    <Animated.View style={[styles.View2,animatedStyle2]}>
    <Text style={styles.HeaderText2}>Top Technology </Text>
   
    </Animated.View>
    </PanGestureHandler>
    <PanGestureHandler onGestureEvent={gestureHandler3}>
    <Animated.View  style={[styles.View3,animatedStyle3]}>
    <Text style={styles.HeaderText3}>Top Technology </Text>

    </Animated.View>
    </PanGestureHandler>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  View1:{
    backgroundColor:"black",
    height:770,
    width:350,
   
    borderTopRightRadius:60
  },
  View2:{
    backgroundColor:"#5AC18E",
    height:770,
    width:350,
    borderTopLeftRadius:60,
    top:-660,
    alignSelf:'flex-end'
  },
  View3:{
    backgroundColor:"#F6546A",
    height:770,
    width:350,
    borderTopRightRadius:60,
    top:-1330,
    left:0
  },
  HeaderText:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    textTransform:"uppercase",
    left:20,
  },
  HeaderText2:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    left:20,
    top:30,
    textTransform:"uppercase"
  },
  HeaderText3:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    left:20,
    top:30,
    textTransform:"uppercase"
  },
  Icon:{
    padding:10,
    width:40,
    height:40,
    top:20,
  },
  Header:{
    left:20
  },
  Image:{
    width:330,
    height:220,
    resizeMode:'cover',
    borderRadius:20,
    position:'relative',
    zIndex:-100
  },
  ImageText:{
    position:'absolute',
    color:'white',
    bottom:20,
    left:70,
    fontSize:21,
    fontWeight:'bold',
    letterSpacing:0.1
  },
  HomeTop:{
    height:400
  },
  Caption:{
    fontSize:40,
    color:'white',
    textTransform:'uppercase',
    letterSpacing:-1.5,
    textAlign:'center',
    top:60,
    fontWeight:'bold',
    lineHeight:45,
    
  }

})

