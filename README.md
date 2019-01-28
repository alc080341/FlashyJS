# FlashyJS

A lightweight JS library for easy creation of menus, dropdown content and popups for simple websites.


## Installation

FlashyJS does not require installation. Simply download.


## Usage

To use FlashyJS, simply drop the stylesheet file flashy.css into the `<head>`of your document, and insert the JavaScript file flashy.js just below the closing `</body>` tag of your document.


## Features

Insert the following HTML and JavaScript to use each feature

### Dropdown content example

Add the following HTML to your document:

```
<button class="btn">Click me</button>
<div class="flashy_dropdown_content" id="dropdownContent1">
<h2>I'm moving content reveal</h2>
</div>
```

In your script, pass in three parameters: the id, the dropdown height in pixels and the speed.

```
flashyJS.dropdownContent("dropdownContent1",200,10)
```

### Popup example

Add the following HTML to your document:

```
	<button class="btn">Click me</button>
	<div id="background" class="flashy_popup_box_background">
	</div>
	<div id="foreground" class="flashy_popup_box">
		<h2>I am content that pops up!</h2>
		<button class="btn" id="closePopup">Close</button>
	</div>
```

In your script, pass in the id of the pop-up element, the pop-up background element and also the id of the close button to get rid of the popup

```
flashyJS.popupBox("foreground", "background", "closePopup")
```


### Tabbed menu example

Add the following HTML to your document:

```
	<div class="flashy_tabbed_menu" id="sampleMenu">

		<div class="flashy_tabs_button_area">
			<button class="btn">tab1</button>
			<button class="btn">tab2</button>
			<button class="btn">tab3</button>
			<button class="btn">tab4</button>
		</div>

		<div class="flashy_tabs_content_area">
			<div>
				<h2>This is the content of tab 1</h2>
			</div>
			<div>
				<h2>This is the content of tab 2</h2>
			</div>
			<div>
				<h2>This is the content of tab 3</h2>
			</div>
			<div>
				<h2>This is the content of tab 4</h2>
			</div>
		</div>
		
	</div>

```

In your script, pass in the id of the element:

```
flashyJS.tabbedMenu("sampleMenu")
```

## Further features

Open the file *flashy_template_examples.html* for a working template of examples


## Contributing

Pull requests are the right method here. Please match the naming convention (camelCase) and let me see a demo of submitted features in action, via a pen.  
