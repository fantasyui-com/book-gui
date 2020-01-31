<script>
  import { Card, CardBody, CardHeader, CardTitle, CardText } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

  let className = '';
  export { className as class };

  export let id = '';
  export let style = '';

  // Widget Properties
  export let title = '';
  export let text = [];

  const props = clean($$props);

  $: classes = clsx(
    className,
    'card',
    'bg-danger',
    'text-white'
  );

</script>

<Card {...props} {id} class={classes} on:click {style}>
  {#if title}
    <CardHeader><h5>{title}</h5></CardHeader>
  {/if}
  {#if text.length > 0}
    <CardBody>
      {#each text as line, index}
        <CardText>{@html line}</CardText>
      {/each}
    </CardBody>
  {/if}
</Card>
