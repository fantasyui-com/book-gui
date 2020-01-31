<script>
  import { Card, CardHeader, CardBody, CardText, Button } from "sveltestrap";
  
  import clsx from 'clsx';
  import { clean } from './utils';

  const SLOTS = $$props.$$slots;

  let className = '';
  export { className as class };


  export let id = '';
  export let style = '';

  // Widget Properties
  export let title = '';
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

  <CardHeader><h5>{title}</h5></CardHeader>

  <CardBody>
    <slot name="body"/>
    {#each text as line, index}
      <CardText>{@html line}</CardText>
    {/each}
    <Button color="primary" size="lg" href="{url}" rel="noopener noreferrer" target="_blank" class="mt-4 btn-block">{title}</Button>
  </CardBody>

  <slot/>

</Card>
