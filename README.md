# FlashyJS

A lightweight JS library for easy creation of menus, dropdown content and popups for simple websites.


## Installation

FlashyJS does not require installation. Simply download.


## Usage

To use FlashyJS, simply drop the stylesheet file flashy.css into the `<head>`of your document, and insert the JavaScript file flashy.js just below the closing `</body>` tag of your document.


## Features

Insert the following HTML and JavaScript to use each feature

### Dropdown content example

Example:

```
<button class="btn">Click me</button>
<div class="flashy_dropdown_content" id="dropdownContent1">
<h2>I'm moving content reveal</h2>
</div>
```

In your script, pass in three parameters: the id, the dropdown height in pixels and the speed.

Example:

```
flashyJS.dropdownContent("dropdownContent1",200,10)
```

