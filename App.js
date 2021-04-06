import React from 'react';
import {
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Header from './screens/Header';
import Numbers from './screens/Numbers';
const App = () => {
  const [isLoading,setLoading]=React.useState(true)
  const [buttonPressValue,setButtonPressValue]=React.useState("")
  const [result,setResult]=React.useState("")
  React.useEffect(function(){
    setTimeout(() => {
      setLoading(false)
    }, 500);
  },[])
  const prefomedCalculations=()=>{
      console.log(eval(buttonPressValue))
      eval(buttonPressValue)==="NaN"?"infinite":setResult(eval(buttonPressValue))
      
  }
  const validateText=()=>{
    if(buttonPressValue.endsWith("+") || buttonPressValue.endsWith("-") || buttonPressValue.endsWith("*") || buttonPressValue.endsWith("/") || buttonPressValue.endsWith(".") ) return false
    return true

  }
  const pressed=(text)=>{
    console.log(text)
    text !="=" ? setButtonPressValue(buttonPressValue+text.toString()): (validateText() && prefomedCalculations()) 
  }
  let rows=[]
  let numbs=[[1,2,3],[4,5,6],[7,8,9],[0,".","="]];
  for(i=0; i<4; i++){
    let col=[]
    for (j=0; j<3; j++){
      let num=numbs[i][j]
      col.push(
            <Numbers
              key={num}
              styleT={styles.btn}
              press={()=>pressed(num)}
              styleB={styles.btnText}
              num={num}
            />
      )

    }
    rows.push(
      <View key={numbs[i]} style={styles.row}>
        {col}
      </View>
    )
  }
  let functions=["DEL","+","-","*","/"]
  const operate=(operationalText)=>{
    switch (operationalText) {
      case "Del":
          console.log(operationalText)
          let delText=buttonPressValue.split('')
          delText.pop()

          setButtonPressValue(delText.join(''))
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
        if(buttonPressValue.endsWith("+") || buttonPressValue.endsWith("-") || buttonPressValue.endsWith("*") || buttonPressValue.endsWith("/") || buttonPressValue.endsWith(".") ) return false
        if (buttonPressValue=="") return
        setButtonPressValue(buttonPressValue+operationalText.toString())
    }
  }
  const longPress=()=>{
    try {
      if(text="Del"){
        setButtonPressValue("")
        setResult("")
      }
    } catch (error) {
        console.log(error)
    }
  }
  let ops=[]
  for(i=0; i <5;i++){
    let ans=functions[i]
    ops.push(
      <Numbers
        key={ans}
        styleT={styles.btn} 
        press={()=>operate(ans)}
        styleB={[styles.btnText , styles.white]}
        num={ans}
        longpresss={()=>longPress(ans)}
      />
    )
  }
  if(!isLoading){
    return (
      <> 
        <StatusBar barStyle="dark-content" backgroundColor="#aaff"/>
        <Header name="Calculator"/>
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{buttonPressValue}</Text>
            </View>
            <View style={styles.calculations}>
                <Text style={styles.calculationsText}>{result}</Text>

            </View>
            <View style={styles.cross}>
            </View>
            <View style={styles.buttons}>
              <View style={styles.numbers}>
                  {rows}
              </View>
              <View style={styles.operations}>
                  {ops}
              </View>
            </View>

        </View>
      </>
      );
  }else{
    return(
      <>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      </>
    )
  }
};

const styles=StyleSheet.create({
  container:{
    flex:1
  },

  result:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    padding:20


  },
  cross:{
    justifyContent:'center',
    alignItems:'flex-end',
    padding:20
  },
  resultText:{
    fontSize:30,
    color:'#000',
    fontWeight:'bold'
  },

  calculations:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    padding:20

  },
  calculationsText:{
    fontSize:30,
    color:'#000',
    fontWeight:'bold'
  },
  buttons:{
    flex:7,
    flexDirection:'row'
  },
  white:{
    color:"#fff"
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch'
  },
  btnText:{
    fontWeight:'bold',
    fontSize:30
  },
  numbers:{
    flex:3,
    backgroundColor:'#fafa'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  operations:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:'space-around',
  }

})
export default App;
