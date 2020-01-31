<script>
  import { Card, CardHeader, CardBody, CardImg, CardTitle, CardText } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

  const SLOTS = $$props.$$slots;

  let className = '';
  export { className as class };


  export let id = '';
  export let style = '';

  // Widget Properties
  export let title = '';
  export let video = '';
  export let text = [];

  const props = clean($$props);

  $: classes = clsx(
    className,
    'card',
    'bg-dark',
    'text-white'
  );

  $: classesCardTitle = clsx(
    text.length == 0 ? 'mb-0' : false,
  );

</script>

<Card {...props} {id} class={classes} on:click {style}>

  {#if title}
  <CardHeader><h5>{title}</h5></CardHeader>
  {/if}

  <a href="https://www.youtube.com/watch?v={video}" rel="noopener noreferrer" target="_blank"><CardImg bottom src="https://img.youtube.com/vi/{video}/0.jpg" alt="{title}"/></a>

  <!-- print only if there is body slot or text --->
  {#if (text.length > 0)||((SLOTS)&&(SLOTS.body))}
  <CardBody>
    <slot name="body"/>
    {#each text as line, index}
    <CardText>{@html line}</CardText>
    {/each}
  </CardBody>
  {/if}

  <slot/>

</Card>
