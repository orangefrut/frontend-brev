type Presentation = {
    slides: Slides,
    highlighting: Highlighting,
    name: string,
}

type Highlighting = {
    slides: Array<string>,
    objects: Array<string>,
}

type Slides = Array<Slide>

// слайд
type Slide = {
    id: string,
    objectsOnSlides: Objects | null,
    background: Background
}

// объект на слайде
type ObjectOnSlides = Picture | Shape['typeSh'] | TextBlock | null;

// объекты на слайде
type Objects = Array<ObjectOnSlides>

type Background = String | Picture // функции будут такие же как на картинки и цвета

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
    type: 'TextBlock',
    text: string,
    features: Features,
    font: Font,
    textAlign: TextAlign,
}

type TextAlign = 'center' | 'left' | 'right'

// шрифт
type Font = {
    nameFont: string,
    sizeFont: number,
    colorFont: string,
}

// картинка
type Picture = {
    src: string,
    features: Features,
    fill: string,
    stroke: string,
    type: 'Picture'
}

// фигура: квадрат, круг, эллипс, треугольник
type Shape = {
    typeSh: Circle | Square | Triangle,
    typeShapes: string,
    features: Features,
    design: Design,
    type: 'Shape'
}

type Circle = {
    radius: number,
    feature: Features,
    design: Design,
    type: 'Circle',
}

type Square = {
    feature: Features,
    design: Design,
    type: 'Square'
}

type Triangle = {
    feature: Features,
    design: Design,
    type: 'Triangle'
}

// дизайн элементов
type Design = {
    colorBackground: string,
    colorStroke: string,
}

function createId(): string {
    return '' + Math.random()
}

// создать слайд, добавление элемента на слйд, удаление объект
function createSlide(slides: Slides, slide: Slide, highlighting: Highlighting): Slides {
    return slides = [
        ...slides,
        slide = {
            id: createId(),
            objectsOnSlides: null,
            background: ''
        }
    ]
}

function createPresentation(slide: Slides, presentation: Presentation, highlighting: Highlighting): Presentation {
    return presentation = {
        slides: slide,
        highlighting: highlighting,
        name: '',
    }
}

function createNamePresentation(presentation: Presentation, name: string): Presentation {
    return presentation = {
        ...presentation,
        name: name,
    }
}

function createTextBlockObject(features: Features, textAlign: TextAlign, font: Font, object: TextBlock, objectO: Objects): Objects {
    return objectO = [
        ...objectO,
        createTextBlock(features, textAlign, font, object)
    ]
}

function createShapeObject(features: Features, object: Shape, objectO: Objects, typeShapes: string, style: Design, radius: number, typeSh: Circle | Square | Triangle): Objects {
    return objectO = [
        ...objectO,
        createShape(typeShapes, features, style, object, radius, typeSh)
    ]
}

function createPictureObject(URL: string, features: Features, object: Picture, objectO: Objects): Objects {
    return objectO = [
        ...objectO,
        createPicture(URL, features, object)
    ]
}

function selectObject(object: TextBlock | Shape | Picture, slide: Slides, features: Features, textAlign: TextAlign, font: Font, URL: string, typeShapes: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects): Objects {
    if (object.type == 'TextBlock') {
        return createTextBlockObject(features, textAlign, font, object, objectO)
    } else {
        if (object.type == 'Shape') {
            return createShapeObject(features, object, objectO, typeShapes, style, radius, typeSh)
        } else {
            return createPictureObject(URL, features, object, objectO)
        }
    }
}

function addObjectOnSlide(object: TextBlock | Shape | Picture, slides: Slides, slide: Slide, features: Features, textAlign: TextAlign, font: Font, URL: string, typeShapes: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects): Slide {
    return slide = {
        ...slide,
        objectsOnSlides: selectObject(object, slides, features, textAlign, font, URL, typeShapes, style, radius, typeSh, objectO),
    }
}

