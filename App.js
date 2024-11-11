// ======================== Exercise1 ========================
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop:5}}>
//         <Text style={{fontSize:24}}>RP Values</Text>
//         <Text style={{color:'green'}}>Excellence</Text>
//         <Text style={{backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle:'italic'}}>Integrity</Text>
//         <Text style={{textAlign:'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor:'black', color:'white'}}>Enterprising</Text>
//       </View>
//   )
// }
//
// export default Exercise1;

// ======================== Exercise2 ========================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native'
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black'
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white'
//   },
//   title: {
//     fontWeight: 'bold'
//   }
// });
//
// const Exercise2 = () =>{
//   return (
//       <View style={{marginTop:5}}>
//
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//         </View>
//
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//
//       </View>
//   )
// };
//
// export default Exercise2;

// ======================== Exercise3A ========================
// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:40}]}>
//
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child Two
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//           Child Three
//         </Text>
//
//       </View>
//   )
// };
//
// export default Exercise3A;

// ======================== Exercise3B ========================
// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:40}]}>
//
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child Two
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//           Child Three
//         </Text>
//
//       </View>
//   )
// };
//
// export default Exercise3B;

// ======================== Exercise3C ========================
// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:40}]}>
//
//         <Text style={[styles.Child, {backgroundColor:'powderblue', maxWidth:90}]}>
//           Child One
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child Two
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'steelblue', maxHeight:120}]}>
//           Child Three
//         </Text>
//
//       </View>
//   )
// };
//
// export default Exercise3C;

// ======================== Exercise3D ========================
// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:40}]}>
//
//         <Text style={[styles.Child, {backgroundColor:'powderblue', flex:1}]}>
//           Child One
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'skyblue', flex:2}]}>
//           Child Two
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'steelblue', flex:3}]}>
//           Child Three
//         </Text>
//
//       </View>
//   )
// };
//
// export default Exercise3D;

// ======================== Exercise3E ========================
// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     justifyContent: 'space-around',
//     // justifyContent: 'space-between',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3E = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:40}]}>
//
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}]}>
//           Child One
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>
//           Child Two
//         </Text>
//
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>
//           Child Three
//         </Text>
//
//       </View>
//   )
// };
//
// export default Exercise3E;

// ======================== Exercise4 ========================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         backgroundColor: 'whitesmoke',
//         marginTop: 30,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center'
//     },
//     Child: {
//         width: 80,
//         height: 80,
//         textAlign: 'center',
//         textAlignVertical: 'center',
//         alignItems: 'center'
//     }
// });
//
// const Exercise4 = () => {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, {backgroundColor:'lightblue'}]}>Square 1</Text>
//             <Text style={[styles.Child, {backgroundColor:'lightgreen'}]}>Square 2</Text>
//             <Text style={[styles.Child, {backgroundColor:'red'}]}>Square 3</Text>
//         </View>
//     );
// };
//
// export default Exercise4;
