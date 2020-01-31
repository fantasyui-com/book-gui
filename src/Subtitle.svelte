<script>
  import { Card, CardBody, CardHeader } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

  const SLOTS = $$props.$$slots;

  let className = '';
  export { className as class };


  export let id = '';
  export let style = '';

  // Widget Properties
  export let title = '';

  const props = clean($$props);

  $: classes = clsx(
    className,
    'card',
    'bg-info',
    'text-white'
  );

</script>

<Card {...props} {id} class={classes} on:click {style}>

  {#if title}
    <CardHeader><h3 class="text-center">{title}</h3></CardHeader>
  {/if}

  <slot/>

</Card>
