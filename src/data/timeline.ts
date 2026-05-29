export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  img: string;
}

export const events: TimelineEvent[] = [
  {
    year: '2008年',
    title: '日本におけるOpenStreetMap活動開始',
    description: '2004年に英国ではじまったOpenStreetMap活動が、2008年、日本地域で開始されました。GPSの軌跡を使って、ほぼ白紙の地図に主要な道路や地点情報が追加されています。',
    img: 'img/about/1_start.png',
  },
  {
    year: '2010年12月',
    title: 'OpenStreetMap Foundation Japan創設',
    description: 'OpenStreetMap日本コミュニティの有志により、本法人OpenStreetMap Foundation Japanが設立されました。この頃、全世界的にBing衛星写真のトレースが利用できるようになり、OpenStreetMap活動は次のステップに進みました。',
    img: 'img/about/2_assemble.png',
  },
  {
    year: '2011年3月',
    title: '東日本大震災とsinsai.info',
    description: '甚大な被害をもたらした東日本大震災に対し、OpenStreetMap有志およびコミュニティ外の多くの協力者と連携し、現地状況報告サイト sinsai.infoを開設しました。sinsai.infoによって、発災直後混乱していた現地の安否確認が行われ、市民による災害対応の新しい形が生まれました。',
    img: 'img/about/3_sinsai.png',
  },
  {
    year: '2014年',
    title: 'グッドデザイン賞授賞',
    description: '誰もが参加できる地図編集活動として、OpenStreetMapがグッドデザイン賞を受賞しました。',
    img: 'img/about/4_gd.png',
  },
  {
    year: '2017年8月',
    title: 'State of the Map 会津若松開催',
    description: '英国OpenStreetMap Foundationと共催で、国際カンファレンスState of the Map 2017 Aizuwakamatsuが開催されました。世界各地から200人を越えるマッパーが集まり、OpenStreetMapの未来について熱く意見を交わしました。',
    img: 'img/about/5_sotmaizu-logo.png',
  },
  {
    year: '2021年3月',
    title: 'OSMF Local Chapter認定',
    description: '英国OpenStreetMap Foundationの正式なLocal Chapter（地域支部）として認定されました。',
    img: 'img/about/6_foundation.png',
  },
];
