<script>
  import { Card, CardBody, CardImg, CardTitle } from "sveltestrap";

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
    'bg-danger',
    'text-white'
  );

  $: classesCardTitle = clsx(
    text.length == 0 ? 'mb-0' : false,
  );

</script>

<Card {...props} {id} class={classes} on:click {style}>
  <CardImg src="{url}" alt="{title}"/>

  <CardBody>
    {#if title}
      <CardTitle class={classesCardTitle}>{title}</CardTitle>
    {/if}

    {#each text as line, index}
      <p>{@html line}</p>
    {/each}

    <slot/>

  </CardBody>
</Card>
