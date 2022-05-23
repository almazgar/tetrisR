// xmlhttprequest-ssl содержит баг
// setImmediate is not defined
// Поэтому для всех тестов мы
// Добавляем полифилл
require("setimmediate");