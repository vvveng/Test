const Name = 'Videoget';
const url = $request.url;
const regex = /(?<=accounts\/)[^\/]+/;
const match = url.match(regex);
const VIDEO = {};
VIDEO.need = match[0];

if (VIDEO.need) {
let msg = `${Name}`;
$notification.post(msg,'获取成功',VIDEO.need,clipboard);
console.log(msg);
console.log(VIDEO.need);
}
$done();