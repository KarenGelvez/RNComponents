import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListItem} from '../components/FlatListItem';
import {FlatListSeparator} from '../components/FlatListSeparator';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
  return (
    <View style={{...styles.container, ...styles.globalMargin}}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
        data={menuItems}
        renderItem={({item}) => <FlatListItem menuItem={item} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={FlatListSeparator}
      />
    </View>
  );
};
