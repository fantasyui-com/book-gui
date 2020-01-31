<script>
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
</script>

<h1>Link Widget</h1>
<a href="https://github.com/fantasyui-com/sveltestrap/blob/master/src/Link.svelte" rel="noopener noreferrer" target="_blank">
  Link Widget
</a>

<Example source={sampleSource} stacked>
  <Sample />
</Example>
