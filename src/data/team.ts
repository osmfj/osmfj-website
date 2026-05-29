export interface SocialLink {
  title: string;
  url: string;
}

export interface Member {
  name: string;
  pic: number;
  position: string;
  social: SocialLink[];
}

export const members: Member[] = [
  {
    name: '三浦 広志 (Miura Hiroshi)',
    pic: 1,
    position: '代表理事',
    social: [
      { title: 'twitter', url: 'https://twitter.com/miurahr' },
      { title: 'facebook', url: 'https://www.facebook.com/miurahr' },
    ],
  },
  {
    name: '飯田 哲 (Iida Satoshi, nyampire)',
    pic: 3,
    position: '副理事',
    social: [
      { title: 'twitter', url: 'https://twitter.com/nyampire' },
      { title: 'facebook', url: 'https://www.facebook.com/profile.php?id=100002075511572' },
    ],
  },
  {
    name: '坂ノ下 勝幸 (Sakanoshita Katsuyuki)',
    pic: 4,
    position: '副理事',
    social: [
      { title: 'twitter', url: 'https://twitter.com/k_sakanoshita' },
      { title: 'facebook', url: 'https://www.facebook.com/K.Sakanoshita' },
    ],
  },
  {
    name: '松澤 太郎 (Matsuzawa Taro)',
    pic: 5,
    position: '理事',
    social: [
      { title: 'twitter', url: 'https://twitter.com/smellman' },
      { title: 'facebook', url: 'https://www.facebook.com/btm.smellman' },
    ],
  },
  {
    name: '田中 俊寿 (Tanaka Toshihisa)',
    pic: 6,
    position: '監事',
    social: [
      { title: 'facebook', url: 'https://www.facebook.com/tosihisa' },
    ],
  },
];