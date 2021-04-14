import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getScaledValue } from "renative";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButton1Focused: false,
      isButton2Focused: false,
      isButton3Focused: false,
      isButton4Focused: false,
      isButton5Focused: false,
    };
    this.actionRef = {};
  }

  componentDidMount() {
    (Api.platform === "webos" || Api.platform === "tizen") &&
      this.actionRef["button1"] &&
      this.actionRef["button1"].focus(); //It'll work on Tizen/WebOS.
  }

  render() {
    const {
      isButton1Focused,
      isButton2Focused,
      isButton3Focused,
      isButton4Focused,
      isButton5Focused,
    } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            isButton1Focused ? styles.activeButton : styles.inactiveButton,
          ]}
          ref={(ref) => {
            this.actionRef["button1"] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton1Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton1Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.buttonText,
              isButton1Focused
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Button 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isButton2Focused ? styles.activeButton : styles.inactiveButton,
          ]}
          ref={(ref) => {
            this.actionRef["button2"] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton2Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton2Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.buttonText,
              isButton2Focused
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Button 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isButton3Focused ? styles.activeButton : styles.inactiveButton,
          ]}
          ref={(ref) => {
            this.actionRef["button3"] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton3Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton3Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.buttonText,
              isButton3Focused
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Button 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isButton4Focused ? styles.activeButton : styles.inactiveButton,
          ]}
          ref={(ref) => {
            this.actionRef["button4"] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton4Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton4Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.buttonText,
              isButton4Focused
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Button 4
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isButton5Focused ? styles.activeButton : styles.inactiveButton,
          ]}
          ref={(ref) => {
            this.actionRef["button5"] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton5Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton5Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.buttonText,
              isButton5Focused
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Button 5
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 500,
    margin: 20,
    //padding: 10,
    borderWidth: 2,
    backgroundColor: "#2f4f4f",
  },
  activeButton: {
    height: 120,
    width: 700,
    borderColor: "white",
  },
  inactiveButton: {
    // borderColor: "black",
    borderColor: "#2f4f4f",
  },
  buttonText: {
    color: "white",
  },
  activeButtonText: {
    fontSize: getScaledValue(30),
  },
  inactiveButtonText: {
    fontSize: getScaledValue(16),
  },
  container2: {
    flexDirection: "row",
  },
});

export default Screen;
