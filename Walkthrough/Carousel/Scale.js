import React, {Component} from "react";
import {Dimensions, View, StyleSheet, Image, Text} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './style';
import styles from './style';

const {width, height, scale} = Dimensions.get("window"),
  vw = width / 100,
  vh = height / 100;

export default class Index extends Component {
  getPages = ({item: page, index}) => {
    return <View key={`page-${index}`} style={styles.slideInnerContainerScale}>
      <Text style={[styles.title, {color: page.backgroundColor}]}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>

      <View style={styles.imageContainer}>
        <Image source={{uri: page.image}} style={styles.image}/>
      </View>
    </View>
  }

  render() {
    const PAGES = this.props.data;

    return (
      <Carousel
        data={PAGES}
        renderItem={this.getPages}

        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={1}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}/>
    )
  }
}