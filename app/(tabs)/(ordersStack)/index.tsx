import { StyleSheet, View } from 'react-native';
import { Colors } from '@/app/constants/Colors';
import Text from '@/app/components/Text';
import Button from '@/app/components/Button';
import Space from '@/app/components/Space';
import { moderateScale, verticalScale } from '@/app/utils/Dimensions';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <EmptyOrders />
    </View>
  );
}

const EmptyOrders = () => {
  return (
    <View style={styles.emptyOrderView}>
      <Text style={styles.emptyTitle}>لا يوجد لديك تعقيبات حالية</Text>
      <Space height={verticalScale(20)} />
      <Button
        title={'انشئ تعقيب على معاملتك'}
        textStyle={styles.textStyle}
        btnStyle={styles.btnStyle}
        onPress={() => {
          router.navigate('/CreateOrder');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  emptyOrderView: {
    width: '100%',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: moderateScale(17),
  },
  btnStyle: {
    width: '80%',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
