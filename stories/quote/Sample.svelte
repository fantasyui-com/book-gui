<script>
  import { Quote } from 'sveltestrap';

  const text = [
    `Victorious warriors win first and then go to war,
     while defeated warriors go to war first and then seek to win.`
  ];

</script>

<Quote author="Sun Tzu" url="https://en.wikipedia.org/wiki/Sun_Tzu" {text} class="shadow" style="max-width: 32rem;"/>
