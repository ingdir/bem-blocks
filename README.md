## BEM Blocks

###.b-static-popup
A CSS-only BEM block that implements static hover-based popups, controlled via modifiers.

#### Live Demo
Play with this block [here](http://htmlpreview.github.io/?https://github.com/ingdir/bem-blocks/blob/master/static-popup/b-static-popup.html).

#### HTML
HTML structure, simplest case:
```html
<div class="b-static-popup b-static-popup_dir_right">
    This container responds to hover.

    <div class="b-static-popup__popup">
        Here goes the HTML content of your popup
    </div>
</div>
```

HTML structure, advanced case with a separate anchor element:
```html
<div class="b-static-popup b-static-popup_dir_right">
    This container responds to hover.

    <div class="b-static-popup__anchor">
        This is an anchor element inside to position the popup to.
        <div class="b-static-popup__popup">
            Here goes the HTML content of your popup
        </div>
    </div>
</div>
```

You can mix `b-static-popup` class with any element, as long as that element is OK with being relatively positioned.
Defining the `anchor` element is an optional step that allows your hovering area be larger than the actual element
your popup is attached to.

#### Modifiers
`b-static-popup` block defines 3 modifiers:
  * `dir` specifies the popup direction (alignment); possible values are `left`, `right`, `top`, `bottom`;
  * `size` modifier specifies minimum width of the popup; possible values are `small`, `normal`, `large`;
  * boolean `show` modifier; use it to "freeze" the popup (make it permanently visible regardless of the hover state).

###.b-modal

#### Live Demo
Play with this block [here](http://htmlpreview.github.io/?https://github.com/ingdir/bem-blocks/blob/master/modal/b-modal.html).

#### HTML
```html
<table class="dm-modal">
    <tr>
        <td class="dm-modal__td">
            <div class="dm-modal__container">
                <div class="dm-modal__title"></div>
                <div class="dm-modal__close">&times;</div>
                <div class="dm-modal__content"></div>
            </div>
        </td>
    </tr>
</table>
```

Note: because of the way HTML works with z-indices, make sure the modal markup stays as close to the end of your document
as possible; preferrably, it should be the last DOM element inside the `BODY` container.

#### Modifiers

A boolean modifier, `hidden`, makes the modal invisible by default.
Remove it to make the modal appear on a page.

```html
<table class="dm-modal dm-modal_hidden"><!-- cannot see you, baby! -->
   ...
</table>
```

### Style customization
By default, styles come as both `.less` and `.css`. The `.css` file contains "reasonable defaults"; modify some
values in `.less` (see variables inside) and recompile to see what's possible. Nonetheless, `.less` file was
never tested to endure hardcore configuration changes; if you can make it perfect, contributions are welcome.

### Browser Compatibility
Firefox and Chrome are okay.

You're welcome to make it work with IE 5 and Netscape 4, too, as fortune always favors the brave.
