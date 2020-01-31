<script>
  import { Card, CardBody, CardHeader, CardTitle, CardText, Button } from "sveltestrap";

  import clsx from 'clsx';
  import { clean } from './utils';

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

</script>

<Card {...props} {id} class={classes} on:click {style}>
  <CardBody>
    {#if text.length > 0}
      <blockquote class="blockquote mb-0">
        {#each text as line, index}
          <p>{@html line}</p>
        {/each}
        <footer class="blockquote-footer text-dark">{#if author}<Button color="text" size="sm" href="{url}" rel="noopener noreferrer" target="_blank" class="text-dark p-0">{author}</Button>{/if}{#if source} in <cite title="{source}">{source}</cite>{/if}</footer>
      </blockquote>
    {/if}
  </CardBody>
</Card>
