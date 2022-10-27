type Presentation = {
    slides : Slides,
    highlighting: Highlighting,
    name: string,
}

type Highlighting = {
    id: number,
}

type Slides = Array<Slide>

// слайд
type Slide = {
    objectsOnSlides: Objects,
    background: Background,
}

// объект на слайде
type ObjectOnSlides = Picture | Shape | Text;

// объекты на слайде
type Objects = Array<ObjectOnSlides>

type Background = Color | Picture // функции будут такие же как на картинки и цвета

// список цветов - Палитра
type Color = {
    nameColor: string,
}

// свойства : ширина, высота, координаты
type Features = {
    width: number,
    height: number,
    x: number,
    y: number,
    id: number,
}

// блок текста
type TextBlock = {
    text: string,
    features: Features,
    font: Font,
    textAlign: TextAlign,
}

type TextAlign = 'center' | 'left'| 'right'

// шрифт
type Font = {
    nameFont: string,
    sizeFont: number,
    colorFont: Color,
}

// картинка
type Picture = {
    src: string,
    features: Features,
    fill: Color,
    stroke: Color,
}

// фигура: квадрат, круг, эллипс, треугольник
type Shape = {
    typeShapes: string,
    features: Features,
    design: Design,
}

// дизайн элементов
type Design = {
    colorBackground: Color,
    colorStroke: Color,
}


// создать слайд, добавление элемента на слйд, удаление объект
function createSlide(slide: Slide): Slide
function addObject(slide: Slide, object: TextBlock | Shape | Picture): Slide //{ (object: object, id: newId) newSlide}
function deleteSlides(slide: Slide, idSlide): Slide // { (slide: Slide, id: newId) newSlide}

// функции: создание свойств, задаем высоту, ширину, координаты
function createFeatures(width: number, height: number, x: number, y: number ): Features // {width: width, height: height, x: x, y: y}
function setFeaturesX(features: Features, x: number): Features //{ features, x: x}
function setFeaturesY(features: Features, y: number): Features //{ features, y: y}
function setWidthFeatures(features: Features, width: number): Features //{ features, width: width}
function setHeightFeatures(features: Features, height: number): Features //{ features, height: height}

// функции: создать, поменять/вставить/написать текст, перемещение, изменение ширины, высоты, выравнивания, размера
function createTextBlock(features: Features, textAlign: TextAlign, font: Font): TextBlock //{ text: '', features: features, textAlign: textAlign, font: font}
function setTextInTextBlock(textBlock: TextBlock, text: string): TextBlock //{ textBlock, text: text}
function setTextAlignTextBlock(textBlock: TextBlock, position: TextAlign): TextBlock //{  } //ссылается на функцию, которая меняет положение
function setTextBlockNameFont(textBlock: TextBlock, nameFont: string): TextBlock //{textBlock, font: newFont} // вызывает функцию, которая выбирает шрифт
function setTextBlockSizeFont(textBlock: TextBlock, sizeFont: number): TextBlock //{textBlock, font: newFont} // вызывает функцию, которая выбирает размер шрифта

function changeTextAlign(textAlign: TextAlign, position: TextAlign) : TextAlign //{align: position}

// создание определенного стиля для текста: выбор шрифта, цвета, размера, начертание и тд
function createFont(nameFont: string, sizeFont: number): Font //{nameFont: nameFont, sizeFont: sizeFont, colorFont: Color.default}
function setFontNameFont(font: Font, nameFont: string): Font //{ font , nameFont: nameFont}
function setFontSizeFont(font: Font, sizeFont: number): Font //{font, sizeFont: sizeFont}
function setFontColorFont(font: Font, colorFont: Color): Font //{font, colorFont: colorFont}

//до картинки, изменение положения по х, по у, изменение высоты, ширины
function movePictureX(picture: Picture, x: number):Picture //{picture, newFeatures}
function movePictureY(picture: Picture, y: number):Picture {picture, newFeatures}
function changeWidthPicture(picture: Picture, width: number):Picture {picture, newFeatures}
function changeHeightPicture(picture: Picture, height: number):Picture {picture, newFeatures}
function createPicture(URL: string, features: Features):Picture {src: URL, features: newFeatures}

// создать фигуру, перемещение фигуры, изменение фона, высоты, ширины, координат х, у
function createShape(typeShapes: string, features: Features, style: Style): Shape {typeShapes: string, features: Features, style: Style}
function moveShapeX(shape: Shape, x: number): Shape { shape, features: newFeatures}             // можно будет вынести изменение по х, у, ширины и высоты у объекта и в функцию передавать уже объект
function moveShapeY(shape: Shape, y: number): Shape { shape, features: newFeatures}
function changeWidthShape(shape: Shape, width: number): Shape {shape, features: newFeatures}
function changeHeightShape(shape: Shape, height: number): Shape {shape, features: newFeatures}
function setShapeColorBackground(shape: Shape, color: Color): Shape { shape, design: newDesign} // будет вызывать функцию, которая меняет цвет фона - changeColorBackground
function setShapeColorStroke(shape: Shape, color: Color): Shape { shape, design: newDesign}  // будет вызывать функцию, которая меняет цвет обводки - changeColorStroke

// создание дизайна, меняем цвет фона, обводки
function changeColorStroke(design: Design, color: Color): Design { design, colorStroke: color)
    function createDesign(colorBackground: Color, colorStroke: Color): Design {colorBackground: Color, colorStroke: Color}
    function changeColorBackground(design: Design, color: Color): Design { design, colorBackground: color)
