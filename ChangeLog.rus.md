2012.07.01, v0.3.0
===============
Уже прошла середина лета и, благодаря легкому похолоданию, мы, кажется, начали больше ценить эту волшебную пору года. Через месяц детишки пойдут в школу, в город нахлынут толпы жаждущих новых знаний студентов, и город плавно войдет в привычный ритм.
С момента прошлого релиза прошло уже больше трёх месяцев, а это значит пора выкатывать новый релиз. В нём будет очень много нового и интересного. У командира наконецто появилась новая иконка, терминал и редактор были полностью заменены и привязаны к вьеру. Код значительно упрощен и оптимизирован. Далее подробнее.

**Добавлена внешняя возможность:**
- Назначено f3 - просмотр.
- FilePicker получает ключ из modules.json.
- Добавлена возможность показывать помощь по F1.
- Jquery-terminal заменён на JQ-Console.
- Добавлена лицензия.
- Добавлено соглашение по именованию коммитов.
- Добавлен favicon.
- CodeMirror заменён на Ace.
- Обновление теперь возможно, при запуске с любого каталога.
- Добавлен исполняемый файл для npm -g.
- Файл сохраняется только если он был изменён в Editor.
- Для определения разделов на Windows, утилита diskpart заменена на wmic.
- Добавлена кнопка "~ - console" для вызова Консоли.
- Добавлена кнопка "f9 - menu" для вызова Меню.

**Исправленные ошибки:**
- Функция загрузки в Filepicker.
- this.promptNewFile -> Cmd.promptNewFile.
- Стили: .name{width}: 37% -> 35%.
- socket: log level: debug -> info.
- help: удален стиль "pre".
- Стили: .mode width: 25% -> 23%.
- DOM: убрана возможность принимать массив в jsload.
- Стили: .cmd-button: "outline:0".
- Сохранение и создание нового файла.

**Обновлены:**
- socket.io до v0.9.16.
- jquery до v2.0.3.
- minify до v0.2.1.

**Внутренние изминения:**
- Изменена jquery cdn в пользу той, что поддерживает https (jquery.com -> google cdn).
- Добавлен заголовок Access-Control-Allow-Origin для под возможности ajax запросов с других адресов.
- Добавлены функции в DOM:  createEvent(createKeyEvent, createClickEvent, createDblClickEvent), dispatch(dispatchKeyEvent, dispatchClickEvent, dispatchDblClickEvent).
- Переименован обьект CloudCommander -> CloudCmd.
- Функции загрузки перемещены в обьект Loader модуля DOM.
- Добавлен скрипт addtables.sh, добавляющий правила в фаервол.
- Исправлены повторяющиеся правила, связанные с фоном, в css.
- Переименована функция DOM.addListener - DOM.Events.add.
- Добавлена возможность повесить несколько обработчиков через Events.add.
- jqeuryLoader и socketLoader перемещены в обьект CMD в модуле DOM.
- Исправлена ошибка с удалением файла в Menu.
- Удалена функция _editFileName из Client.
- Удалена функция linuxWatch из Main.
- Добавлен tryCatch в fs.watch в cloudcmd.js.
- Переименовано KeyBinding в Key.
- Переименовано set - setBinded, unSet -> unsetBinded, get -> isBinded.
- Следующие функции теперь приватные: ajaxload, changeLinks, createFileTable, getJSONfromFileTable.
- Данные обйъекта CloudCmd.KEY перемещены в прототип CloudCmd.Key.
- Упрощены id плагинов.
- Переписаны модули _codemirror и View с прототипами.
- Добавлен метод hide в модуль View.
- Удалено свойство init из модулей View и Edit.
- Добавлена возможность передавать колбек во View: show(pData) -> show(pData, pCallBack).
- Добавлен модуль Help.
- Добавлена возможность устанавливать атрибуты в Loader.anyload.
- Добавлен обработчик disconect в Socket.
- Добавлена минификация и gzip в Socket.
- Если id уже используется происходит повторное соединение в Socket.
- Util.log теперь может вызываться с любым количеством параметров.
- Добавлена функция logArray в Util.
- Добавлена возможность смены каталога по cd в Socket.
- Добавлена возможность передавать функции Events.add массив.
- Добавлено событие unload.
- Добавлена в экспорт функция checkCallBackParams.
- Функция dispatch принимает на вход event или его название.
- Добавлены media-query для .cmd-button.

