/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';
import Screen2 from './src/Screen2';
import Screen1 from './src/Screen1';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [left, setModalVisible] = useState(0);


  

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const webHtml =  `<html>
  <body>
    <button onclick="thisIsOnload()">Try it</button>
  
    <script type="text/javascript" src="https://test.msg91.com/hello-new/assets/widget/chat-widget.js"> </script>
    <script type="text/javascript" src="https://control.msg91.com/app/assets/otp-provider/otp-provider.js"> </script>
    <script type="text/javascript">
    
    (function () {
    
    var jQueryScript = document.createElement('script');  
              jQueryScript.setAttribute('src','https://control.msg91.com/app/assets/otp-provider/otp-provider.js');
   document.head.appendChild(jQueryScript);
   
     var jQueryKScript = document.createElement('script');  
              jQueryKScript.setAttribute('src','https://test.msg91.com/hello-new/assets/widget/chat-widget.js');
   document.head.appendChild(jQueryKScript);
   
     var configuration = {
    widgetId: "326a63733354393830313330",
    tokenAuth: "205968TmXguUAwoD633af103P1",
    success: (data) => {
    sendDataToReactNativeApp(data);
    },
    failure: (error) => {
    sendDataToReactNativeApp(error);
    }
    };
    
    var helloConfig = {
        widgetToken: "4532e",
    };
    setTimeout(
            function initOTPWidget() {
    initSendOTP(configuration);
    initChatWidget(helloConfig, 0);
    setTimeout(
      function initOTPWidget() { window.chatWidget.open()}, 1000)
    }, 500);
        
    
    }());
    </script>
  </body>
  </html>`

  var verificationScript = `
  <html>
  <head>  
  </head>
  <body onload="initChatKWidget(); initOTPWidget()">
  <h1>Hello</h1>
  </body>
  </html>`

  const INJECTED_JAVASCRIPT = `function(){
  let helloConfig = {
      widgetToken: "4532e",
  };
  
  initChatWidget(helloConfig, 500);
  })();`

  const jsCode = "<iFrame src='https://reactnative.dev/' />";

  const PolicyHTML = require('./index.html');

return(
  <View style={{flex: 1, backgroundColor: 'pink'}}>

<View style={[styles.container, {left, flex: 1}]}>
          <Screen1 />
        </View>
      

<View>
  <TouchableOpacity style={{backgroundColor:'red',padding:30}}>
    <Text>ksdhfjsdbf</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>ksdhfjsdbf</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>ksdhfjsdbf</Text>
  </TouchableOpacity>
</View>
  <TouchableOpacity
  style={{backgroundColor: 'grey', height: 70, width: 70, borderRadius: 100, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 20, right: 20}}
  onPress={()=> {
    setModalVisible(left == -1000 ? 0 : -1000)
  }}
  >
  <Text>X</Text>
    </TouchableOpacity>
  </View>
)

  // return (
  //   <WebView
  //   // style={{height: 200, width: 200, backgroundColor: 'yellow', alignSelf: 'center'}}   
  //     // source={{html: webHtml}}
  //     source={PolicyHTML}
  //     // source={{uri: 'https://reactnative.dev/'}}
  //     // originWhitelist={['*']}
  //     // javaScriptEnabledAndroid={true}
  //     javaScriptEnabled
  //     // injectedJavaScriptBeforeContentLoaded={`document.querySelector('html').innerHTML = verificationScript;`}
  //     injectedJavaScript={`
  //       (function () {
        
  //       var jQueryScript = document.createElement('script');  
  //                 jQueryScript.setAttribute('src','https://control.msg91.com/app/assets/otp-provider/otp-provider.js');
  //      document.head.appendChild(jQueryScript);
       
  //        var jQueryKScript = document.createElement('script');  
  //                 jQueryKScript.setAttribute('src','https://test.msg91.com/hello-new/assets/widget/chat-widget.js');
  //      document.head.appendChild(jQueryKScript);
       
  //        var configuration = {
  //       widgetId: "326a63733354393830313330",
  //       tokenAuth: "205968TmXguUAwoD633af103P1",
  //       success: (data) => {
  //       sendDataToReactNativeApp(data);
  //       },
  //       failure: (error) => {
  //       sendDataToReactNativeApp(error);
  //       }
  //       };
        
  //       var helloConfig = {
  //           widgetToken: "4532e",
  //       };
  //       setTimeout(
  //               function initOTPWidget() {
  //       initSendOTP(configuration);
  //       initChatWidget(helloConfig, 0);
  //       setTimeout(
  //         function initOTPWidget() { window.chatWidget.open()}, 2000)
  //       }, 500);
            
        
  //       }());`}
  //     // injectedJavaScript
  //     userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
  //     onMessage={(event) => {}}
  //     ref={() => {}}
  
  //     // setSupportMultipleWindows={true}
  //   />

  //       // <WebView source={{ html: `<html>
  //       // <body onload="thisIsOnload()">
  //       //   <script type="text/javascript" src="https://test.msg91.com/hello-new/assets/widget/chat-widget.js"> </script>
  //       //   <script type="text/javascript">
  //       //     var helloConfig = {
  //       //       widgetToken: "4532e",
  //       //   };
  //       //   function thisIsOnload(){
  //       //   initChatWidget(helloConfig, 500);
  //       //   }
  //       //   </script>
  //       // </body>
  //       // </html>` }} />

  // );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 800,
    // position: 'absolute',
    // zIndex:3
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
