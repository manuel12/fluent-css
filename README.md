# Custom Styles & Colors Library

## Introduction

### Brief overview of what the library does:
This library was inspired by the styles of the [Duolingo](https://www.duolingo.com/learn) and [Font Awesome](https://fontawesome.com/) websites. I wanted to create a library that would inmeditaly improve the look of an HTML website when imported, but also provided the user with classes to alter the stylings of the different elements in use.

### How the library was built:
The library was built using plain CSS.

## Usage

### How to download the library:
Simply clone the repository locally and extract the custom-styles.css and custom-colors.css files and add them to the root of your project


### How to import the library:
In order to import the library simply add the two library links on the head tag of your index.html

    <link rel="stylesheet" href="custom-styles.css" />
    <link rel="stylesheet" href="custom-colors.css" />
_This is of course assuming the styles are in the root of your project, if they are not then modify their paths accodingly._

After that add the link to the google (Valera Round) font.

    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
And finally add the script for the Font Awesome kit.

    <script src="https://kit.fontawesome.com/d0731b8ace.js" crossorigin="anonymous"</script>

## What's included in the library

### Custom Colors
- Background colors
- Border colors
- Text colors

### Custom Styles
- Inmediate elements styles
- Submit and Icon buttons
- Text styles
- Font-size styles
- Width styles

## Examples

### Headers

![Headers example](demo/headers.png)

### Button width classes

![Button width classes](demo/button-width-classes.png)

### Social buttons

![Social buttons](demo/social-buttons.png)

### Sound buttons

![Sound buttons](demo/sound-buttons.png)

