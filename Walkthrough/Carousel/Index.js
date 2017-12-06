import React, {Component} from "react";
import {Dimensions, View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './style';
import styles from './style';

const {width, height, scale} = Dimensions.get("window"),
  vw = width / 100,
  vh = height / 100;

export default class Index extends Component {
  getPages = ({item: page, index}) => {
    return (
      <View key={`page-${index}`} style={styles.slideInnerContainer}>
        <Text style={styles.title}>{page.title}</Text>
        <Text style={styles.description}>{page.description}</Text>

        <View style={[styles.imageContainer, styles.shadow]}>
          <Image source={{uri: page.image}} style={styles.image}></Image>
        </View>
      </View>
    )
  }

  render() {
    const PAGES = this.props.data;
    const {goBack} = this.props.navigation.navigate;
    return (
      <View style={styles.body}>
        <Carousel
          data={PAGES}
          renderItem={this.getPages}

          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid={true}
          removeClippedSubviews={false}
        />

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('auth')}>
          <Text style={styles.buttonText}>{"GET STARTED"}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}