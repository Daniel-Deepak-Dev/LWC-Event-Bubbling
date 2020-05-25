# LWC-Event-Bubbling

### Helps how to propogate event from child component outside its own tag using bubbling property.

#### i.e,

```html
<!-- parentComp.html -->

<div oninptext={handleSelect}>
    <!-- oninptext is an event from c-child-comp
    which is bubbled up so we can use it outside the <c-child-comp> tag -->
    <c-child-comp> </c-child-comp>
</div>
```