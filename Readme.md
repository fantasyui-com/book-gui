Extended Bootstrap Components

[Demo page](https://fantasyui.com)

## Install

`npm install --save ???`

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
   A. cp /src/Blank.svelte to NAME.svelte
   B. add NAME to /src/index.js
2. Setup Stories
   A. cp -r /stories/blank to /stories/NAME
