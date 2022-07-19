// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Sub_course(props) {
//     let salary = ''; 
//     let Bonus = '';
   
//     if(props.s < 50000){
//             Bonus = salary*10;
            
//         }
//         // console.log(Bouns);
    

//     return (
//         <View>
//             <Text> Employee Bonus : {Bonus}</Text>
//             {/* <Text> Employee Total salary: {salary + Bonus}</Text> */}
//         </View>
//     )
// } 


import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Sub_course(props) {
  let subcourse='';

    if(props.course === 'PROGRAMING'){
        subcourse = 'C';

    }else if(props.course === 'DISINING'){
        subcourse = 'PHOTOSHOP';

    }else if(props.course === 'ANIMATION'){
        subcourse = 'VFX';
    }

  return (
    <View style={StyleSheet.container}>
    <Text style={styles.Text1}>sub-course : {subcourse}</Text>
    </View>
  )
}
let styles = StyleSheet.create({

    Text1:{
        padding:20,
        backgroundColor:'#58D68D' ,
        fontSize: 20,
        marginTop:30
    },


})