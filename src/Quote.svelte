<script>
  import { Card, CardBody, CardHeader, CardTitle, CardText, Button } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

  const SLOTS = $$props.$$slots;

  let className = '';
  export { className as class };


  export let id = '';
  export let style = '';

  // Widget Properties
  export let author = '';
  export let url = '';
  export let source = '';
  export let text = [];

  const props = clean($$props);

  $: classes = clsx(
    className,
    'card',
    'bg-secondary',
    'text-white'
  );

  $: classesCardTitle = clsx(
    text.length == 0 ? 'mb-0' : false,
  );

</script>

<Card {...props} {id} class={classes} on:click {style}>

  <CardBody>

    <blockquote class="blockquote mb-0">
      <slot name="body"/>
      {#each text as line, index}
      <p>{@html line}</p>
      {/each}
      <footer class="blockquote-footer text-dark">{#if author}<Button color="text" size="sm" href="{url}" rel="noopener noreferrer" target="_blank" class="text-dark p-0" >by {author}</Button>{/if}{#if source} in <cite title="{source}">{source}</cite>{/if}</footer>
    </blockquote>

    <slot/>

  </CardBody>
</Card>