function createSlides(object: TextBlock | Shape | Picture, slides: Slides, slide: Slide, features: Features, textAlign: TextAlign, font: Font, URL: string, typeShapes: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects): Slides {
    return slides = [
        ...slides,
        addObjectOnSlide(object, slides, slide, features, textAlign, font, URL, typeShapes, style, radius, typeSh, objectO)
    ]
}

function addObjectInPresentation(object: TextBlock | Shape | Picture, slides: Slides, slide: Slide, features: Features, textAlign: TextAlign, font: Font, URL: string, typeShapes: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects, presentation: Presentation): Presentation {
    return {
        ...presentation,
        slides: createSlides(object, slides, slide, features, textAlign, font, URL, typeShapes, style, radius, typeSh, objectO)
    }
}

function deleteSlides(presentation: Presentation, slides: Slides): Presentation {
    return {
        ...presentation,
        slides: presentation.slides.filter((slide) => {
            if (slide.id == '') {
                slides.splice(NewSlides)
            }
        })
    }
}

// функции: создание свойств, задаем высоту, ширину, координаты
function createFeatures(width: number, height: number, x: number, y: number, feature: Features): Features {
    return feature = {
        width: width,
        height: height,
        x: x,
        y: y,
        id: 1,
    }
}

function setFeaturesX(features: Features, x: number): Features {
    return features = {
        ...features,
        x: x,
    }
}

function setFeaturesY(features: Features, y: number): Features {
    return features = {
        ...features,
        y: y,
    }
}

function setWidthFeatures(features: Features, width: number): Features {
    return features = {
        ...features,
        width: width,
    }
}

function setHeightFeatures(features: Features, height: number): Features {
    return features = {
        ...features,
        height: height,
    }
}

// функции: создать, поменять/вставить/написать текст, перемещение, изменение ширины, высоты, выравнивания, размера
function createTextBlock(features: Features, textAlign: TextAlign, font: Font, textBlock: TextBlock): TextBlock {
    return textBlock = {
        type: "TextBlock",
        text: '',
        features: features,
        font: font,
        textAlign: textAlign,
    }
}

function setTextInTextBlock(textBlock: TextBlock, text: string): TextBlock {
    return textBlock = {
        ...textBlock,
        text: text,
    }
}

function setTextAlignTextBlock(textBlock: TextBlock, position: TextAlign): TextBlock  //ссылается на функцию, которая меняет положение
{
    return textBlock = {
        ...textBlock,
        textAlign: position,
    }
}

function setTextBlockNameFont(textBlock: TextBlock, nameFont: string): TextBlock  // вызывает функцию, которая выбирает шрифт
{
    return textBlock = {
        ...textBlock,
        font: setNameFont(nameFont, textBlock["font"]),
    }
}

function setNameFont(nameFont: string, font: Font): Font {
    return font = {
        ...font,
        nameFont: nameFont,
    }
}

function setTextBlockSizeFont(textBlock: TextBlock, sizeFont: number): TextBlock  // вызывает функцию, которая выбирает размер шрифта
{
    return textBlock = {
        ...textBlock,
        font: setSizeFont(sizeFont, textBlock["font"]),
    }
}

function setSizeFont(sizeFont: number, font: Font): Font {
    return font = {
        ...font,
        sizeFont: sizeFont,
    }
}

function setTextBlockTextAlign(textBlock: TextBlock, position: TextAlign): TextBlock {
    return textBlock = {
        ...textBlock,
        textAlign: position,
    }
}

// создание определенного стиля для текста: выбор шрифта, цвета, размера, начертание и тд
function createFont(nameFont: string, sizeFont: number, font: Font, colorType: string): Font {
    return font = {
        nameFont: nameFont,
        sizeFont: sizeFont,
        colorFont: 'black',
    }
}


function setFontColorFont(font: Font, colorFont: string): Font {
    return font = {
        ...font,
        colorFont: colorFont,
    }
}

//до картинки, изменение положения по х, по у, изменение высоты, ширины
function createPicture(URL: string, features: Features, picture: Picture): Picture {
    return picture = {
        src: URL,
        features: features,
        fill: '',
        stroke: '',
        type: 'Picture'
    }
}

