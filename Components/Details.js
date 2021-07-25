import React from 'react'
import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import data from './Data'
import View2 from './View2';
import View1 from './View1';
import { useNavigation } from '@react-navigation/native';
const Details = () => {
  const navigaton=useNavigation();

  const Y = useSharedValue(0);
  const Y1 = useSharedValue(0);
  const Y2 = useSharedValue(0);
  const headerValue=useSharedValue(-100)
  const config={
    mass:1,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:0.1,
    restSpeedThreshold:0.6
  }
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startX + event.translationY;
     
    },
    onEnd: (_) => {
      if(Y.value<-10){
        Y.value = withSpring(-95,config);
      }
      if(Y.value>-95){
        Y1.value=withSpring(310,config);
        Y2.value=withSpring(190,config);
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
 
      transform: [
        {
          translateY: clamp(Y.value,-95,0)
        },
      ],
    };
  });
  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y1.value;
    },
    onActive: (event, ctx) => {
      Y1.value = ctx.startX + event.translationY;
     
      
    },
    onEnd: (_) => {
      
      if(Y1.value>220&&Y1.value<310){
        Y1.value=withSpring(-180,config)
      }
      else if(Y1.value<-100&&Y1.value>-183){
        Y1.value=withSpring(290,config)
       }
    },
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
 
      transform: [
        {
          translateY: clamp(Y1.value,-180,290)
        },
      ],
    };
  });
  const gestureHandler3 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = Y2.value;
    },
    onActive: (event, ctx) => {
      Y2.value = ctx.startX + event.translationY;
    },
    onEnd: (_) => {
      if(Y2.value<170&&Y2.value>80){
        Y2.value=withSpring(-344,config)
      }
    
     else if(Y2.value<-270&&Y2.value>-350){
      Y2.value=withSpring(170,config)
     }
    },
  });
  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: clamp(Y2.value,-344,170)
        },
      ],
    };
  });
  const HeaderStyle=useAnimatedStyle(()=>{
    return{
      top:interpolate(Y.value,[0,-105],[headerValue.value,0],Extrapolate.CLAMP),
      zIndex:1
     
    }
  })
  const onPress=()=>{
    navigaton.goBack()
  }
  const renderItem=({item,index})=>{
    return(
      <View style={{alignItems:'center',padding:10}}>
 
        <Image
        source={{uri:item.image}}
        style={styles.ImageList}
        />
      </View>
    )
  }
  return (
    <View>
      <Animated.View style={[styles.Header,HeaderStyle]}>
        <View style={styles.HeaderStyles}>
        <Feather style={styles.IconStyle} name="arrow-left" onPress={onPress} size={28} color="white" />
        <Text style={styles.HeaderText}>Month of Illustrations</Text>
        </View>
   
      </Animated.View>
     <Image
     source={{uri:'https://res.cloudinary.com/dn29xlaeh/image/upload/q_50,h_576/v1/beatgig-prod/g2gs4co6gmgud38lj7zl'}}
     style={styles.Image}
     />
     <View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
     <Animated.View style={[styles.View1,animatedStyle]}>
       <View1/>
     </Animated.View>
     </PanGestureHandler>
     <PanGestureHandler
      activeOffsetX={[-30, 30]}
      activeOffsetY={[-20, 20]}
     onGestureEvent={gestureHandler2}>
     <Animated.View style={[styles.View2,animatedStyle2]}>
       <View2/>
     </Animated.View>
     </PanGestureHandler>
     <PanGestureHandler
      activeOffsetX={[-30, 30]}
      activeOffsetY={[-20, 20]}
     onGestureEvent={gestureHandler3}>
     <Animated.View style={[styles.View3,animatedStyle3]}> 
      <View style={styles.View3Header}>
        <Text style={styles.View3HeaderT1}>Photos</Text>
        <Text style={styles.View3HeaderT2}>/55</Text>
      </View>
      <FlatList 
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
     </Animated.View>
     </PanGestureHandler>
     </View>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  Header:{
    height:100,
    width:"100%",
    backgroundColor:'black',
    borderTopRightRadius:25,
    borderBottomRightRadius:50
  },
  Image:{
    width:"100%",
    height:300,
    resizeMode:'cover',
    top:-100
  },
  View1:{
    height:670,
    backgroundColor:'white',
    top:-200,
    borderTopRightRadius:60,

  },
  View2:{
    height:670,
    backgroundColor:'#2a6aff',
    // backgroundColor:"#e75874",
    top:-780,
    borderTopRightRadius:60,
 
  }
  ,
    View3:{
    height:670,
    backgroundColor:'black',
    top:-1280,
    borderTopRightRadius:60
  },
  HeaderText:{
    // color:"rgba(0,0,255,0.5)",
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    left:30,
    lineHeight:25,
    letterSpacing:0
  },
  HeaderStyles:{
    flexDirection:'row',
    top:35,
    alignItems:'center',
    left:20
  },
  View3Header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:30,
    paddingVertical:15
  },
  View3HeaderT1:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  },
  View3HeaderT2:{
    color:'white'
  },
  ImageList:{
    width:170,
    height:220,
    resizeMode:'cover',
    borderRadius:20,
    position:'relative',
    zIndex:-100,
    left:20
  },
  IconStyle:{
    padding:10,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:30
  }
})
