<script>
  import { Business } from 'sveltestrap';

  const text = [
    `<a href="https://www.ponoko.com/">Ponoko</a> provides laser cutting &amp; engraving services to turn your designs into custom products.`,
    `You select from 99+ beautiful materials, download the design template, add your design to it, then upload it to get an instant online quote to make your design real.`,
    `Pricing starts from $1. You can make 1 or 100,000. And your designs are made &amp; delivered as fast as same day.`,
    `A good example of a flat cut product that makes good money, is the wallet!`,
    `<a href="https://www.kickstarter.com">Kickstarter</a> has an article about wallets <a href="https://www.kickstarter.com/stories/wallets">Why are there so many wallets on Kickstarter?</a>`,
  ];

</script>

<Business title="Wallets" url="book-images/wallet.jpg" {text} class="shadow" style="max-width: 32rem;">

  <p slot="body">
    Take a look at <a href="https://www.trayvax.com/">Trayvax</a> and
    <a href="https://www.dangoproducts.com/">Dango Products</a> for more ideas.
  </p>

</Business>
