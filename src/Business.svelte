<script>
  import { Card, CardBody, CardImg, CardTitle, CardText } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

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
    'bg-warning',
    'text-dark'
  );

  $: classesCardTitle = clsx(
    text.length == 0 ? 'mb-0' : false,
  );

</script>

<Card {...props} {id} class={classes} on:click {style}>
  <CardImg src="{url}" alt="{title}"/>
  {#if text.length > 0}
    <CardBody>
      {#if title}
        <CardTitle class={classesCardTitle}><h5>{title}</h5></CardTitle>
      {/if}
      {#each text as line, index}
        <CardText>{@html line}</CardText>
      {/each}
    </CardBody>
  {/if}
</Card>