function movePictureX(picture: Picture, x: number, features: Features): Picture {
    features = {
        ...features,
        x: x,
    }
    return picture = {
        ...picture,
        features: features,
    }
}

function movePictureY(picture: Picture, y: number, features: Features): Picture {
    features = {
        ...features,
        y: y,
    }
    return picture = {
        ...picture,
        features: features,
    }
}

function changeWidthPicture(picture: Picture, width: number, features: Features): Picture {
    features = {
        ...features,
        width: width,
    }
    return picture = {
        ...picture,
        features: features,
    }
}

function changeHeightPicture(picture: Picture, height: number, features: Features): Picture {
    features = {
        ...features,
        height: height,
    }
    return picture = {
        ...picture,
        features: features,
    }
}

// создать фигуру, перемещение фигуры, изменение фона, высоты, ширины, координат х, у
function createShape(typeShapes: string, features: Features, style: Design, shape: Shape, radius: number, typeSh: Circle | Square | Triangle): Shape["typeSh"] {
    shape = {
        typeSh: typeSh,
        typeShapes: typeShapes,
        features: features,
        design: style,
        type: 'Shape'
    }
    if (shape.typeShapes == 'Circle') {
        return createCircle(features, style, shape, radius, typeSh)
    } else {
        if (shape.typeShapes == 'Square') {
            return createSquare(features, style, shape, typeSh)
        } else {
            return createTriangle(features, style, shape, typeSh)
        }
    }
}

function createCircle(features: Features, style: Design, shape: Shape, radius: number, typeSh: Circle | Square | Triangle): Circle {
    return typeSh = {
        radius: radius,
        feature: features,
        design: style,
        type: 'Circle',
    }
}

function createSquare(features: Features, style: Design, shape: Shape, typeSh: Square | Circle | Triangle): Square {
    return typeSh = {
        feature: features,
        design: style,
        type: 'Square',
    }
}

function createTriangle(features: Features, style: Design, shape: Shape, typeSh: Square | Circle | Triangle): Triangle {
    return typeSh = {
        feature: features,
        design: style,
        type: 'Triangle',
    }
}

function moveShapeX(shape: Shape, x: number, feature: Features): Shape {     // можно будет вынести изменение по х, у, ширины и высоты у объекта и в функцию передавать уже объект
    return shape = {
        ...shape,
        features: setFeaturesX(feature, x)
    }
}

function moveShapeY(shape: Shape, y: number, feature: Features): Shape {
    return shape = {
        ...shape,
        features: setFeaturesY(feature, y)
    }
}

function changeWidthShape(shape: Shape, width: number, feature: Features): Shape {
    return shape = {
        ...shape,
        features: setWidthFeatures(feature, width)
    }
}

function changeHeightShape(shape: Shape, height: number, feature: Features): Shape {
    return shape = {
        ...shape,
        features: setHeightFeatures(feature, height)
    }
}

function setShapeColorBackground(shape: Shape, color: string, design: Design): Shape {  // будет вызывать функцию, которая меняет цвет фона - changeColorBackground
    return shape = {
        ...shape,
        design: changeColorBackground(color, design)
    }
}

function changeColorBackground(color: string, design: Design): Design {
    return design = {
        ...design,
        colorBackground: color,
    }
}

function setShapeColorStroke(shape: Shape, color: string, design: Design): Shape {   // будет вызывать функцию, которая меняет цвет обводки - changeColorStroke
    return shape = {
        ...shape,
        design: changeColorStroke(color, design)
    }
}

function changeColorStroke(color: string, design: Design): Design {
    return design = {
        ...design,
        colorStroke: color,
    }
}

// создание дизайна, меняем цвет фона, обводки

function createDesign(colorBackground: string, colorStroke: string, design: Design): Design {
    return design = {
        colorBackground: colorBackground,
        colorStroke: colorStroke
    }
}
