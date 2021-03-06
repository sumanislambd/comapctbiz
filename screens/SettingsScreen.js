import React, { Component } from 'react'
import {
    View, Image, StyleSheet, TouchableOpacity, ListView, Text
} from 'react-native'

import Container            from './../components/Container'
import Icon                 from 'react-native-vector-icons/SimpleLineIcons'
import colors               from './../styles/colors'
import profileData from '../resources/profiledata';


class SettingsScreen extends Component {
   static navigationOptions = ({ navigation }) => ({
     tabBarIcon: ({ tintColor }) => {
        return <Icon name="chart" size={25} color={tintColor} />;
      }
    });
    

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(profileData.data)
        }
    }

    render() {
        const { params } = this.props.navigation.state; 
        return (
            <Container>
                {
                    (params && params.showNavbar)
                    ?
                    <NavBar navigator={ this.props.navigation } headerLeftIconStyle={ styles.headerLeftIconStyle } />
                    :
                    null
                }
                <View style={ styles.container }>
                    { this._renderHeader() }
                    <ListView
                        enableEmptySections={ true }
                        dataSource={ this.state.dataSource }
                        renderRow={ this._renderRow }
                        removeClippedSubviews={false}
                     />
                </View>
            </Container>
        )
    }

    _renderRow = (rowData) => {
        return (
            <TouchableOpacity onPress={(rowData) => this._onPressRow(rowData)} style={ styles.row }>
                <View style={ styles.rowLeftParts }>
                    <Text type='h4'>{ rowData.name }</Text>
                    {
                        (rowData.description) ? <Text style={ styles.description }>{ rowData.description }</Text> : null
                    }
                </View>
                <Icon style={ styles.rowIcon } name={ rowData.iconName } size={25} />
            </TouchableOpacity>
        )
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.userInfosHolder }>
                    <View style={ styles.userInfos }>
                        <Text type='h1' style={ styles.username }>Username</Text>
                        <Text type='h5'>View and edit profile</Text>
                    </View>
                    <Image style={ styles.avatar } source={{ uri: 'https://scontent-frt3-1.cdninstagram.com/t51.2885-15/s640x640/e15/15623603_1636005733360687_308770619158167552_n.jpg' }} />
                </View>
            </View>
        )
    }

    _onPressRow() {

    }
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1
    },
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    header: {
        marginTop: 40,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700'
    },
    description: {
        fontSize: 12,
        color: colors.txtdark,
        marginTop: 2
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    rowLeftParts: {
        height: 70,
        justifyContent: 'center'
    },
    rowIcon: {
        color: colors.txtDark
    }
})

export default SettingsScreen;