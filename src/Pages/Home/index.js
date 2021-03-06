import React from 'react';
import {FlatList} from 'react-native';
import AppContainer from '../../Components/AppContainer';
import Header from '../../Components/Header';
import HeaderTitle from '../../Components/HeaderTitle';
import HeaderSubtitle from '../../Components/HeaderSubtitle';
import Container from '../../Components/Container';
import SearchInput from '../../Components/SearchInput';
import ListContainer from '../../Components/ListContainer';
import ListTitle, {Bold} from '../../Components/ListTitle';
import ListItemsContainer from '../../Components/ListItemsContainer';
import DevListItem from '../../Components/DevListItem';

import Devs from '../../Components/DevListItem/devs.json';

export default function Home() {
  return (
    <AppContainer>
      <Header>
        <HeaderTitle>DevFinder</HeaderTitle>
        <HeaderSubtitle>
          Exibindo Desenvolvedores semelhantes em municípios próximos. Para
          modificar suas preferências utilize o campo de busca.
        </HeaderSubtitle>
      </Header>
      <Container>
        <SearchInput placeholder="Digite a cidade desejada" />
        <ListContainer>
          <ListTitle>
            DESENVOLVEDORES EM <Bold>SÃO PAULO-SP</Bold>
          </ListTitle>
          <ListItemsContainer>
            <FlatList
              keyExtractor={(item) => String(item.id)}
              data={Devs}
              renderItem={({item}) => <DevListItem profile={item} />}
            />
          </ListItemsContainer>
        </ListContainer>
      </Container>
    </AppContainer>
  );
}
