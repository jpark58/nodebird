import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [
    { nickname: '제로초' },
    { nickname: 'Idiot' },
    { nickname: 'nodebird follower1' },
  ];

  const followingList = [
    { nickname: 'j park' },
    { nickname: 'hello' },
    { nickname: 'hahaha' },
  ];

  return (
    <>
      <Head>
        <title>My Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
