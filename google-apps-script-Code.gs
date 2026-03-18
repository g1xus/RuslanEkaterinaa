/**
 * Веб-приложение: принимает POST с анкеты в формате application/x-www-form-urlencoded.
 * В GAS параметры приходят в e.parameter.
 * Развернуть: Развернуть → Новое развертывание → Веб-приложение, доступ: Все.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var params = e.parameter;
  var name = params['имя и фамилия'] || '';
  var presence = params['присутствие'] || '';
  var drinks = params['напитки'] || '';
  var allergies = params['аллергии'] || '';
  var hot = params['горячее'] || '';

  sheet.appendRow([
    new Date(),
    name,
    presence,
    drinks,
    allergies,
    hot
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
