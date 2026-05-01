async function testTranslate() {
  const text = 'Liderlik ve Kalite Güvencesi Kültürü';
  const enRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=en&dt=t&q=${encodeURIComponent(text)}`);
  const enData = await enRes.json();
  const arRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=ar&dt=t&q=${encodeURIComponent(text)}`);
  const arData = await arRes.json();
  console.log('EN:', enData[0][0][0]);
  console.log('AR:', arData[0][0][0]);
}
testTranslate();
