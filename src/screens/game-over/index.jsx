import { Button, Image, Text, View } from 'react-native';

import { Card } from '../../components/index';
import { styles } from './styles';
import { theme } from '../../constants';

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.istockphoto.com/id/1325433246/es/v%C3%ADdeo/animaci%C3%B3n-de-texto-game-over-con-el-canal-alfa-4k.jpg?s=640x640&k=20&c=_y_e72xtakNzsruRIjjBljRYRojcU3K3DDufC12Qt7w=',
          }}
          resizeMode="cover"
        />
        <Text style={styles.rounds}>Rondas : {rounds}</Text>
        <Text style={styles.selectedNumber}>Numero elegido : {userNumber}</Text>
        <View style={styles.buttonContainer}>
          <Button color={theme.colors.primary} title="Reiniciar" onPress={onRestart} />
        </View>
      </Card>
    </View>
  );
};

export default GameOver;