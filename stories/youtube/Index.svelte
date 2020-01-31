<script>
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
</script>

<h1>Youtube Widget</h1>
<a href="https://github.com/fantasyui-com/sveltestrap/blob/master/src/Youtube.svelte" rel="noopener noreferrer" target="_blank">
  Youtube Widget
</a>

<Example source={sampleSource} stacked>
  <Sample />
</Example>
