// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let pincodes = {
    "721302": ["kharagpur","West Bengal"],
    "110003": ["Delhi","Delhi"],
    "171001": ["Shimla","Himachal Pradesh"],
    "171002": ["Shimla","Himachal Pradesh"],
    "171003": ["Shimla","Himachal Pradesh"],
    "171004": ["Shimla","Himachal Pradesh"],
    "171005": ["Shimla","Himachal Pradesh"],
    "171006": ["Shimla","Himachal Pradesh"],
    "171007": ["Shimla","Himachal Pradesh"],
    "171008": ["Shimla","Himachal Pradesh"],
    "171009": ["Shimla","Himachal Pradesh"],
    "171010": ["Shimla","Himachal Pradesh"],
    
    "175001": ["Solan","Himachal Pradesh"],
    "175002": ["Solan","Himachal Pradesh"],
    "175003": ["Solan","Himachal Pradesh"],
    "175004": ["Solan","Himachal Pradesh"],
    "175005": ["Solan","Himachal Pradesh"],
    
    "176001": ["Dharamshala","Himachal Pradesh"],
    "176002": ["Dharamshala","Himachal Pradesh"],
    "176003": ["Dharamshala","Himachal Pradesh"],
    "176004": ["Dharamshala","Himachal Pradesh"],
    "176005": ["Dharamshala","Himachal Pradesh"],
    
    "175101": ["Kullu","Himachal Pradesh"],
    "175102": ["Kullu","Himachal Pradesh"],
    "175103": ["Kullu","Himachal Pradesh"],
    "175104": ["Kullu","Himachal Pradesh"],
    "175105": ["Kullu","Himachal Pradesh"],

    "177103": ["Kangra","Himachal pradesh"],
    "177101": ["Kangra","Himachal pradesh"],
    "177102": ["Kangra","Himachal pradesh"],
    "177103": ["Kangra","Himachal pradesh"],
    "177104": ["Kangra","Himachal pradesh"],
    "177105": ["Kangra","Himachal pradesh"],
    "177106": ["Kangra","Himachal pradesh"],
    "177107": ["Kangra","Himachal pradesh"],
    "177108": ["Kangra","Himachal pradesh"],
    "177109": ["Kangra","Himachal pradesh"],
    "177110": ["Kangra","Himachal pradesh"],
    
    "171021": ["Sanjauli","Himachal Pradesh"],
    "171022": ["Kufri","Himachal Pradesh"],
    "171023": ["Chadwick Falls","Himachal Pradesh"],
    
    "176301": ["Hamirpur","Himachal Pradesh"],
    "176302": ["Hamirpur","Himachal Pradesh"],
    "176303": ["Hamirpur","Himachal Pradesh"],
    
    "176401": ["Mandi","Himachal Pradesh"],
    "176402": ["Mandi","Himachal Pradesh"],
    "176403": ["Mandi","Himachal Pradesh"],
    
    "175021": ["Palampur","Himachal Pradesh"],
    "175022": ["Palampur","Himachal Pradesh"],
    "175023": ["Palampur","Himachal Pradesh"],
    
    "176221": ["Bilaspur","Himachal Pradesh"],
    "176222": ["Bilaspur","Himachal Pradesh"],
    "176223": ["Bilaspur","Himachal Pradesh"],
    
    "175201": ["Una","Himachal Pradesh"],
    "175202": ["Una","Himachal Pradesh"],
    "175203": ["Una","Himachal Pradesh"],
    
    "176201": ["Chamba","Himachal Pradesh"],
    "176202": ["Chamba","Himachal Pradesh"],
    "176203": ["Chamba","Himachal Pradesh"],
    "160001": ["Chandigarh","Chandigarh"],
    "160002": ["Chandigarh","Chandigarh"],
    "160003": ["Chandigarh","Chandigarh"],
    "160004": ["Chandigarh","Chandigarh"],
    "160005": ["Chandigarh","Chandigarh"],
    
    "143001": ["Amritsar","Punjab"],
    "143002": ["Amritsar","Punjab"],
    "143003": ["Amritsar","Punjab"],
    "143004": ["Amritsar","Punjab"],
    "143005": ["Amritsar","Punjab"],
    
    "148001": ["Bathinda","Punjab"],
    "148002": ["Bathinda","Punjab"],
    "148003": ["Bathinda","Punjab"],
    "148004": ["Bathinda","Punjab"],
    "148005": ["Bathinda","Punjab"],
    
    "140001": ["Ludhiana","Punjab"],
    "140002": ["Ludhiana","Punjab"],
    "140003": ["Ludhiana","Punjab"],
    "140004": ["Ludhiana","Punjab"],
    "140005": ["Ludhiana","Punjab"],
    
    "144205": ["Jalandhar","Punjab"],
    "144206": ["Jalandhar","Punjab"],
    "144207": ["Jalandhar","Punjab"],
    "144208": ["Jalandhar","Punjab"],
    "144209": ["Jalandhar","Punjab"],
    
    "143201": ["Gurdaspur","Punjab"],
    "143202": ["Gurdaspur","Punjab"],
    "143203": ["Gurdaspur","Punjab"],
    "143204": ["Gurdaspur","Punjab"],
    "143205": ["Gurdaspur","Punjab"],
    
    "151001": ["Faridkot","Punjab"],
    "151002": ["Faridkot","Punjab"],
    "151003": ["Faridkot","Punjab"],
    "151004": ["Faridkot","Punjab"],
    "151005": ["Faridkot","Punjab"],
    
    "142001": ["Patiala","Punjab"],
    "142002": ["Patiala","Punjab"],
    "142003": ["Patiala","Punjab"],
    "142004": ["Patiala","Punjab"],
    "142005": ["Patiala","Punjab"],
    
    "147001": ["Fatehgarh Sahib","Punjab"],
    "147002": ["Fatehgarh Sahib","Punjab"],
    "147003": ["Fatehgarh Sahib","Punjab"],
    "147004": ["Fatehgarh Sahib","Punjab"],
    "147005": ["Fatehgarh Sahib","Punjab"],
    
    "151101": ["Muktsar","Punjab"],
    "151102": ["Muktsar","Punjab"],
    "151103": ["Muktsar","Punjab"],
    "151104": ["Muktsar","Punjab"],
    "151105": ["Muktsar","Punjab"],
    
    "142050": ["Ropar","Punjab"],
    "142051": ["Ropar","Punjab"],
    "142052": ["Ropar","Punjab"],
    "142053": ["Ropar","Punjab"],
    "142054": ["Ropar","Punjab"],
    
    "143112": ["Hoshiarpur","Punjab"],
    "143113": ["Hoshiarpur","Punjab"],
    "143114": ["Hoshiarpur","Punjab"],
    "143115": ["Hoshiarpur","Punjab"],
    "143116": ["Hoshiarpur","Punjab"],
    "143112": ["Hoshiarpur","Punjab"],
    "143113": ["Hoshiarpur","Punjab"],
    "143114": ["Hoshiarpur","Punjab"],
    "143115": ["Hoshiarpur","Punjab"],
    "143116": ["Hoshiarpur","Punjab"],
    
    "160055": ["Mohali","Punjab"],
    "160056": ["Mohali","Punjab"],
    "160057": ["Mohali","Punjab"],
    "160058": ["Mohali","Punjab"],
    "160059": ["Mohali","Punjab"]
  }
  // res.status(200).json( [177101 , 177117, 177107, 177104,177103,177105,177110,177108] )
  res.status(200).json( pincodes )
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   let pincodes = {
//     "721302": ["kharagpur","West Bengal"],
//     "110003": ["Delhi","Delhi"],
    
//   }
// //   let pincodes = {
// //     
// // };