2012.04.22, v0.2.0
===============
Весна в разгаре, на деревьях появляются почки, наконец-то начинает теплеть.
А это значит, что пришло время выпускать на свободу новую версию Командира.

Много интересных вещей произошло и изменилось со времени прошлого релиза.
Сейчас мы рассмотрим поближе, что же именно изменилось. Итак начнём.

**Добавленна внешняя возможность:**
- Всплывающее сообщение об ошибках
- Создание папки.
- FilePicker.
- загружать файлы в облако и скачивать их в файловую систему.
- SSL.
- Перемещения файлов.
- Перехода на http, если https-сервер запустить не удалось.
- Если создаётся директория индикатор загрузки будет сверху.
- Обновления размера файла после изминения оного в редакторе.
- Копирования файлов.
- Выделения файлов клавишей Insert.
- Получения размера текущей папки при нажатии клавиши Space.
- Выделение всех файлов по Ctrl + A.
- Удаления файла по F8.
- Удаления нескольких файлов.

**Исправленные ошибки:**
- Несколько обработчиков клика по нажатию клавиш F3 и F4.
- Множественный вызов Sockets.
- Запись json в localStorage: всегда обновлялось содержимое корневой директории.
- В функциях Util.time и Util.timeEnd.
- Генереация href файла, который переименовывается.
- Выделение коревой директории клавишей Space
- Обработка выделенной корневой директории.
- Создание нового файла.
- Стиль выделения в Опере.
- Заголовок выдачи REST-фукнции fs метода GET.
- Отправка данных в ответ на запрос отличный от ?json в пути /url.
- Возвращение в папку, из которой был удален файл.

**Обновлены:**
- jquery до версии v2.0.0.
- dropbox до версии v0.9.2.
- socket.io до версии v0.9.14.

**Внутренние изминения:**
- Удален массив Listeners из модуля DOM.
- Переделан и оптимизирована функция getShortSize в CloudFunc.
- Контроль генерации заголовка кеша перенесен в модуль Main.
- Установка текущего файла перенесена в Client из CloudFunc.
- Изменён способ построения таблицы файлов. Теперь используются шаблоны.
- Загрузка SSL-сертификатов теперь асинхронная.
- Модуль DropBox перенесён в packege.json из папки Storage.
- Удаления выделеного файла из DOM.
- Рекурсивного получения размера текущей папки.
- Переименована функция promptNewFolder -> promptNewDir.
- Добавлена функция getSelectedNames.
- Удален модуль Сache.
- Оптимизирован модуль CloudFunc.

2012.03.01, v0.1.9
===============
Сегодня, в первый день весны, вышла новая версия облачного менеджера файлов: 0.1.9.
В связи с этим, есть двойной повод порадоватся: наконец, пришла весна,
с полной готовностью согревать серца жителей, после зимних холодов,
а так же новая порция положительных изминений и исправленных ошибок в
Облачном Командире.

Теперь Cloud Commander гораздо стабильнее,
продуманее, внего гораздо проще вносить изминения и добавлять новые функции.
Скоро будет много всего интересного.

С прошлой версии произошло очень много перемен и для пользователей и
для программистов, некоторые части были полностью переписаны, и теперь программа
более стабильна, а исходный код более простой и логичный.
К примеру раньше был один баг, из-за которого при нескольких одновременных
соединениях людям могли не приходить запрошенные файлы. Сейчас подобные просчёты
позади. Рассмотрим подробнее, чем нас порадует новая версия Cloud Commaner’а.

**Добавленна внешняя возможность:**
- загрузки файлов на Google Drive и DropBox;
- пункт VK в меню;
- прятать пункт меню Upload To, если ниодного storage модуля не задано в modules.json.
- показывать контекстное меню, правкой кнопкой мыши, даже если оно уже открыто
- не менять путь, если у нас нет прав на чтение папки.
- времнный редирект для старых no-js урлов.
- отключения кеширования файлов браузером в config.json
- загрузка файлов;
- сохранение файлов по <Ctrl> + <S> в CodeMirror;
- удаление файлов;
- пункт меню и возможность переименовать;
- экран помощи (<F1>, когда Viewer загружен);

