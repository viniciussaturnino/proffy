import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function LandingPage() {
    const { navigate } = useNavigation();

    function NavigateToGiveClasses() {
        navigate('GiveClasses');
    }

    function NavigateToStudy() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title} >
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold} >O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={NavigateToStudy} style={[styles.buttons, styles.buttonPrimary]}>
                    <Image source={studyIcon} resizeMode='contain' />
                    <Text style={styles.buttonText} >Estudar</Text>
                </RectButton>

                <RectButton onPress={NavigateToGiveClasses} style={[styles.buttons, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} resizeMode='contain' />
                    <Text style={styles.buttonText} >Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default LandingPage;