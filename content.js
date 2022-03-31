const CATEGORY = {
   MASSAGE: 'массаж',
   WATER:'вода',
   GAS:'газ',
   DENTAL: 'стоматология',
   LASHES:'мастер по ресницам'
}


export default [
   {
      category: CATEGORY.MASSAGE,
      name: "мустафа",
      wa: "+90 536 563 88 15"
   },
   {
      category: CATEGORY.MASSAGE,
      name: "ариф",
      wa: "+90 551 034 43 70"
   },
   {
      category: CATEGORY.MASSAGE,
      name: "юрий",
      wa: "+7 925 683 11 23",
      instagram: 'vamkuda_na_massage'
   },
   {
      category:CATEGORY.DENTAL,
      name: 'alanya dental hospital',
      wa: '+90 553 855 19 42',
      instagram: 'alanyadentalhospital'
   },
   {
      category: `${CATEGORY.GAS} ${CATEGORY.WATER}`,
      name: 'ufuk ticaret',
      wa: '+90 551 019 24 99',
   },
   {
      category: CATEGORY.LASHES,
      name:'brow lami',
      wa:'+7 701 447 77 13',
      instagram: '007lashes'
   }
]