**Убрана внешняя возможность:**
- Удалена часть URL, которая говорит о том, что JavaScript отключен. Теперь json-данные о структуре файлов будут получатся в собитии click с флагом ?json. Часть URL /no-js больше не будет поддерживатся;

**Исправленные ошибки:**
- загрузка терминала;
- в браузерах, которые поддерживают не все функции: jquery загружался после ie.js, должен загружатся — до;
- закрытием терминала и откритием Вьюера, внутри функции, которая возникает во-время возникновения события переменной event не существует (всё хорошо работало на вебките);
- высотой терминала;
- установка текущего курсора, когда выбрали пункт меню;
- ссылки в панели пути и с кликами на файлы.;
- поддержка старых браузеров;
- скроллинг в опере и Фаерфоксе;
- (ненастоящее) удаление файлов;
- установка текущего файла после обновления содержимого директории;
- нажатие на файле;
- первый и последующие показы меню, а так же выделение даблкликом в Firefox

**Обновлены:**
- jquery до версии v1.9.0.
- jquery-terminal до версии v0.4.22.
- jQuery-contextMenu до версии v1.6.5.
- socket.io до версии 0.9.13.
- CodeMirror до версии 2.37.01.
- dropbox до версии v.0.8.1.
- funcyBox до версии v2.1.4.

**Внутренние изминения:**
- Изменен способ получения github id (теперь это делается через config.json, rest api были удалены).
- Добавлены функции DOM.getCurrentFileContent(pCallBack [, pCurrentFile]) для получения содержимого файла в ФС, а так же обёртка Util.setTimeout(pFunction [, pCallBack, pTime]).
- Добавлена функция в win.js для парсинга вывода команды diskpart (которая используется для опредиления локальных дисков).
- Добавлена функция DOM.getCurrentDir().
- API url на клиенте читается с файла config.json.
- Если выбрана загрузка на Gist (GitHub) и у файла в формате json нет расширения — оно добавляется.
- Добавлена возможность авторизовыватся на Гитхабе через новое окно. Изминен редирект на /auth и добавлена фнукция rout в cloudcmd.js.
- DropBox, GDrive и GitHub модули теперь выглядят одинаково.
- Рефакторинг в модуле Viewer.
- Улучшена оптимизация файла menu.js с 2539 до 2444 байт.
- Добавлена возможность читать GDrive key из конфига.
- Добавлена возможность авторизовыватся на дропбоксе через popup.
- Добавлена возможность авторизовыватся на vk.com.
- Улучшен формат и парсинг файла modules.json.
- Добавлена возможность читать информацию о модулях сохранения из модуля меню.
- Добавлена простая система рендеринга шаблонов Util.render.
- Добавлены функции DOM.parseJSON и DOM.stringifyJSON, как обёртки над системными функциями.
- Добавлен плагин для миграции к новой версии jquery.
- Убрано получения данных из кеша Minify.
- JSON-файлы перемещены в папки json.
- Изминен шрифт с Octicons на Fonteollo.
- Полностью удален шрифт Octicons.
- Удалено свойство allowed из свойства cache в конфиге.
- С этого момента оптимизироватся будут лишь те файлы, дата последнего изминения которых была изменена.
- Убрана возможность кешировать файлы в памяти.
- Перемещены расширения из main.js в json/ext.json.
- Основная функциональность CloudCmd перемещена в commander.js из server.js.
- Добавлена возможность удалять приставку к URL /fs когда мы в корневом каталоге.
- Убраны перересовки создаваемые js.
- Добавлена возможность добавлять флаг ?json только если мы работаем с папкой.
- Изминен принцип работы функции clickProcessing в меню, теперь он гораздо проще.
- Произведен тотальный рефакторинг в файле commander.js, теперь там только генерация.
структуры каталогов в формате json.
- добавлен обьект RESTfull в DOM модуль для упрощения работы с CloudCmd REST API.