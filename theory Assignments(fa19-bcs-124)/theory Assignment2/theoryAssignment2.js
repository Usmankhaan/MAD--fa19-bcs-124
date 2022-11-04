import React from "react"; 
 import { StyleSheet,View, Text , } from "react-native"; 
 import { SafeAreaView } from "react-native-web"; 
  
 export default function Ludo(props){ 
  
     return( 
         <> 
         <SafeAreaView> 
  
         <View style={styles.greenbox}> 
              
              
       
  
        <View style={styles.yellowbox}> 
        
        <View style={styles.smallbox3}> </View> 
        <View style={styles.smallbox4}>  </View> 
     
        </View> 
        <View style={styles.smallbox}> </View> 
        <View style={styles.smallbox2}>  </View> 
        <View style={styles.smallbox}> </View> 
         
         
      
         
         
          
        </View> 
         
         
  
         
  
  
        
     
         
         
        
       
       
         
          
        <View style={styles.centerbox}> 
        
        </View> 
         
  
         
         
        <View style={styles.redbox}> 
       
          
          
         <View style={styles.bluebox}> 
                 
        <View style={styles.smallbox3}> </View> 
        <View style={styles.smallbox4}>  </View> 
         
        </View> 
         
        </View> 
          
         
         
     
         
         </SafeAreaView> 
        
       
         
          
         </> 
     
     
  
     ) 
 } 
 const styles= StyleSheet.create({ 
  
 greenbox:{ 
     height:200, 
     width:200, 
    backgroundColor:"green" 
 } 
 , 
 redbox:{ 
     height:200, 
     width:200, 
    backgroundColor:"red", 
   marginTop: 30 
      
 }, 
 yellowbox:{ 
     height:200, 
     width:200, 
    backgroundColor:"yellow", 
    marginLeft:600 
    
  
   
    
    
      
 }, 
 bluebox:{ 
     height:200, 
     width:200, 
    backgroundColor:"blue", 
    marginLeft:598,    
    
  
   
    
    
      
 }, 
 centerbox:{ 
     height:150, 
     width:150, 
    backgroundColor:"white", 
  alignSelf:"center", 
  marginRight:500, 
  marginTop:20, 
 borderWidth:5 
   
   
    
    
    
  
   
    
    
      
 }, 
  
 smallbox:{ 
     height:45 
     ,width:45, 
     flexDirection:"row", 
     marginRight:5, 
      
  
      backgroundColor:"white", 
     flexWrap:"wrap", 
     borderWidth:5, 
     marginRight:56, 
      
   
  
   
      
 }, 
 smallbox2:{ 
     height:45 
     ,width:45, 
     flexDirection:"coloumn-reverse", 
     marginRight:56, 
  
     
  
     borderWidth:5, 
     flexDirection:"column", 
     
     
      
   
  
   
      
 }, 
 smallbox3:{ 
     height:45 
     ,width:45 
     , backgroundColor:"white", 
     borderWidth:5, 
     marginTop:70, 
     marginRight:40, 
     flexDirection:"row-reverse", 
     flexWrap:"wrap" 
     
      
   
  
   
      
 }, 
 smallbox4:{ 
     height:45 
     ,width:45 
     , backgroundColor:"white", 
     borderWidth:5, 
     alignSelf:"center", 
     marginLeft:50, 
     marginBottom:7, 
    flexDirection:"column-reverse", 
     marginBottom:29 
  
  
     
      
   
  
   
      
 } 
  
  
  
  
  
 })