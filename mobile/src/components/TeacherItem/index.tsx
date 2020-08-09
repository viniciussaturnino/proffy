import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import favIcon from '../../assets/images/icons/heart-outline.png';
import unfavIcon from '../../assets/images/icons/unfavorite.png';
import wppIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'http://github.com/viniciussaturnino.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Vinicius Saturnino</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Biografia de um químico que não faz a menor ideia do que escrever. Estou escrevendo apenas para encher esse texto e testar o layout.
            </Text>

            <View style={styles.footer} >
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>

                <View style={styles.button}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={favIcon} /> */}
                        <Image source={unfavIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={wppIcon} />
                        <Text style={styles.buttonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;