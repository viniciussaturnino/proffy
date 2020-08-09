import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import favIcon from '../../assets/images/icons/heart-outline.png';
import unfavIcon from '../../assets/images/icons/unfavorite.png';
import wppIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [favorite, setFavorite] = useState(favorited);
    
    function linkToWpp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    async function toggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (favorite) {
            // Remover
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            })

            favoritesArray.splice(favoriteIndex, 1);
            setFavorite(false);
        } else {
            // Adicionar
            favoritesArray.push(teacher);
            setFavorite(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer} >
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.button}>
                    <RectButton
                        onPress={toggleFavorite}
                        style={[styles.favoriteButton, favorite ? styles.favorited : {} ]}
                    >
                        { favorite ? <Image source={unfavIcon} /> : <Image source={favIcon} /> }
                    </RectButton>

                    <RectButton onPress={linkToWpp} style={styles.contactButton}>
                        <Image source={wppIcon} />
                        <Text style={styles.buttonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;