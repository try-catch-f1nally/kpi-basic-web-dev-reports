function chooseLab(button) {
    const activeBtn = document.querySelector(".labButtons .activeButton");
    if (activeBtn) {
        activeBtn.className = "";
    } else {
        document.querySelector("main .container").classList.remove("unActive");
    }
    const chosenBtn = document.querySelector(`#${button.id}`);
    chosenBtn.className = "activeButton";
    switch (chosenBtn.id) {
        case "lab1":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"description\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Опис предметного середовища </button>" +
                "<button id=\"topic\" onclick=\"chooseInfo(this)\"> Тема, мета, посилання на ЛР</button>" +
                "<button id=\"structure\" onclick=\"chooseInfo(this)\"> Структура документа</button>" +
                "<button id=\"tables\" onclick=\"chooseInfo(this)\"> HTML-код таблиць</button>" +
                "<button id=\"forms\" onclick=\"chooseInfo(this)\"> HTML-код форми</button>" +
                "<button id=\"images\" onclick=\"chooseInfo(this)\"> HTML-код зображення</button>" +
                "<button id=\"conclusion\" onclick=\"chooseInfo(this)\"> Висновки</button>";
            break;
        case "lab2":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"about\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Постановка задачі ЛР №2</button>" +
                "<button id=\"lists\" onclick=\"chooseInfo(this)\"> Списки </button>" +
                "<button id=\"identifications\" onclick=\"chooseInfo(this)\"> Ідентифікатори </button>" +
                "<button id=\"indents\" onclick=\"chooseInfo(this)\"> Відступи </button>" +
                "<button id=\"floating_elements\" onclick=\"chooseInfo(this)\"> Плаваючі елементи </button>" +
                "<button id=\"selectorsByTagAndClass\" onclick=\"chooseInfo(this)\"> Селектори тегу і класу</button>" +
                "<button id=\"otherSelectors\" onclick=\"chooseInfo(this)\"> Інші селектори</button>" +
                "<button id=\"groupSelectors\" onclick=\"chooseInfo(this)\"> Групування селекторів</button>";
            break;
        case "lab3":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Тема. Мета. Посилання на звіт та сайт</button>" +
                "<button id=\"layout\" onclick=\"chooseInfo(this)\"> Зовнішній вигляд макету </button>" +
                "<button id=\"code_of_layout\" onclick=\"chooseInfo(this)\"> HTML-код макету </button>" +
                "<button id=\"table_layout\" onclick=\"chooseInfo(this)\">Розмітка сторінки за допомогою таблиці</button>" +
                "<button id=\"float_layout\" onclick=\"chooseInfo(this)\"> Розмітка сторінки за допомогою плаваючих блоків </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновки </button>";
            break;
        // case "lab4":
        //     document.querySelector("main .infoButtons").innerHTML = "";
        //     break;
        // case "lab5":
        //     document.querySelector("main .infoButtons").innerHTML = "";
        //     break;
        // case "lab6":
        //     document.querySelector("main .infoButtons").innerHTML = "";
        //     break;
        // case "lab7":
        //     document.querySelector("main .infoButtons").innerHTML = "";
        //     break;
        // case "lab8":
        //     document.querySelector("main .infoButtons").innerHTML = "";
        //     break;
        // case "lab9":
        //     document.querySelector("main .infoButtons").innerHTML = "";
        //     break;
    }
    chooseInfo(document.querySelector(".infoButtons").firstChild);
}

