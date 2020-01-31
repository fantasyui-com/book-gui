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
  export let title = '';
  export let author = '';
  export let url = '';
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

  <CardHeader><h5>{title} <Button color="text" size="sm" href="{url}" rel="noopener noreferrer" target="_blank" class="text-dark p-0" >by {author}</Button></h5></CardHeader>

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
