export interface Sponsor {
  name: string;
  url: string;
  logo: string;
}

export const corporateMembers: Sponsor[] = [
  { name: 'MapQuest',          url: 'https://www.mapquest.co.jp/',       logo: 'mapquest.png' },
  { name: 'Software Factory',  url: 'http://www.sw-factory.com/',        logo: 'softwarefactory.png' },
  { name: 'Geolonia',          url: 'https://geolonia.com/',             logo: 'geolonia.png' },
  { name: 'Mapbox',            url: 'https://www.mapbox.jp/',            logo: 'mapbox.png' },
  { name: 'iC',                url: 'https://www.ic-inc.world/home',     logo: 'iC_logo.jpg' },
  { name: 'NTT Data',          url: 'https://www.nttdata.com/jp/ja/',    logo: 'nttdata.png' },
  { name: 'TomTom',            url: 'https://www.tomtom.com/',           logo: 'TomTom-logo-RGB_lockup.png' },
  { name: 'ILOHA OpenLab LLC', url: 'https://iloha-openlab.com/',        logo: 'iloha-openlab.svg' },
];

export const infrastructureSponsors: Sponsor[] = [
  { name: 'さくらインターネット', url: 'https://www.sakura.ad.jp/',      logo: 'sakurainternet.png' },
  { name: 'GMO',                 url: 'https://www.onamae-server.com/',  logo: 'gmologo.png' },
  { name: 'VirtualTech Japan',   url: 'https://virtualtech.jp/',         logo: 'vtj.png' },
];
