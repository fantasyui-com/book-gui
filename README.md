Extended Bootstrap Components for Book Publishing

[Demo page](https://fantasyui.com)

## Components

- [Illustration](src/Illustration.svelte) ([story](stories/illustration/Index.svelte)/[sample](stories/illustration/Sample.svelte))
- [Business](src/Business.svelte) ([story](stories/business/Index.svelte)/[sample](stories/business/Sample.svelte))
- [Link](src/Link.svelte) ([story](stories/link/Index.svelte)/[sample](stories/link/Sample.svelte))
- [Poem](src/Poem.svelte) ([story](stories/poem/Index.svelte)/[sample](stories/poem/Sample.svelte))
- [Quote](src/Quote.svelte) ([story](stories/quote/Index.svelte)/[sample](stories/quote/Sample.svelte))
- [Text](src/Text.svelte) ([story](stories/text/Index.svelte)/[sample](stories/text/Sample.svelte))
- [Youtube](src/Youtube.svelte) ([story](stories/youtube/Index.svelte)/[sample](stories/youtube/Sample.svelte))
- [Subtitle](src/Subtitle.svelte) ([story](stories/subtitle/Index.svelte)/[sample](stories/subtitle/Sample.svelte))

Atom users heads up: install Markdown Preview Plus to use the above for navigation (clickable links)

## TODO

- Remove svelite, leaving only the compatible build system.
- Install svelite as a dependency


## Install

`npm install --save book-gui`

## Usage

_You need to include a link to Bootstrap 4 stylesheet in your page - these components do not include or embed any Bootstrap styles automatically._

To make using Bootstrap themes easier, this library does _not_ embed Bootstrap styles directly and you will need to include Bootstrap 4 CSS in your page.

Either in your HTML layout:

```html
<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
```

Or add from your Svelte app:

```
<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>
```

In your svelte component:

```html
<script>
  import { Button, Col, Row } from 'sveltestrap';
</script>

<Row>
  <Col>
    <Button color="primary" outline>Hello World!</Button>
  </Col>
</Row>
```

### Note on server-side rendering (SSR) Usage:

If you are using Sveltestrap in an SSR environment like Sapper,
it's recommended you import the component source directly, for example:

```html
<script>
  import Button from 'sveltestrap/src/Button.svelte';
  import Col from 'sveltestrap/src/Col.svelte';
  import Row from 'sveltestrap/src/Row.svelte';
</script>

<Row>
  <Col>
    <Button color="primary" outline>Hello World!</Button>
  </Col>
<Row>
```

### Tips and Tricks

#### Adding a new Component
1. Create the Code
    1. cp /src/Blank.svelte to NAME.svelte
    2. add NAME to /src/index.js
    3. Customize NAME.svelte
2.  Setup Stories
    1. cp -r /stories/blank to /stories/NAME
    2. add NAME to stories/index.stories.js
    3. Customize /stories/NAME
