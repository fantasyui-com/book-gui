<script>
  import { Card, CardBody, CardHeader, CardTitle, CardText, Button } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

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

</script>

<Card {...props} {id} class={classes} on:click {style}>
  <CardHeader><h5>{title} <Button color="text" size="sm" href="{url}" rel="noopener noreferrer" target="_blank" class="text-dark p-0">{#if author}by {author}{/if}</Button></h5></CardHeader>
  {#if text.length > 0}
    <CardBody>
      {#each text as line, index}
        <CardText>{@html line}</CardText>
      {/each}
    </CardBody>
  {/if}
</Card>
