import React from 'react';
import {View, FlatList} from 'react-native';
import {title} from '../../Styles/Typography';
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

const profile = {
  login: 'Dev4ster',
  id: 29731901,
  node_id: 'MDQ6VXNlcjI5NzMxOTAx',
  avatar_url: 'https://avatars3.githubusercontent.com/u/29731901?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/Dev4ster',
  html_url: 'https://github.com/Dev4ster',
  followers_url: 'https://api.github.com/users/Dev4ster/followers',
  following_url: 'https://api.github.com/users/Dev4ster/following{/other_user}',
  gists_url: 'https://api.github.com/users/Dev4ster/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/Dev4ster/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/Dev4ster/subscriptions',
  organizations_url: 'https://api.github.com/users/Dev4ster/orgs',
  repos_url: 'https://api.github.com/users/Dev4ster/repos',
  events_url: 'https://api.github.com/users/Dev4ster/events{/privacy}',
  received_events_url: 'https://api.github.com/users/Dev4ster/received_events',
  type: 'User',
  site_admin: false,
  name: 'Dev4ster - Victor Menezes',
  company: null,
  blog: 'https://vetor.tech',
  location: 'São paulo',
  email: null,
  hireable: null,
  bio: 'React Js | React Native | Node.js - Developer',
  public_repos: 21,
  public_gists: 2,
  followers: 23,
  following: 44,
  created_at: '2017-06-27T13:00:11Z',
  updated_at: '2020-04-04T21:55:59Z',
};
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