function chooseInfo(button) {
    document.querySelector(".infoButtons .activeButton").className = "";
    document.querySelector(`#${button.id}`).className = "activeButton";
    if (document.querySelector(".labButtons .activeButton").id === "lab1") {
        switch (button.id) {
            case "description":
                document.querySelector("main .container").innerHTML =
                    "<p> З розвитком інформаційних технологій та зацікавленістю людей до перегляду кіно зріс попит на пошукові" +
                    "                кіносервіси для швидкого підбору фільму. </p>" +
                    "            <p> Наш сервіс – зручна, сучасна, розумна система з багатофільтровим пошуком фільмів за різними параметрами" +
                    "                та ознаками, такими як назва, рік, рейтинг, жанр та країни створення фільму. Також сайт володіє" +
                    "                функціоналом сортування за рейтингом, датою, популярністю, віковою категорією та ін.</p>" +
                    "            <p> Акторами є користувачі системи: <i>адміністратор</i>, <i>незареєстрований (гість)</i> та <i>зареєстрований" +
                    "                користувач</i>," +
                    "                які мають наступні можливості: </p>" +
                    "            <h3>Гість: </h3>" +
                    "            <ul class='properties'>" +
                    "                <li> Пошук фільмів за допомогою фільтрів та сортування;</li>" +
                    "                <li> Перегляд інформації про фільм</li>" +
                    "                <li> Можливість зареєструватися на сайті</li>" +
                    "            </ul>" +
                    "            <br>" +
                    "            <h3> Зареєстрований користувач: </h3>" +
                    "            <ul class='properties'>" +
                    "                <li> Пошук фільмів за допомогою фільтрів та сортування</li>" +
                    "                <li> Перегляд інформації про фільм</li>" +
                    "                <li> Додавання коментаря</li>" +
                    "                <li> Можливість ставити вподобайки/невподобайки</li>" +
                    "                <li> Додавання фільму в список улюблених</li>" +
                    "            </ul>" +
                    "            <br>" +
                    "            <h3> Адміністратор: </h3>" +
                    "            <ul class='properties'>" +
                    "                <li> Додавання фільму в список улюблених</li>" +
                    "                <li> Видалення залишених користувачами коментарів до фільму</li>" +
                    "                <li> Блокування користувачів</li>" +
                    "            </ul>"
                break;
            case "topic":
                document.querySelector("main .container").innerHTML =
                    "<p><span class='bold'> Тема: </span> структура HTML-документа. Вибір предметної галузі. Робота з" +
                    " посиланнями, таблицями, зображеннями, формами в HTML-документі.</p>" +
                    "<p><span class='bold'> Мета: </span> придбати практичні навички роботи  з HTML-документом, " +
                    "таблицями, формами, зображеннями, посиланнями. Створити шаблон звітного HTML-документом для " +
                    "відображення результатів роботи всіх лабораторних робіт.</p>" +
                    "<p><span class='bold'> Посилання на ЛР: " +
                    "<a href='https://gangstaprogrammer.github.io/Films4You/'>https://gangstaprogrammer.github.io/Films4You/</a>" +
                    "</span></p>";
                break;
            case "structure":
                document.querySelector("main .container").innerHTML = "<div class=\"structure\">" +
                    "                <div><img src=\"img/lab1/structure.png\" alt=\"\"></div>" +
                    "                <div><p><i>index.html</i> - базовий HTML-документ </p>" +
                    "                    <p><i>temp.html</i> - HTML-документ з таблицею та формою</p>" +
                    "                    <p><i>style.css</i> - базовий css </p>" +
                    "                    <p><i>reset.css</i> - css, що обнуляє стилі, які за замовчуванням задані браузерами </p>" +
                    "                </div>" +
                    "            </div>";
                break;
            case "tables":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "                <div><img src=\"img/lab1/tableCode.png\" alt=\"\"></div>" +
                    "                <div><img src=\"img/lab1/tableImg.png\" alt=\"\"></div>" +
                    "            </div>" +
                    "            <div>" +
                    "                <p>Елемент &lt;table&gt; - контейнер для елементів, що визначають вміст таблиці</p>" +
                    "                <p> &lt;tr&gt; - створює рядок таблиці</p>" +
                    "                <p> &lt;td&gt; - створює комірки таблиці</p>" +
                    "                <p> &lt;thead&gt; - створює рядок, який розміщений зверху таблиці.</p>" +
                    "                <p> &lt;tfoot&gt; - створює рядок, який розміщений знизу таблиці.</p>" +
                    "            </div>";
                break;
            case "forms":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "                <div><img src=\"img/lab1/formCode.png\" alt=\"\"></div>" +
                    "                <div><img src=\"img/lab1/tableImg.png\" alt=\"\"></div>" +
                    "            </div>" +
                    "            <div>" +
                    "                <p>Елемент &lt;form&gt; представляє собою розділ документа, що містить інтерактивні елементи" +
                    "                управління, які дозволяють користувачеві відправляти інформацію на веб-сервер.</p>" +
                    "                <p>&lt;input&gt; створює інтерактивні елементи управління в веб-формах для" +
                    "                    отримання даних від користувача</p>" +
                    "            </div>";
                break;
            case "images":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "                <div><img src=\"img/lab1/imgCode.png\" alt=\"\"></div>" +
                    "                <div><img src=\"img/lab1/imgImgs.png\" alt=\"\"></div>" +
                    "            </div>" +
                    "            <div>" +
                    "                <p>HTML-елемент &lt;img&gt; вбудовує зображення в документ.</p>" +
                    "            </div>";
                break;
            case "conclusion":
                document.querySelector("main .container").innerHTML = "<p> Виконавши дану лабораторну роботу," +
                    " ми проаналізували сферу пошукових кіносервісів, що представлені на сучасному ринку, і розробили" +
                    " власний план створення системи багатофільтрового просунутого зручного кіносервісу. Також було" +
                    " створено звітний HTML-документ для відображення результатів роботи всіх лабораторних робіт.</p> ";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab2") {
        switch (button.id) {
            case "about":
                document.querySelector("main .container").innerHTML = "<p><span class='bold'>Тема: </span> Каскадні таблиці стилів. Селектори .ідентифікатори. Стильове оформлення текстових елементів в html-документах.</p>" +
                    "<p><span class='bold'>Завдання:</span>" +
                    "<ol><li> У програмному коді лабораторної работи №2 застосувати селектори тегу і класу на свій розуд. " +
                    "Вміти пояснити викладачу. Програмний код  даного пункту відобразити у звітному HTML-документі;</li>" +
                    "<li>У програмному коду лабораторної роботи №2  застосувати ідентифікатори. Вміти пояснити викладачу. " +
                    "Програмний код даного пункту відобразити у звітному HTML-документі. </li>" +
                    "<li>На свій розсуд застосувати сусідні, дочірні селектори, селектор атрибута та універсальний селектор. " +
                    "Програмні коди даного пункту відобразити у звітному HTML-документі. </li>" +
                    "<li>За допомогою каскадних таблиць стилів виконати на свій розсуд стильове оформлення текстових елементів. " +
                    "Показати як оформлюються:" +
                    "<ul class='dash'>" +
                    "<li> списки,</li>" +
                    "<li> різноманітні властивості кольору і фону,</li>" +
                    "<li> зовнішні та внутрішні  відступи,</li>" +
                    "<li> плаваючі елементи.</li>" +
                    "</ul></ol></p>";
                break;
            case "lists":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "                <div><img src=\"img/lab2/innerListsCode.png\" style='width: 600px' alt=\"\"></div>" +
                    "                <div><img src=\"img/lab2/css.png\" alt=\"\"></div>" +
                    "            </div>" +
                    "                <div><img src=\"img/lab2/innerLists.png\" style='width: 700px' alt=\"\"></div>" +
                    "            <div>" +
                    "                <p>&lt;ul&gt; - це контейнер маркованого списку</p>" +
                    "                <p> &lt;ol&gt; - це контейнер нумерованого списку</p>" +
                    "                <p> &lt;li&gt; - створює рядок(елемент) списку</p>" +
                    "            </div>";
                break;
            case "identifications":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "<div> <img src=\"img/lab2/lab2_identificators.png\" alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab2/lab2_ident_2.png\" alt=\"\"> </div>" +
                    "<div> <img src='img/lab2/idImg.png' alt=''/> </div>" +
                    "</div>" +
                    "<div>" +
                    "  <p> Ідентифікатор (званий також «ID селектор») визначає унікальне ім'я елемента, яке використовується для зміни його стилю і звернення до нього через скрипти.</p>\n" +
                    "  <p> Синтаксис застосування ідентифікатора наступний:</p>\n" +
                    "  <p> <b>#Ім'я ідентифікатору {Властивість1: значення; властивість2: значення; ... }</b></p>" +
                    "  <p> При описі ідентифікатора спочатку вказується символ решітки (#), потім йде ім'я ідентифікатора. Воно повинно починатися з латинської символу і може містити в собі символ дефіса (-) і підкреслення (_). Використання російських букв в іменах ідентифікатора неприпустимо. На відміну від класів ідентифікатори повинні бути унікальні, іншими словами, зустрічатися в коді документа лише один раз.</p>\n" +
                    "  <p> Звернення до ідентифікатора відбувається аналогічно класам, але в якості ключового слова у тега використовується атрибут id, значенням якого виступає ім'я ідентифікатора. Символ решітки при цьому вже не вказується.</p>\n" +
                    "</div>";
                break;
            case "indents":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "<div> <img src=\"img/lab2/paddingCode.jpg\" alt=\"\"></div>" +
                    "<div> <img src=\"img/lab2/paddingImg.jpg\" style=\"width: 200px;\" alt=\"\"></div>" +
                    "<div> <img src='img/lab2/paddingHtml.png' alt=''/> </div></div>" +
                    "<div> <p>Padding - Встановлює значення полів навколо вмісту елементу. Полем називається відстань від " +
                    "внутрішнього краю рамки елемента до уявного прямокутника, що обмежує його вміст</p>" +
                    "<p>Синтаксис padding: [значення | відтсотки] {1, 4} | inherit </p> <div/>";
                break;
            case "floating_elements":
                document.querySelector("main .container").innerHTML = "<div class='elementImages'>" +
                    "<div> <img src='img/lab2/floatCode.png' alt=''></div>" +
                    "<div> <img src='img/lab2/floatingElement.png' alt=''/></div>" +
                    "<div> <img src='img/tableCode.png' alt=''/></div></div>" +
                    "<p>CSS-властивість <i>float</i> визначає, по якій стороні буде вирівнюватися елемент, при цьому " +
                    "інші елементи будуть обтікати його з інших сторін</p>" +
                    "Значення:" +
                    "<p><i>left</i> - вирівнює елемент по лівому краю, а всі інші елементи, на кшталт тексту, обтікають " +
                    "його по правій стороні;</p>" +
                    "<p><i>right</i> - вирівнює елемент по правому краю, а всі інші елементи обтікають його по лівій стороні;</p>" +
                    "<p><i>none</i> - обтікання елемента не задається;</p>" +
                    "<p><i>inherit</i> - успадковує значення предки. </p>";
                break;
            case "selectorsByTagAndClass":
                document.querySelector("main .container").innerHTML = "<p><b>1.Селектор тегу:</b></p>\n" +
                    "<p>Селектор тегу іноді називається селектором імені типу або селектором елемента, оскільки він " +
                    "вибирає тег / елемент HTML у вашому документі. В прикладі ми використали тег header</p>\n" +
                    "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab2/headerHtml.png' alt=''/> </div>" +
                    "<div class=\"tableCodeImg\"> <img src=\"img/lab2/header.png\"  style=\"width: 200px; height:200px;\" alt=\"\"></div>\n" +
                    "<div class=\"tableImg\"> <img src=\"img/lab2/Header_site.png\"  style=\"width: 700px; height:40px;\" alt=\"\"></div>\n" + "</div>\n" +
                    "<p><b>2.Селектор класу:</b></p>\n" +
                    "<p>Селектор класу починається з крапки (.). Він вибере в документі все, до чого застосований цей клас. " +
                    "В живому прикладі нижче ми створили клас з ім'ям .filmname, і застосували його до кількох місцях в документі.</p>\n" +
                    "<div class=\"elementImages\">\n" +
                    "<div> <img src=\"img/lab2/filmname.png\" alt=''/> </div>\n" +
                    "<div> <img src=\"img/lab2/filmnamevdova.png\" alt=''/> </div>" +
                    "<div> <img src='img/lab2/Vdova.png' alt=''/> </div>" +
                    "</div>";
                break;
            case "otherSelectors":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "<div><img src=\"img/lab2/otherSelectorCode.jpg\" alt=\"\"></div></div>" +
                    "<div>" +
                    "<p>Універсальний селектор - Обирає всі елементи. За бажанням, він може бути обмежений певним" +
                    "простором імен або ставитися до всього простору імен " +
                    "внутрішнього краю рамки елемента до уявного прямокутника, що обмежує його вміст</p>\n" +
                    "<p>Синтаксис: * { style properties } </p>" +
                    "<p>На нашому сайті за допомогою універcального селектору задається шрифт для усього тексту" +
                    "Open Sans, колір світло-сірий та час, поки триває анімація переходу до її завершення. </p>" +
                    "<div/>";
                break;
            case "groupSelectors":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab2/groupSelectorsHtml.png' alt=''/></div>" +
                    "<div><img src=\"img/lab2/selectors.png\" alt=\"\"></div>\n" +
                    "<div><img src=\"img/lab2/groupselectors.png\" alt=\"\"></div></div>" +
                    "<div>" +
                    "<p>Щоб групувати CSS-селектори на аркуші стилів, використовуємо коми для розділення " +
                    "кількох згрупованих селекторів у стилі. Групуючи селектори CSS, ми застосовуємо однакові стилі до кожного з них.</p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab3") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .container").innerHTML =
                    "<p><span class='bold'> Тема: </span> Блочна верстка HTML-документу за макетом.</p>" +
                    "<p><span class='bold'> Мета: </span>придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок.</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports'>https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You'>https://github.com/GangstaProgrammer/Films4You - Сайт</a>";
                break;
            case "layout":
                document.querySelector("main .container").innerHTML = "<div class=\"elementImages img \">" +
                    "<div> <img src='img/lab3/lab3_layout1.png' style='width: 100%' alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab3/lab3_layout2.png\" style='width: 100%' alt=\"\"> </div>" +
                    "</div>"
                break;
            case "code_of_layout":
                document.querySelector("main .container").innerHTML =
                    "<xmp><!doctype html>" +
                    "<html lang=\"en\">" +
                    "<head>" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">" +
                    "    <title>Films4You</title>" +
                    "    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">" +
                    "    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>" +
                    "    <link href=\"https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Azeret+Mono&family=Montserrat&display=swap\"\n" +
                    "          rel=\"stylesheet\">" +
                    "    <link rel=\"stylesheet\" href=\"css/reset.css\"/>" +
                    "    <link rel=\"stylesheet\" href=\"css/style.css\"/>" +
                    "</head>" +
                    "<body>" +
                    "<div class=\"cover\">" +
                    "    <header>\n" +
                    "        <div class=\"wrapper\">" +
                    "            <div class=\"content\">" +
                    "                <div class=\"logo\">" +
                    "                    <a href=\"index.html\">" +
                    "                        <span class=\"films\">Films</span><span class=\"four\">4</span><span class=\"you\">You</span>" +
                    "                    </a>" +
                    "                </div>" +
                    "                <div class=\"menu_body\">" +
                    "                    <form action=\"\" class=\"search_by_name\">" +
                    "                        <input type=\"text\" placeholder=\"Пошук за назвою...\">" +
                    "                        <button type=\"submit\"><img src=\"img/search_icon\" alt=\"\"></button>" +
                    "                    </form>" +
                    "                    <div class=\"advanced_search\"><a href=\"#\">Розширений пошук</a></div>" +
                    "                    <div class=\"forms\">\n" +
                    "                        <div class=\"sign_in\"><a href=\"#\"> Вхід </a></div>\n" +
                    "                        <div class=\"sign_up\"><a href=\"#\"> Реєстрація </a></div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"menu_icon\"><span></span></div>\n" +
                    "            </div>" +
                    "        </div>" +
                    "    </header>" +
                    "    <div class=\"wrapper\">" +
                    "        <main>" +
                    "            <div class=\"roundabout\">" +
                    "                <div class=\"roundabout_title\">" +
                    "                    <h2> Новинки </h2>\n" +
                    "                    <a href=\"#\"> Показати всі</a>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "                <div class=\"films_row\">\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/black_widow.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Вдова (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/conjuring_3.webp\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\">Закляття 3 (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/f9.webp\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Форсаж 9 (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/don't_breathe_2.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Не дихай 2 (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/shang-chi_and_the_legend_of_ten_rings.avif\"\n" +
                    "                                                     alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Шан-Чі та легенда десяти кілець (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "            </div>\n" +
                    "            <div class=\"roundabout\">\n" +
                    "                <div class=\"roundabout_title\">\n" +
                    "                    <h2> Найпопулярніші </h2>\n" +
                    "                    <a href=\"#\"> Показати всі</a>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "                <div class=\"films_row\">\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/the_shawshank_redemption.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Втеча з Шоушенка (1994)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/inception.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Початок (2010)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/the_dark_knight.avif\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Темний лицар (2008)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/fight_club.avif\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Бійцівський клуб (1999)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"#\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/forest_gump.avif\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Форрест Гамп (1994)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                </div>" +
                    "                <hr>" +
                    "            </div>" +
                    "            <div class=\"roundabout\">" +
                    "                <div class=\"roundabout_title\">" +
                    "                    <h2> Незабаром у кіно </h2>" +
                    "                    <a href=\"#\"> Показати всі</a>" +
                    "                </div>" +
                    "                <hr>" +
                    "                <div class=\"films_row\">" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"#\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/halloween_kills.jpg\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Хеллоувін вбиває (2021)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"#\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/the_last_duel.jpg\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Остання дуель (2021)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"#\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/nebenan.jpg\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> По сусідству (2021)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/eternals.jpg\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Вічні (2021)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                    <div class=\"announcement\">" +
                    "                        <a href=\"\">" +
                    "                            <div class=\"poster\"><img src=\"img/posters/spencer.jpg\" alt=\"\"></div>" +
                    "                            <div class=\"film_name\"> Спенсер (2021)</div>" +
                    "                        </a>" +
                    "                    </div>" +
                    "                </div>" +
                    "                <hr>" +
                    "            </div>" +
                    "        </main>" +
                    "    </div>" +
                    "    <footer>" +
                    "        <div class=\"wrapper\"> © 2021 Films4You</div>" +
                    "    </footer>" +
                    "</div>" +
                    "<script src=\"js/script.js\"></script>" +
                    "</body>" +
                    "</html></xmp>";
                break;
            case "conclusions":
                document.querySelector("main .container").innerHTML = "<p> Виконавши дану лабораторну роботу," +
                    " ми придбали практичні навички роботи верстки сторінок засобами CSS, " +
                    " верстки на основі плаваючих елементів та таблиць," +
                    " з’ясували переваги та недоліки типів макетів веб-сторінок. </p>";
                break;
        }
    }
    // if (document.querySelector(".labButtons .activeButton").id === "lab3") {
    //     switch (button.id) {
    //
    //     }
    // }
    // if (document.querySelector(".labButtons .activeButton").id === "lab4") {
    //     switch (button.id) {
    //
    //     }
    // }
    // if (document.querySelector(".labButtons .activeButton").id === "lab5") {
    //     switch (button.id) {
    //
    //     }
    // }
    // if (document.querySelector(".labButtons .activeButton").id === "lab6") {
    //     switch (button.id) {
    //
    //     }
    // }
    // if (document.querySelector(".labButtons .activeButton").id === "lab7") {
    //     switch (button.id) {
    //
    //     }
    // }
    // if (document.querySelector(".labButtons .activeButton").id === "lab8") {
    //     switch (button.id) {
    //
    //     }
    // }
    // if (document.querySelector(".labButtons .activeButton").id === "lab9") {
    //     switch (button.id) {
    //
    //     }
    // }
}