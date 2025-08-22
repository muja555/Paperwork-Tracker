import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { useFonts } from 'expo-font';

interface CustomTextProps extends TextProps {
    children: React.ReactNode;
    fontFamily?: string;
    style?: TextProps['style'];
}

const Text: React.FC<CustomTextProps> = ({
                                             children,
                                             fontFamily = 'Roboto',
                                             style,
                                             ...props
                                         }) => {
    // Load custom font (replace 'Roboto-Regular' with your font file)
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'), // Adjust path to your font file
    });

    // Combine default styles with custom styles
    const textStyle = [
        styles.text,
        { fontFamily: fontsLoaded ? fontFamily : 'System' }, // Fallback to system font
        style,
    ];

    return (
        <RNText style={textStyle} {...props}>
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default Text;
